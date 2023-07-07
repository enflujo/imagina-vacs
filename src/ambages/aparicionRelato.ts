import { duranteInterseccion } from '../utilidades/observador';

export type ColorGradiante = {
  porcentaje: number;
  color: { r: number; g: number; b: number };
};

/**
 * A los elementos con clase `relato`, hace aparecer todos los `<p>` que tenga internamente. También cambia el color del fondo animando el gradiente.
 * En el HTML se pueden asignar los siguientes parámetros:
 * - color1: HEX o rgb()
 * - color2: HEX o rgb()
 * - color3: HEX o rgb()
 * - velocidad: velocidad de CSS, por ejemplo: '2s'
 *
 * @Ejemplo
 * ```html
 * <div class="relato" data-color1="#19DB69" data-color2="#FFF" data-color3="#000" data-volecidad="5s">
 *  <p>Este texto va a crecer apenas este visible el contenedor</p>
 *  <p>Este párrafo también</p>
 * </div>
 *
 * ```
 */
export default () => {
  const relatos = document.querySelectorAll<HTMLDivElement>('.relato');

  if (!relatos.length) return;

  relatos.forEach((seccion) => {
    let enVista = false;
    const contenedorFondo = document.body;
    const velocidad = seccion.dataset.velocidad || '2s';
    const parrafos = seccion.querySelectorAll<HTMLParagraphElement>('p');
    const { color1, color2, color3 } = seccion.dataset;

    parrafos.forEach((parrafo) => {
      Object.assign(parrafo.style, {
        transform: 'scale(0)',
        opacity: 0,
        transition: `transform ${velocidad} ease-out, opacity ${velocidad} ease-in-out`,
      });
    });

    const accion = (elemento) => {
      if (elemento.intersectionRatio >= 0 && elemento.intersectionRatio < 0.5) {
        esconder(parrafos);
        enVista = false;
      } else {
        mostrar(parrafos);
        enVista = true;
      }

      if (enVista) {
        contenedorFondo.style.transition = `--fondo1 ${velocidad},--fondo2 ${velocidad},--fondo3 ${velocidad}`;
        contenedorFondo.style.setProperty('--fondo1', color1 ? color1 : null);
        contenedorFondo.style.setProperty('--fondo2', color2 ? color2 : null);
        contenedorFondo.style.setProperty('--fondo3', color3 ? color3 : null);
      } else {
        document.body.style.setProperty('--fondo1', null);
        document.body.style.setProperty('--fondo2', null);
        document.body.style.setProperty('--fondo3', null);
      }
    };

    duranteInterseccion(seccion, accion, false, { threshold: [0, 0.5, 1] });
  });
};

function mostrar(parrafos: NodeListOf<HTMLParagraphElement>) {
  parrafos.forEach((parrafo) => {
    Object.assign(parrafo.style, {
      transform: 'scale(1)',
      opacity: 1,
    });
  });
}

function esconder(parrafos: NodeListOf<HTMLParagraphElement>) {
  parrafos.forEach((parrafo) => {
    Object.assign(parrafo.style, {
      transform: 'scale(0)',
      opacity: 0,
    });
  });
}
