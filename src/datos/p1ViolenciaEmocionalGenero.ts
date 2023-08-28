const datos = {
  infoIndicador: '',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  noPdet: [
    { nombre: 'No merecía haber nacido', porcentaje1: 2.82, porcentaje2: 5.29 },
    { nombre: 'Desean que no hubiera nacido', porcentaje1: 1.09, porcentaje2: 3.3 },
    { nombre: 'Ridiculizado o menospreciado', porcentaje1: 5.68, porcentaje2: 9.34 },
    { nombre: 'Amenazado con deshacerse', porcentaje1: 1.01, porcentaje2: 1.74 },
  ],
  pdet: [
    { nombre: 'No merecía haber nacido', porcentaje1: 1.92, porcentaje2: 4.73 },
    { nombre: 'Desean que no hubiera nacido', porcentaje1: 1.76, porcentaje2: 3.6 },
    { nombre: 'Ridiculizado o menospreciado', porcentaje1: 5.96, porcentaje2: 9.84 },
    { nombre: 'Amenazado con deshacerse', porcentaje1: 0.73, porcentaje2: 0.67 },
  ],
};

datos.noPdet.sort((a, b) => b.porcentaje1 - a.porcentaje1);
datos.pdet.sort((a, b) => b.porcentaje1 - a.porcentaje1);

export default datos;
