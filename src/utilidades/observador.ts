/**
 * @param elemento Elemento que se quiere observar.
 * @param accion Función que se ejecuta cuando entra en intersección.
 * @param desconectarInmediatamente Si la acción se debe ejecutar 1 sola vez.
 * @param opciones Opciones del "Intersection Observer API"
 * @returns instancia del observador
 */
export const duranteInterseccion = (
  elemento: HTMLElement,
  accion?: (objObservador: IntersectionObserverEntry) => void,
  desconectarInmediatamente = true,
  opciones?: IntersectionObserverInit,
  accionFuera?: (objObservador: IntersectionObserverEntry) => void
) => {
  function desconectar(elemento: Element) {
    if (desconectarInmediatamente) {
      observador.unobserve(elemento);
    }
  }
  const observador = new IntersectionObserver(([elementoObservado]) => {
    if (!accionFuera) {
      if (elementoObservado && elementoObservado.isIntersecting) {
        accion(elementoObservado);
        desconectar(elementoObservado.target);
      }
    } else {
      if (elementoObservado && elementoObservado.isIntersecting) {
        accion(elementoObservado);
      } else {
        accionFuera(elementoObservado);
      }
    }
  }, opciones);

  observador.observe(elemento);

  return observador;
};
