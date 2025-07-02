
FROM python:3.10-slim-buster

# Establece el directorio de trabajo dentro del contenedor.
# Todo lo que copiemos y creemos después de esta línea estará dentro de /app.
WORKDIR /app

# Copia el archivo de requerimientos al directorio de trabajo actual y luego instala las dependencias.
# Esto se hace en dos pasos para aprovechar el cache de Docker:
# Si requirements.txt no cambia, Docker no reinstalará las dependencias.
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto del código de tu aplicación FastAPI.
# Esto incluye 'main.py' y la carpeta 'models' con tu pipeline .pkl.
# El primer 'backend/app/' es la ruta en tu máquina local.
# El segundo '/app/app/' es la ruta dentro del contenedor.
COPY backend/app/ /app/app/

# Expone el puerto en el que se ejecutará tu aplicación FastAPI (por defecto, Uvicorn usa 8000).
# Esto informa a Docker que este puerto será usado, pero no lo "publica" en el host automáticamente.
EXPOSE 8000

# Comando para ejecutar la aplicación usando Uvicorn (servidor ASGI).
# --host 0.0.0.0 permite que la aplicación sea accesible desde fuera del contenedor.
# --port 8000 especifica el puerto.
# --workers 1 configura un worker para Uvicorn (puedes aumentar esto en producción).
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]