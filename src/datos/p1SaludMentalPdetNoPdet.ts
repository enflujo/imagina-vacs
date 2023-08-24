const datos = {
  infoIndicador: '',
  info: [
    'Colombia: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en Colombia. PDET: Muestra EVCNNA de jóvenes entre los 14 y 18 años que residieran en municipios históricamente afectados por la violencia catalogados como PDET. Salud Mental últimos 30 días: Se define como afectación de salud mental si el joven se ha sentido nervioso, desesperado/ansioso, intranquilo, tan triste que nada le pudo alegrar, que todo le cuesta trabajo o inútil; se califica como moderado o alto según qué tantas de las anteriores aplican y con qué frecuencia.',
  ],
  comparados: [
    { nombre: 'Moderada', porcentaje1: 38.7, porcentaje2: 34.66 },
    { nombre: 'Severa', porcentaje1: 5.7, porcentaje2: 4.89 },
    { nombre: 'Se lastimó', porcentaje1: 13.43, porcentaje2: 12.74 },
    { nombre: 'Pensó en suicidarse', porcentaje1: 14.25, porcentaje2: 10.4 },
  ],
};

datos.comparados.sort((a, b) => b.porcentaje1 - a.porcentaje1);

export default datos;
