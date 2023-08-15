const datos = {
  infoIndicador: 'Migración debido a la violencia en municipios PDET y NO-PDET',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  colombia: [
    { nombre: 'A otro país', porcentaje: 3.33 },
    { nombre: 'A otro municipio', porcentaje: 4.98 },
  ],
  pdet: [
    { nombre: 'A otro país', porcentaje: 7.55 },
    { nombre: 'A otro municipio', porcentaje: 7.86 },
  ],
};

datos.colombia.sort((a, b) => b.porcentaje - a.porcentaje);
datos.pdet.sort((a, b) => b.porcentaje - a.porcentaje);

export default datos;
