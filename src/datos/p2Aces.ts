const datos = {
  infoIndicador: 'Prevalencia de experiencias adversas en la infancia (ACEs) en jóvenes de 13 a 24 años.',
  info: [
    'Fuente VACS Colombia 2018, Honduras 2017 y el Salvador 2017. Los coeficientes se estimaron con los ponderadores de muestreo de cada encuesta.',
  ],
  colombia: [
    { nombre: 'Violencia física', porcentaje: 34.4 },
    { nombre: 'Violencia emocional', porcentaje: 17.7 },
    { nombre: 'Violencia sexual', porcentaje: 9.7 },
    { nombre: 'Huérfano por uno o ambos padres', porcentaje: 10.4 },
    { nombre: 'Separación de uno o ambos padres', porcentaje: 32.6 },
    { nombre: 'Ser testigo de violencia en el hogar', porcentaje: 33.4 },
    { nombre: 'Ser testigo de violencia en la comunidad', porcentaje: 55.6 },
    { nombre: 'Cualquier experiencia ACEs', porcentaje: 82.1 },
  ],
  honduras: [
    { nombre: 'Violencia física', porcentaje: 32.9 },
    { nombre: 'Violencia emocional', porcentaje: 19.1 },
    { nombre: 'Violencia sexual', porcentaje: 12.1 },
    { nombre: 'Huérfano por uno o ambos padres', porcentaje: 10.4 },
    { nombre: 'Separación de uno o ambos padres', porcentaje: 37.9 },
    { nombre: 'Ser testigo de violencia en el hogar', porcentaje: 18.7 },
    { nombre: 'Ser testigo de violencia en la comunidad', porcentaje: 33.0 },
    { nombre: 'Cualquier experiencia ACEs', porcentaje: 74.4 },
  ],
  salvador: [
    { nombre: 'Violencia física', porcentaje: 20.8 },
    { nombre: 'Violencia emocional', porcentaje: 13.8 },
    { nombre: 'Violencia sexual', porcentaje: 7.3 },
    { nombre: 'Huérfano por uno o ambos padres', porcentaje: 10.3 },
    { nombre: 'Separación de uno o ambos padres', porcentaje: 23.2 },
    { nombre: 'Ser testigo de violencia en el hogar', porcentaje: 16.4 },
    { nombre: 'Ser testigo de violencia en la comunidad', porcentaje: 21.5 },
    { nombre: 'Cualquier experiencia ACEs', porcentaje: 62.0 },
  ],
};

datos.colombia.sort((a, b) => b.porcentaje - a.porcentaje);
datos.honduras.sort((a, b) => b.porcentaje - a.porcentaje);
datos.salvador.sort((a, b) => b.porcentaje - a.porcentaje);

export default datos;
