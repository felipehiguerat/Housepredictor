// components/PredictionForm.jsx
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import InputGroup from './InputGroup'; 
function PredictionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    
    defaultValues: {
      MedInc:0,
      HouseAge:0,
      AveRooms:0,
      AveBedrms:0,
      Population:0,
      AveOccup:0,
      Latitude:0,
      Longitude:0,
      ocean_proximity: '<1H OCEAN',
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [predictedPrice, setPredictedPrice] = useState(null);

  const predecir = async (data) => {
    setIsLoading(true);
    setError(null);
    setPredictedPrice(null);

    try {
      console.log('Enviando datos para predicción:', data);
      const response = await fetch('/api/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
      });
      console.log("datos enviados a servidor", response);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setPredictedPrice(result.predicted_house_price_usd);
    } catch (err) {
      setError(`Error al obtener la predicción: ${err.message || 'Error desconocido'}`);
      console.error("Error fetching prediction:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(predecir)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

      <InputGroup
        label="Mediana de Ingresos"
        id="MedInc" 
        type="number"
        register={register("MedInc", { 
    required: "La mediana de ingresos es requerida.", 
    valueAsNumber: true 
  })}
        error={errors.MedInc} 
        step="any" 
      />

      <InputGroup
        label="Años de Antigüedad de la Casa"
        id="HouseAge" 
        type="number"
        register={register("HouseAge", { 
    required: "La antiguedad de casa es requerida.", 
    valueAsNumber: true 
  })}
        error={errors.HouseAge}
        step="any"
      />

      <InputGroup
        label="Número Promedio de Cuartos"
        id="AveRooms" 
        type="number"
        register={register("AveRooms", { 
    required: "este dato es requerido.", 
    valueAsNumber: true 
  })}
        error={errors.AveRooms}
        step="any"
      />

      <InputGroup
        label="Número Promedio de Habitaciones"
        id="AveBedrms"
        type="number"
        register={register("AveRooms", { 
    required: "este dato es requerido.", 
    valueAsNumber: true 
  })}
        error={errors.AveBedrms}
        step="any"
      />

      <InputGroup
        label="Población por Bloque"
        id="Population" 
        type="number"
        register={register("Population", { 
    required: "este dato es requerido.", 
    valueAsNumber: true 
  })}
        error={errors.Population}
        step="any"
      />

      <InputGroup
        label="Ocupación Promedio del Hogar"
        id="AveOccup" 
        type="number"
        register={register("AveOcupp", { 
    required: "este dato es requerido.", 
    valueAsNumber: true 
  })}
        error={errors.AveOccup}
        step="any"
      />

      <InputGroup
        label="Latitud"
        id="Latitude" 
        type="number"
        register={register("Latitude", { 
    required: "este dato es requerido.", 
    valueAsNumber: true 
  })}
        error={errors.Latitude}
        step="any"
      />

      <InputGroup
        label="Longitud"
        id="Longitude" 
        type="number"
        register={register("Longitude", { 
    required: "este dato es requerido.", 
    valueAsNumber: true 
  })}
        error={errors.Longitude}
        step="any"
      />

      <div className="mb-4"> 
        <label htmlFor="ocean_proximity" className="block text-sm font-medium text-gray-700">Proximidad al Océano</label>
        <select
          id="ocean_proximity"
          {...register("ocean_proximity", { required: "Este campo es requerido." })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="<1H OCEAN">&lt;1 Hora del Océano</option>
          <option value="INLAND">Interior</option>
          <option value="NEAR OCEAN">Cerca del Océano</option>
          <option value="NEAR BAY">Cerca de la Bahía</option>
          <option value="ISLAND">Isla</option>
        </select>
        {errors.ocean_proximity && <span className="text-red-500 text-xs">{errors.ocean_proximity.message}</span>}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading} 
        >
          {isLoading ? 'Prediciendo...' : 'Predecir'}
        </button>
      </div>

      {isLoading && (
        <p className="mt-4 text-center text-blue-600">Cargando predicción...</p>
      )}
      {error && (
        <p className="mt-4 text-center text-red-600 font-medium">{error}</p>
      )}
      {predictedPrice !== null && (
        <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-200 text-center">
          <h2 className="text-xl font-semibold text-blue-800">
            Precio Mediano Predicho:
          </h2>
          <p className="text-4xl font-bold text-blue-900 mt-2">
            ${predictedPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} USD
          </p>
        </div>
      )}
    </form>
  );
}

export default PredictionForm;