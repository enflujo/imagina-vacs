/**
 * @param {HTMLElement | Element} elemento Elemento que se quiere observar.
 * @param {function} accion Función que se ejecuta cuando entra en intersección.
 * @param {Boolean} desconectarInmediatamente Si la acción se debe ejecutar 1 sola vez.
 * @param {Object} opciones Opciones del "Intersection Observer API"
 * @returns instancia del observador
 */
export const duranteInterseccion = (
  elemento: Element,
  accion: (elemento: IntersectionObserverEntry) => void,
  desconectarInmediatamente = true,
  opciones: IntersectionObserverInit = { threshold: 0 }
) => {
  const observador = new IntersectionObserver(([elementoObservado]) => {
    if (elementoObservado && elementoObservado.isIntersecting) {
      accion(elementoObservado);

      if (desconectarInmediatamente) {
        observador.unobserve(elementoObservado.target);
      }
    }
  }, opciones);

  observador.observe(elemento);

  return observador;
};
