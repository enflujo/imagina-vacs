const datos = {
  infoIndicador: '',
  info: 'Violencia contra niños, niñas y adolescentes, según presunto agresor. Colombia, año 2020.',
  fuente: 'FORENSIS 2020.',
  agresores: [
    {
      nombre: 'Padre',
      porcentaje: 33.75,
      resaltado: true,
    },
    {
      nombre: 'Madre',
      porcentaje: 28.19,
      resaltado: true,
    },
    {
      nombre: 'Padrastro',
      porcentaje: 11.38,
      resaltado: true,
    },
    {
      nombre: 'Tío/a',
      porcentaje: 6.21,
      resaltado: false,
    },
    {
      nombre: 'Hermano/a',
      porcentaje: 4.7,
      resaltado: false,
    },
    {
      nombre: 'Abuelo/a',
      porcentaje: 2.56,
      resaltado: false,
    },
    {
      nombre: 'Primo/a',
      porcentaje: 2.27,
      resaltado: false,
    },
    {
      nombre: 'Madrastra',
      porcentaje: 1.89,
      resaltado: false,
    },
    {
      nombre: 'Encargado/a del cuidado',
      porcentaje: 1.48,
      resaltado: false,
    },
    {
      nombre: 'Cuñado/a',
      porcentaje: 1.09,
      resaltado: false,
    },
    {
      nombre: 'Suegro/a',
      porcentaje: 0.2,
      resaltado: false,
    },
  ],
};

datos.agresores.sort((a, b) => b.porcentaje - a.porcentaje);
export default datos;
