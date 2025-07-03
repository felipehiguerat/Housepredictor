import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.json();


    const FASTAPI_URL = process.env.FASTAPI_URL || 'http://localhost:8000/predict_price';

    const response = await fetch(FASTAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ detail: errorData.detail || 'Error en la API de FastAPI' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data); 
  } catch (error) {
    console.error('Error en la API Route:', error);
    return NextResponse.json({ detail: 'Error interno del servidor', error: error.message }, { status: 500 });
  }
}