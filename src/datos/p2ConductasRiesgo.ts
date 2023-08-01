const datos = {
  infoIndicador:
    'Prevalencia de experiencias adversas en la infancia (ACEs) en jóvenes de 18 a 24 años sobre actitudes de riesgo - Colombia ',
  info: [
    'Fuente VACS Colombia 2018, Honduras 2017 y el Salvador 2017. Las variables de control utilizadas fueron: Proporción de mujeres, Edad, Proporción de estudiantes, Proporción de trabajadores, Proporción Jefa de hogar y Número de cuartos para dormir por hogar.',
  ],
  colombia: [
    {
      nombre: 'Beber en exceso en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 6.5, significativo: false },
      tresOMasAces: { puntosPorcentuales: 7.9, significativo: false },
    },
    {
      nombre: 'Actualmente fuma',
      unoODosAces: { puntosPorcentuales: -1.0, significativo: false },
      tresOMasAces: { puntosPorcentuales: 10.1, significativo: true },
    },
    {
      nombre: 'Uso de drogas en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 3.2, significativo: false },
      tresOMasAces: { puntosPorcentuales: 9.5, significativo: true },
    },
    {
      nombre: 'Intento de suicidio o daño en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 7.3, significativo: false },
      tresOMasAces: { puntosPorcentuales: 21.0, significativo: true },
    },
    {
      nombre: 'Desórdenes psicológicos en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 16.9, significativo: true },
      tresOMasAces: { puntosPorcentuales: 27.4, significativo: true },
    },
  ],
  honduras: [
    {
      nombre: 'Beber en exceso en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 9.1, significativo: false },
      tresOMasAces: { puntosPorcentuales: 17.7, significativo: true },
    },
    {
      nombre: 'Actualmente fuma',
      unoODosAces: { puntosPorcentuales: 7.3, significativo: true },
      tresOMasAces: { puntosPorcentuales: 10.2, significativo: true },
    },
    {
      nombre: 'Uso de drogas en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 2.2, significativo: false },
      tresOMasAces: { puntosPorcentuales: 5.1, significativo: true },
    },
    {
      nombre: 'Intento de suicidio o daño en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 7.0, significativo: true },
      tresOMasAces: { puntosPorcentuales: 21.5, significativo: true },
    },
    {
      nombre: 'Desórdenes psicológicos en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 7.5, significativo: true },
      tresOMasAces: { puntosPorcentuales: 24.0, significativo: true },
    },
  ],
  salvador: [
    {
      nombre: 'Beber en exceso en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: -0.05, significativo: false },
      tresOMasAces: { puntosPorcentuales: 13.1, significativo: true },
    },
    {
      nombre: 'Actualmente fuma',
      unoODosAces: { puntosPorcentuales: 1.5, significativo: false },
      tresOMasAces: { puntosPorcentuales: 5.7, significativo: false },
    },
    {
      nombre: 'Uso de drogas en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 0.09, significativo: false },
      tresOMasAces: { puntosPorcentuales: 2.3, significativo: false },
    },
    {
      nombre: 'Intento de suicidio o daño en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 6.1, significativo: true },
      tresOMasAces: { puntosPorcentuales: 16.9, significativo: true },
    },
    {
      nombre: 'Desórdenes psicológicos en los últimos 30 días',
      unoODosAces: { puntosPorcentuales: 8.9, significativo: true },
      tresOMasAces: { puntosPorcentuales: 20.8, significativo: true },
    },
  ],
};

datos.colombia.sort((a, b) => b.unoODosAces.puntosPorcentuales - a.unoODosAces.puntosPorcentuales);
datos.colombia.sort((a, b) => b.tresOMasAces.puntosPorcentuales - a.tresOMasAces.puntosPorcentuales);
datos.honduras.sort((a, b) => b.unoODosAces.puntosPorcentuales - a.unoODosAces.puntosPorcentuales);
datos.honduras.sort((a, b) => b.tresOMasAces.puntosPorcentuales - a.tresOMasAces.puntosPorcentuales);
datos.salvador.sort((a, b) => b.unoODosAces.puntosPorcentuales - a.unoODosAces.puntosPorcentuales);
datos.salvador.sort((a, b) => b.tresOMasAces.puntosPorcentuales - a.tresOMasAces.puntosPorcentuales);

export default datos;
