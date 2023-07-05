import { duranteInterseccion } from '../utilidades/observador';
/**
 * Toma todos los elementos que tienen la clase `escribiendo` y les asigna un observador para que el texto se escriba automáticamente cuando el elemento este visible en pantalla.
 * La velocidad se puede asignar en el HTML con `data-velocidad="30"`. La velocidad predeterminada es de 20ms
 *
 * @Ejemplo
 * ```html
 * <p class="escribiendo" data-velocidad="30">Un texto que se escribe automáticamente</p>
 * ```
 */
export default () => {
  const elementos = document.querySelectorAll('.escribiendo');

  if (!elementos.length) return;

  elementos.forEach((elemento: HTMLElement) => {
    const velocidad = elemento.dataset.velocidad ? +elemento.dataset.velocidad : 20;
    // Descomponer texto en lista para ir agregado letra por letra.
    const texto = elemento.innerText.trim().split('');
    // La posición de la letra que se va a agregar. Empieza en 0 y va sumando.
    let posicion = 0;
    // Número de caracteres del texto.
    const total = texto.length;

    /**
     * Borrar el contenido para que no se vea al inicio.
     */
    elemento.innerHTML = '';

    /**
     * Esperar a que el texto este a la vista para empezar la escritura.
     */
    duranteInterseccion(
      elemento,
      () => {
        const reloj = setInterval(() => {
          if (posicion <= total) {
            elemento.innerText = texto.slice(0, posicion).join('');

            posicion++;
          } else {
            clearInterval(reloj);
          }
        }, velocidad);
      },
      false
    );
  });
};
