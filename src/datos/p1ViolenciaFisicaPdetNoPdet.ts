// const datos = {
//   infoIndicador: '',
//   info: [
//     'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
//   ],
//   colombia: [
//     { nombre: 'Abofeteado/a', porcentaje: 30.83 },
//     { nombre: 'Glopeado/a', porcentaje: 26.41 },
//     { nombre: 'Estrangulado/a', porcentaje: 4.22 },
//     { nombre: 'Cualquier agresión antes de los 18 años', porcentaje: 36.19 },
//   ],
//   pdet: [
//     { nombre: 'Abofeteado/a', porcentaje: 29.92 },
//     { nombre: 'Glopeado/a', porcentaje: 27.26 },
//     { nombre: 'Estrangulado/a', porcentaje: 4.62 },
//     { nombre: 'Cualquier agresión antes de los 18 años', porcentaje: 35.69 },
//   ],
// };

// datos.colombia.sort((a, b) => b.porcentaje - a.porcentaje);
// datos.pdet.sort((a, b) => b.porcentaje - a.porcentaje);

// export default datos;

const datos = {
  infoIndicador: '',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 24 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  comparados: [
    { nombre: 'Abofeteado/a', porcentajeNoPdet: 30.83, porcentajePdet: 29.92 },
    { nombre: 'Glopeado/a', porcentajeNoPdet: 26.41, porcentajePdet: 27.26 },
    { nombre: 'Estrangulado/a', porcentajeNoPdet: 4.22, porcentajePdet: 4.62 },
    { nombre: 'Cualquier agresión antes de los 18 años', porcentajeNoPdet: 36.19, porcentajePdet: 35.69 },
  ],
};

datos.comparados.sort((a, b) => b.porcentajeNoPdet - a.porcentajeNoPdet);

export default datos;
