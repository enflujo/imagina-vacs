const datos = {
  infoIndicador: '',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  comparados: [
    { nombre: 'Abofeteado/a', porcentaje1: 30.83, porcentaje2: 29.92 },
    { nombre: 'Glopeado/a', porcentaje1: 26.41, porcentaje2: 27.26 },
    { nombre: 'Estrangulado/a', porcentaje1: 4.22, porcentaje2: 4.62 },
    { nombre: 'Cualquier agresión antes de los 18 años', porcentaje1: 36.19, porcentaje2: 35.69 },
  ],
};

datos.comparados.sort((a, b) => b.porcentaje1 - a.porcentaje1);

export default datos;
