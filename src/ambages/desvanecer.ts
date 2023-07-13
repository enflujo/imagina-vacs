import { convertirEscala } from '@enflujo/alquimia';

export default (elemento: HTMLElement) => {
  let reloj: NodeJS.Timer;
  const observador = new IntersectionObserver(
    ([elementoObservado]) => {
      if (elementoObservado.intersectionRatio > 0) {
        reloj = setInterval(() => {
          const opacidad = convertirEscala(window.scrollY, 0, elementoObservado.boundingClientRect.height * 0.4, 1, 0);
          elemento.style.opacity = `${opacidad}`;
        }, 10);
      } else {
        clearInterval(reloj);
      }
    },
    { threshold: 0 }
  );

  observador.observe(elemento);
};
