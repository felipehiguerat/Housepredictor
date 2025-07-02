from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import joblib
import pandas as pd
import numpy as np
from typing import Literal 

app = FastAPI(
    title="API de Predicción de Precios de Viviendas en California",
    description="API para predecir precios de viviendas medianos usando un modelo de Machine Learning.",
    version="1.0.0"
)


PIPELINE_PATH = "app/models/best_housing_predictor_pipeline.pkl"


pipeline = None

@app.on_event("startup")
async def load_ml_pipeline():
   
    global pipeline
    try:
        pipeline = joblib.load(PIPELINE_PATH)
        print(f"Pipeline de ML cargado exitosamente desde: {PIPELINE_PATH}")
    except FileNotFoundError:
        raise RuntimeError(f"Error: Pipeline no encontrado en {PIPELINE_PATH}. Asegúrate de que el archivo .pkl esté ahí.")
    except Exception as e:
        raise RuntimeError(f"Error al cargar el pipeline de ML: {e}")



class HousingFeatures(BaseModel):
    MedInc: float = Field(..., description="Mediana de ingresos del bloque (en decenas de miles de dólares).")
    HouseAge: float = Field(..., description="Edad media de las casas en el bloque.")
    AveRooms: float = Field(..., description="Número medio de habitaciones por hogar.")
    AveBedrms: float = Field(..., description="Número medio de dormitorios por hogar.")
    Population: float = Field(..., description="Población total en el bloque.")
    AveOccup: float = Field(..., description="Número medio de miembros del hogar.")
    Latitude: float = Field(..., description="Latitud del bloque.")
    Longitude: float = Field(..., description="Longitud del bloque.")
    ocean_proximity: Literal['<1H OCEAN', 'INLAND', 'NEAR OCEAN', 'NEAR BAY', 'ISLAND'] = Field(
        ..., description="Proximidad al océano."
    )

# --- Endpoint para la predicción ---
@app.post("/predict_price")
async def predict_price(features: HousingFeatures):
    if pipeline is None:
        raise HTTPException(status_code=503, detail="El modelo de ML no ha sido cargado todavía.")

    input_df = pd.DataFrame([features.dict()])

    try:
        
        predicted_value = pipeline.predict(input_df)[0]

        # El target original está en "cientos de miles de dólares", así que multiplicamos.
        predicted_price_usd = float(predicted_value * 100000)

        return {
            "predicted_house_price_usd": round(predicted_price_usd, 2),
            "unit": "USD"
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error durante la predicción: {e}")

# --- Endpoint de prueba/saludo ---
@app.get("/")
async def root():
    return {"message": "API de Predicción de Precios de Viviendas de California lista para predicciones en /predict_price"}