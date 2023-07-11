const datos = {
  info: [
    'Violencia: Personas que migraron debido a las BACRIM, conflicto armado y violencia.',
    'Los datos corresponden a las respuestas de jóvenes entre los 14 y 18 años de ambas muestras: PDET y Colombia, que migraron en algún punto de sus vidas',
  ],
  pais: [
    { nombre: 'No sabe o no responde', porcentaje: 3.5 },
    { nombre: 'Desastres Naturales', porcentaje: 1.8 },
    { nombre: 'Por razones de Salud', porcentaje: 3.5 },
    { nombre: 'Turismo', porcentaje: 11 },
    { nombre: 'Matrimonio', porcentaje: 0 },
    { nombre: 'Violencia', porcentaje: 5.3 },
    { nombre: 'Estudios', porcentaje: 2.7 },
    { nombre: 'Reunificación Familiar', porcentaje: 30 },
    { nombre: 'Económicas/Trabajo', porcentaje: 42 },
  ],
  municipio: [
    { nombre: 'No sabe o no responde', porcentaje: 3.3 },
    { nombre: 'Desastres Naturales', porcentaje: 0.24 },
    { nombre: 'Por razones de Salud', porcentaje: 0.95 },
    { nombre: 'Turismo', porcentaje: 6.1 },
    { nombre: 'Matrimonio', porcentaje: 1.3 },
    { nombre: 'Violencia', porcentaje: 6.4 },
    { nombre: 'Estudios', porcentaje: 14 },
    { nombre: 'Reunificación Familiar', porcentaje: 47 },
    { nombre: 'Económicas/Trabajo', porcentaje: 20 },
  ],
};

datos.pais.sort((a, b) => b.porcentaje - a.porcentaje);
datos.municipio.sort((a, b) => b.porcentaje - a.porcentaje);

export default datos;
