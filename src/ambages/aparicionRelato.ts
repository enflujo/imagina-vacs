import { duranteInterseccion } from '../utilidades/observador';

let enVista = false;
let reloj: NodeJS.Timer | null;
let angulo = 180;
let prendido = false;

const colores = [
  [
    { porcentaje: 0, color: { r: 50, g: 29, b: 47 } },
    { porcentaje: 100, color: { r: 255, g: 0, b: 0 } },
  ],
  [
    { porcentaje: 0, color: { r: 61, g: 46, b: 79 } },
    { porcentaje: 100, color: { r: 180, g: 0, b: 0 } },
  ],
  [
    { porcentaje: 0, color: { r: 76, g: 95, b: 122 } },
    { porcentaje: 100, color: { r: 0, g: 0, b: 0 } },
  ],
];

export default () => {
  const relatos = document.querySelectorAll<HTMLDivElement>('.relato');

  if (!relatos.length) return;

  relatos.forEach((seccion) => {
    const parrafos = seccion.querySelectorAll<HTMLParagraphElement>('p');

    parrafos.forEach((parrafo) => {
      Object.assign(parrafo.style, {
        transform: 'scale(0)',
        opacity: 0,
        transition: `transform 1.8s ease-out, opacity 2.2s ease-in-out`,
      });
    });

    duranteInterseccion(
      seccion,
      (elemento) => {
        if (elemento.intersectionRatio >= 0 && elemento.intersectionRatio < 0.5) {
          esconder(parrafos);
          enVista = false;
        } else {
          mostrar(parrafos);
          enVista = true;
        }

        if (enVista) {
          animarGradiente(2000, true);
        } else {
          setTimeout(() => {
            if (!enVista) {
              animarGradiente(2500, false);
            }
          }, 1000);
        }
      },
      false,
      { threshold: [0, 0.5, 1] }
    );
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

export type ColorGradiante = {
  porcentaje: number;
  color: { r: number; g: number; b: number };
};

function animarGradiente(duracion = 1000, adelante = true) {
  if (reloj || (adelante && prendido)) return;
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
      prendido = porcentajeActual === 100;
    }
  }, 16.667); // 60 cuadros por segundo
}
