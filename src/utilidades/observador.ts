/**
 * @param elemento Elemento que se quiere observar.
 * @param accion Función que se ejecuta cuando entra en intersección.
 * @param desconectarInmediatamente Si la acción se debe ejecutar 1 sola vez.
 * @param opciones Opciones del "Intersection Observer API"
 * @returns instancia del observador
 */
export const duranteInterseccion = (
  elemento: HTMLElement,
  accion: (InterdectionObserverEntry) => void,
  desconectarInmediatamente = true,
  opciones = { threshold: 0 }
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
