// Este archivo contiene funciones para interactuar con Google Sheets como contador
// Debes reemplazar la URL por la de tu Google Apps Script

const BASE_URL = 'https://script.google.com/macros/s/AKfycbzCawKIfv3fwUMJjOG6R8zPgHLUrcVJT0rwXfymE0SgIQyjFfttYQ669QhqYZ_qdeK6/exec';

export async function incrementarContador() {
  const res = await fetch(BASE_URL, {
    method: 'POST',
  });
  return res.text();
}

export async function obtenerContador() {
  const res = await fetch(BASE_URL);
  return res.text();
}
