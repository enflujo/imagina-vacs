const datos = {
  infoIndicador: '',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  noPdet: [
    { nombre: 'Tocamiento indeseado', porcentaje1: 8.18, porcentaje2: 15.03 },
    { nombre: 'Intento de sexo', porcentaje1: 3.39, porcentaje2: 7.31 },
    { nombre: 'Sexo forzado físicamente', porcentaje1: 0.85, porcentaje2: 3.3 },
    { nombre: 'Sexo forzado bajo presión', porcentaje1: 1.08, porcentaje2: 1.87 },
  ],
  pdet: [
    { nombre: 'Tocamiento indeseado', porcentaje1: 9.54, porcentaje2: 16.89 },
    { nombre: 'Intento de sexo', porcentaje1: 2.91, porcentaje2: 7.21 },
    { nombre: 'Sexo forzado físicamente', porcentaje1: 0.91, porcentaje2: 3.36 },
    { nombre: 'Sexo forzado bajo presión', porcentaje1: 1.08, porcentaje2: 2.58 },
  ],
};

datos.noPdet.sort((a, b) => b.porcentaje1 - a.porcentaje1);
datos.pdet.sort((a, b) => b.porcentaje1 - a.porcentaje1);

export default datos;
