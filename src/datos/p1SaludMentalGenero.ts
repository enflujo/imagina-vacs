const datos = {
  infoIndicador: '',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  comentario: 'porcentaje1 = hombres, porcentaje2 = mujeres',
  noPdet: [
    { nombre: 'Moderada', porcentaje1: 32.1, porcentaje2: 45.01 },
    { nombre: 'Severa', porcentaje1: 3.25, porcentaje2: 8.04 },
    { nombre: 'Se lastimó', porcentaje1: 8.25, porcentaje2: 18.39 },
    { nombre: 'Pensó en suicidarse', porcentaje1: 6.63, porcentaje2: 21.56 },
  ],
  pdet: [
    { nombre: 'Moderada', porcentaje1: 32.42, porcentaje2: 37.06 },
    { nombre: 'Severa', porcentaje1: 3.69, porcentaje2: 6.18 },
    { nombre: 'Se lastimó', porcentaje1: 9.7, porcentaje2: 16.01 },
    { nombre: 'Pensó en suicidarse', porcentaje1: 4.37, porcentaje2: 16.91 },
  ],
};

datos.noPdet.sort((a, b) => b.porcentaje1 - a.porcentaje1);
datos.pdet.sort((a, b) => b.porcentaje1 - a.porcentaje1);

export default datos;
