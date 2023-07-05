import { hexARGB } from '@enflujo/alquimia';
import { duranteInterseccion } from '../utilidades/observador';

export type ColorGradiante = {
  porcentaje: number;
  color: { r: number; g: number; b: number };
};

let enVista = false;
let reloj: NodeJS.Timer | null;
let angulo = 180;

const colorDesde = [
  { porcentaje: 0, color: { r: 50, g: 29, b: 47 } },
  { porcentaje: 0, color: { r: 61, g: 46, b: 79 } },
  { porcentaje: 0, color: { r: 76, g: 95, b: 122 } },
];

const colorHacia = [
  { porcentaje: 100, color: { r: 255, g: 0, b: 0 } },
  { porcentaje: 100, color: { r: 180, g: 0, b: 0 } },
  { porcentaje: 100, color: { r: 0, g: 0, b: 0 } },
];
const hacia1 = 'rgb(255, 0, 0)';
const hacia2 = 'rgb(180, 0, 0)';
const hacia3 = 'rgb(0, 0, 0)';
/**
 * A los elementos con clase `relato`, hace aparecer todos los `<p>` que tenga internamente. También cambia el color del fondo animando el gradiente.
 * En el HTML se pueden asignar los siguientes parámetros:
 * - color1
 * - color2
 * - color3
 * - velocidadEntrada
 * - velocidadSalida
 *
 * @Ejemplo
 * ```html
 * <div class="relato" data-color1="#19DB69" data-color2="#FFF" data-color3="#000" data-velocidadEntrada="500", data-velocidadSalida="3000">
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
    const velocidadEntrada = +seccion.dataset.velocidad || 2000;
    const velocidadSalida = +seccion.dataset.velocidad || 2500;

    const parrafos = seccion.querySelectorAll<HTMLParagraphElement>('p');

    parrafos.forEach((parrafo) => {
      Object.assign(parrafo.style, {
        transform: 'scale(0)',
        opacity: 0,
        transition: `transform 1.8s ease-out, opacity 2.2s ease-in-out`,
      });
    });

    const accion = (elemento) => {
      const colores = [
        [colorDesde[0], colorHacia[0]],
        [colorDesde[1], colorHacia[1]],
        [colorDesde[2], colorHacia[2]],
      ];
      const { color1, color2, color3 } = elemento.target.dataset;
      const colorA = definirColor(color1);
      const colorB = definirColor(color2);
      const colorC = definirColor(color3);
      console.log(colorA, colorB, colorC);
      colores[0][1].color = colorA ? colorA : colorHacia[0].color;
      colores[1][1].color = colorB ? colorB : colorHacia[1].color;
      colores[2][1].color = colorC ? colorC : colorHacia[2].color;
      if (elemento.intersectionRatio >= 0 && elemento.intersectionRatio < 0.5) {
        esconder(parrafos);
        enVista = false;
      } else {
        mostrar(parrafos);
        enVista = true;
      }

      if (enVista) {
        document.documentElement.style.setProperty(
          '--fondo1',
          `rgb(${colores[0][1].color.r}, ${colores[0][1].color.g}, ${colores[0][1].color.b})`
        );

        document.documentElement.style.setProperty(
          '--fondo2',
          `rgb(${colores[1][1].color.r}, ${colores[1][1].color.g}, ${colores[1][1].color.b})`
        );

        document.documentElement.style.setProperty(
          '--fondo3',
          `rgb(${colores[2][1].color.r}, ${colores[2][1].color.g}, ${colores[2][1].color.b})`
        );
        // animarGradiente(colores, velocidadEntrada, true);
      } else {
        setTimeout(() => {
          if (!enVista) {
            document.documentElement.style.setProperty('--fondo1', null);
            document.documentElement.style.setProperty('--fondo2', null);
            document.documentElement.style.setProperty('--fondo3', null);
            // animarGradiente(colores, velocidadSalida, false);
          }
        }, 1000);
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

function definirColor(codigo: string) {
  if (codigo && codigo.includes('#')) {
    const color = hexARGB(codigo);

    if (color) {
      return { r: color[0], g: color[1], b: color[2] };
    }
  }

  return;
}

function animarGradiente(colores: ColorGradiante[][], duracion = 1000, adelante = true) {
  if (reloj) return;
  const segundos = duracion / 1000;
  const fotogramas = segundos * 60;

  let contador = adelante ? 0 : fotogramas;
  let porcentajeActual = adelante ? 0 : 100;

  const obtenerColor = (porcentaje: number, color: ColorGradiante[]) => {
    let i = 1;

    for (i; i < color.length - 1; i++) {
      if (porcentaje < color[i].porcentaje) {
        break;
      }
    }

    const inferior = color[i - 1];
    const superior = color[i];
    const rango = superior.porcentaje - inferior.porcentaje;
    const porcentajeRango = (porcentaje - inferior.porcentaje) / rango;
    const porcentajeInf = 1 - porcentajeRango;
    const porcentajeSup = porcentajeRango;

    return `rgb(
    ${Math.floor(inferior.color.r * porcentajeInf + superior.color.r * porcentajeSup)},
    ${Math.floor(inferior.color.g * porcentajeInf + superior.color.g * porcentajeSup)},
    ${Math.floor(inferior.color.b * porcentajeInf + superior.color.b * porcentajeSup)}
  )`;
  };

  reloj = setInterval(() => {
    if (adelante) {
      contador += 1;
      porcentajeActual = Math.min(contador / fotogramas, 1) * 100;
    } else {
      contador -= 1;
      porcentajeActual = Math.max(contador / fotogramas, 0) * 100;
    }

    const pasosColor = colores.map((color) => obtenerColor(porcentajeActual, color));
    const nuevoColor = `linear-gradient(${angulo}deg, ${pasosColor.join(',')})`;
    document.body.style.backgroundImage = nuevoColor;

    // Cerrar intervalo cuando termina
    if (porcentajeActual === 100 || porcentajeActual === 0) {
      clearInterval(reloj);
      reloj = null;
    }
  }, 16.667); // 60 cuadros por segundo
}
