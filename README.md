# 🏡 House Predictor

Este proyecto es un sistema de predicción de precios de viviendas que utiliza un modelo de Machine Learning avanzado. Consta de un backend robusto desarrollado en Python y un frontend interactivo, demostrando una solución completa para análisis predictivo en el sector inmobiliario.

## 🌟 Importancia del Proyecto para las Empresas

En el sector inmobiliario y financiero, la precisión en la valoración de propiedades es fundamental. Este proyecto aborda una necesidad crítica para diversas empresas:

* **Inmobiliarias y Agentes de Bienes Raíces:**
    * **Valoración Rápida y Precisa:** Permite obtener estimaciones de precios de mercado instantáneas, mejorando la eficiencia en la tasación de propiedades para compra, venta o alquiler.
    * **Optimización de Estrategias de Precios:** Ayuda a fijar precios competitivos y atractivos, minimizando el tiempo de venta y maximizando las ganancias.
    * **Análisis de Mercado:** Proporciona insights sobre los factores que más influyen en el valor de una propiedad, permitiendo una mejor comprensión del mercado.

* **Bancos y Entidades Financieras:**
    * **Evaluación de Riesgos Hipotecarios:** Facilita la estimación precisa del valor de las garantías hipotecarias, reduciendo el riesgo en la concesión de créditos.
    * **Modelos de Previsión:** Contribuye a la creación de modelos de previsión financiera más sólidos y a la gestión de carteras de inversión inmobiliaria.

* **Empresas de Inversión y Fondos:**
    * **Identificación de Oportunidades:** Permite identificar propiedades infravaloradas o sobrevaloradas, optimizando las decisiones de inversión.
    * **Análisis de Portafolio:** Facilita la evaluación constante del valor de los activos inmobiliarios dentro de un portafolio de inversión.

* **Desarrolladores Urbanos y Constructoras:**
    * **Planificación de Proyectos:** Ayuda a estimar los precios de venta futuros de desarrollos, ajustando la oferta a la demanda del mercado.
    * **Optimización de Diseños:** Permite entender qué características de las propiedades son más valoradas, influyendo en el diseño y las comodidades de futuros proyectos.

En resumen, `House Predictor` es una herramienta estratégica que empodera a las empresas con **inteligencia de mercado basada en datos**, permitiéndoles tomar decisiones más informadas, eficientes y rentables en un entorno inmobiliario dinámico.

## 🚀 Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

**Backend (Python):**
* **Python:** Lenguaje de programación principal.
* **scikit-learn:** Para la construcción y entrenamiento del modelo de Machine Learning.
* **Fastapi:** Framework web para la API REST del backend.
* **Joblib:** Para serializar y deserializar el modelo de IA.

**Frontend (Web):**
* _Ejemplo: **React:** Biblioteca de JavaScript para construir interfaces de usuario interactivas._
* _Ejemplo: **Next.js:** Framework de React para aplicaciones web con renderizado del lado del servidor._
* **HTML, CSS, JavaScript:** Fundamentos de la construcción web.

**Gestión de Versiones y Archivos Grandes:**
* **Git:** Sistema de control de versiones.
* **Git LFS (Large File Storage):** Utilizado para gestionar el modelo de Machine Learning (`.pkl`) debido a su gran tamaño, asegurando que el repositorio principal se mantenga ligero.

## 📁 Estructura del Proyecto

El repositorio está organizado en dos directorios principales:

* `backend/`: Contiene la lógica del servidor, la API de predicción y el modelo de Machine Learning.
    * `backend/app/models/`: Almacena el modelo de IA serializado (`best_housing_predictor_pipeline.pkl`).
    * `backend/app/`: Contiene la aplicación Flask y la lógica de negocio.
    * `backend/requirements.txt`: Lista de dependencias de Python para el backend.
* `frontend/`: Contiene la aplicación web del lado del cliente.
    * `frontend/src/`: Código fuente de la aplicación frontend.
    * `frontend/public/`: Archivos estáticos.
    * `frontend/package.json`: Definición de dependencias y scripts de la aplicación frontend.

## 🛠️ Cómo Ejecutar el Proyecto Localmente

Para explorar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

### 1. Clonar el Repositorio

Asegúrate de tener Git y Git LFS instalados.
```bash
git clone [https://github.com/felipehiguerat/Housepredictor.git](https://github.com/felipehiguerat/Housepredictor.git)
cd Housepredictor
