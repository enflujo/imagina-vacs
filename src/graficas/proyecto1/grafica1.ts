import { convertirEscala } from '@enflujo/alquimia';
import { aleatorioFraccion } from '@utilidades/ayudas';

/*
GRÁFICA / ILUSTRACIÓN 0.1: De 1985 a 2018, 64.084 niñas, niños y adolescentes perdieron la vida por el
  conflicto; de 1985 a 2016, 28.192 fueron desaparecidos de manera forzada; de 1990 a 2018 6.496 sufrieron
          secuestro; de 1990 a 2017, 16.238 fueron reclutados por grupos armados y de 1985 a 2019, 3.049.527 fueron
          víctimas de desplazamiento forzado
*/
export type DatosComisionG1 = {
  tipo: string;
  fechaInicio: number;
  fechaFin: number;
  cantidad: number;
  color: string;
};

const datos: DatosComisionG1[] = [
  { tipo: 'muerte', fechaInicio: 1985, fechaFin: 2018, cantidad: 64084, color: 'red' },
  { tipo: 'desaparecidos', fechaInicio: 1985, fechaFin: 2016, cantidad: 28192, color: 'cyan' },
  { tipo: 'secuestro', fechaInicio: 1990, fechaFin: 2018, cantidad: 6496, color: 'yellow' },
  { tipo: 'reclutamiento', fechaInicio: 1990, fechaFin: 2017, cantidad: 16238, color: 'green' },
  { tipo: 'desplazamiento', fechaInicio: 1985, fechaFin: 2019, cantidad: 3049527, color: 'white' },
];

const contenedor = document.createElement('div');
contenedor.className = 'grafica';
const lienzo = document.createElement('canvas');
const ctx = lienzo.getContext('2d');
const dims = { ancho: 0, alto: 0 };
const centro = { x: 0, y: 0 };
const DOS_PI = Math.PI * 2;
let anchoSeccion = 0;
let cantidadMax = 0;
let inicio = Infinity;
let fin = 0;
let escalaX: (valor: number) => number;
let escalaRadio: (valor: number) => number;

export const grafica = () => {
  // Procesar
  datos.forEach((dato) => {
    inicio = dato.fechaInicio < inicio ? dato.fechaInicio : inicio;
    fin = dato.fechaFin > fin ? dato.fechaFin : fin;

    cantidadMax = dato.cantidad > cantidadMax ? dato.cantidad : cantidadMax;
  });

  datos.sort((a, b) => b.cantidad - a.cantidad);

  Object.assign(contenedor.style, {
    position: 'relative',
    width: '100%',
    height: '80vh',
    display: 'block',
  });

  Object.assign(lienzo.style, {
    position: 'absolute',
    display: 'inline-block',
    top: '0',
    left: '0',
    verticalAlign: 'top',
    width: '80%',
    height: '100%',
  });

  contenedor.appendChild(lienzo);

  window.addEventListener('resize', actualizar);

  return contenedor;
};

export const actualizar = () => {
  const dimensiones = lienzo.getBoundingClientRect();
  const ancho = dimensiones.width | 0;
  const alto = dimensiones.height | 0;
  lienzo.width = ancho;
  lienzo.height = alto;
  dims.ancho = ancho;
  dims.alto = alto;
  centro.x = ancho / 2;
  centro.y = alto / 2;
  anchoSeccion = ancho / datos.length;

  escalaX = (valor: number) => {
    return convertirEscala(valor, inicio, fin, 0, ancho);
  };

  escalaRadio = (valor: number) => {
    return convertirEscala(valor, 0, cantidadMax, 0, dims.alto / 2);
  };

  pintar();
};

function pintar() {
  // ctx.globalAlpha = 0.01;

  datos.forEach((violencia, i) => {
    const yMax = escalaRadio(cantidadMax);
    const distancia = yMax / 2;
    const x1 = i * anchoSeccion;
    const centroViolencia = { x: x1 + anchoSeccion / 2, y: centro.y };
    const punto = convertirEscala(violencia.cantidad, 6496, cantidadMax, 10, 1);

    // ctx.save();

    animar(violencia.cantidad, violencia.color, distancia, centroViolencia, punto);
    // for (let i = 0; i < violencia.cantidad; i++) {
    //   const angulo = aleatorioFraccion(0, DOS_PI);
    //   const radio = aleatorioFraccion(0, distancia);
    //   const x = (radio * Math.cos(angulo) + centroViolencia.x) | 0;
    //   const y = (radio * Math.sin(angulo) + centroViolencia.y) | 0;
    //   ctx.fillRect(x, dims.alto - y, punto, punto);
    // }

    // ctx.restore();
  });
}

const vel = 4;
let contador = 0;

function animar(
  cantidad: number,
  color: string,
  distancia: number,
  centroViolencia: { x: number; y: number },
  punto: number
) {
  // console.log(cantidad);

  let conteo = 0;
  let seguir = true;

  ciclo();

  function ciclo() {
    // ctx.save();
    ctx.fillStyle = color;

    for (let i = 0; i < 100; i++) {
      conteo++;
      if (conteo < cantidad) {
        const angulo = aleatorioFraccion(0, DOS_PI);
        const radio = aleatorioFraccion(0, distancia);
        const x = (radio * Math.cos(angulo) + centroViolencia.x) | 0;
        const y = (radio * Math.sin(angulo) + centroViolencia.y) | 0;
        ctx.fillRect(x, dims.alto - y, 2, 2);
      } else {
        seguir = false;
        // console.log('fin');
        break;
      }
    }

    if (seguir) {
      requestAnimationFrame(ciclo);
    }
  }
}
