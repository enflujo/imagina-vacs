// Función para abrir el glosario cuando aparece un término que esté definido allá

export default () => {
  const glosario = document.getElementById('glosario');
  const terminosGlosario = document.querySelectorAll('.abrirGlosario');

  if (terminosGlosario.length) {
    terminosGlosario.forEach((boton: HTMLElement) => {
      boton.addEventListener('click', () => {
        const { ancla } = boton.dataset;

        if (ancla) {
          const elementoConDefinicion = glosario.querySelector(`#${ancla}`);

          if (elementoConDefinicion) {
            glosario.classList.add('visible');
            elementoConDefinicion.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
};
