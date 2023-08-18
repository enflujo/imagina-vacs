const datos = {
  infoIndicador: 'Exámenes médico-legales por presunto delito sexual según presunto agresor. Colombia, año 2020.',
  info: 'Fuente: FORENSIS 2020',
  presuntoAgresor: [
    {
      nombre: 'Familiar',
      porcentaje: 48.67,
      personaCercana: true,
    },
    {
      nombre: 'Conocido',
      porcentaje: 23.09,
      personaCercana: true,
    },
    {
      nombre: 'Amigo(a)',
      porcentaje: 9.27,
      personaCercana: true,
    },
    {
      nombre: 'Pareja o ex pareja',
      porcentaje: 7.97,
      personaCercana: true,
    },
    {
      nombre: 'Agresor desconocido',
      porcentaje: 4.73,
      personaCercana: false,
    },
    {
      nombre: 'Delincuencia común',
      porcentaje: 0.44,
      personaCercana: false,
    },
    {
      nombre: 'Miembros de las fuerzas armadas y de policía',
      porcentaje: 0.29,
      personaCercana: false,
    },
  ],
};
datos.presuntoAgresor.sort((a, b) => b.porcentaje - a.porcentaje);

export default datos;
