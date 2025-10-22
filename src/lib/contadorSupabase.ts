import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores por los de tu proyecto Supabase
const supabaseUrl = 'https://nyqredreddlnzjbrnhdx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55cXJlZHJlZGRsbnpqYnJuaGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNzQ1NDksImV4cCI6MjA3NjY1MDU0OX0.V65sAQw-hziqTCiXpiab0H2oKaioFu6tlNRsjweOlEM';
const supabase = createClient(supabaseUrl, supabaseKey);

// Obtener el valor actual del contador
export async function obtenerContador() {
  const { data, error } = await supabase
    .from('contador')
    .select('valor')
    .eq('id', 1)
    .single();
  if (error) throw error;
  return data.valor;
}

// Incrementar el contador de forma atómica usando la función SQL
export async function incrementarContador() {
  const { data, error } = await supabase.rpc('incrementar_contador', { row_id: 1 });
  if (error) throw error;
  return data;
}
