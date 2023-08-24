const datos = {
  infoIndicador: 'Migración interna debido a la violencia en municipios PDET y NO-PDET',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET.',
  ],
  migracion: [
    { nombre: 'PDET', porcentaje: 7.86 },
    { nombre: 'No PDET', porcentaje: 4.98 },
  ],
};

datos.migracion.sort((a, b) => b.porcentaje - a.porcentaje);

export default datos;
