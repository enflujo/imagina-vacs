export const PI_CUARTO = Math.PI / 4;
export const aRadianes = (grados) => (grados * Math.PI) / 180;
export const mercatorY = (latitud) => Math.log(Math.tan(latitud / 2 + PI_CUARTO));

/**
 * Proyecta un punto de coordenadas a pixeles.
 */
export const escalaCoordenadas = ({ latitudMin, latitudMax, longitudMin, longitudMax }) => {
  const sur = aRadianes(latitudMin);
  const norte = aRadianes(latitudMax);
  const oriente = aRadianes(longitudMax);
  const occidente = aRadianes(longitudMin);
  const yMin = mercatorY(sur);
  const yMax = mercatorY(norte);

  // https://stackoverflow.com/questions/41557891/convert-lat-long-to-x-y-position-within-a-bounding-box
  /**
   * Proyección de un punto de coordenadas a pixeles
   *
   * @param {array} punto Punto en formato [longitud, latitud]
   * @param {number} ancho Ancho del mapa en pixeles
   * @param {number} alto Alto del mapa en pixeles
   * @returns {object} Coordenadas en {x, y}
   */
  return ([longitud, latitud], ancho, alto) => {
    const latitudRad = aRadianes(latitud);
    const longitudRad = aRadianes(longitud);

    const escalaX = ancho / (oriente - occidente);
    const escalaY = alto / (yMax - yMin);

    const x = (longitudRad - occidente) * escalaX;
    const y = (yMax - mercatorY(latitudRad)) * escalaY;
    return { x, y };
  };
};

function crearSeccionSvg(punto, cabeza, mapearCoordenadas, ancho, alto) {
  const coordenadas = mapearCoordenadas(punto, ancho, alto);
  return `${cabeza}${coordenadas.x | 0} ${coordenadas.y | 0} `;
}

/**
 * Averigua si cada `grupo` de coordenadas es un polígono o un multipolígono y a la
 * variable `res` (respuesta), que contiene los datos de los SVG, le agrega la
 * ubicación de cada punto y sus líneas conectoras.
 *
 * `M` = _moveTo_ (Inicio del _path_. `M{punto.x} {punto.y}`)
 *
 * `L` = _lineTo_ (Punto de una línea. `L{punto.x} {punto.y}`)
 *
 * `Z` = _closePath_ (Fin del _path_. `Z`)
 * @param {Object} coordenadas Array de coordenadas
 * @param {Callback} mapearCoordenadas Función para mapear de latitud, longitud a pixeles.
 * @returns res contiene los datos de los elementos SVG<path>
 */
export function crearLinea(coordenadas, mapearCoordenadas, ancho, alto) {
  let res = '';
  coordenadas.forEach((grupo) => {
    grupo.forEach((punto, i) => {
      const cabeza = i === 0 ? 'M' : 'L';

      if (typeof punto[0] === 'object') {
        punto.forEach((puntoMulti, j) => {
          if (j === 0) {
            res += crearSeccionSvg(puntoMulti, 'M', mapearCoordenadas, ancho, alto);
          } else {
            res += crearSeccionSvg(puntoMulti, 'L', mapearCoordenadas, ancho, alto);
          }
        });
      } else {
        res += crearSeccionSvg(punto, cabeza, mapearCoordenadas, ancho, alto);
      }

      res += i === grupo.length - 1 ? 'Z' : '';
    });
  });

  return res;
}

/**
 * Extrae los extremos del area contenida en datos GeoJSON
 *
 * @param {Object} geojson - Datos en GeoJSON
 */

export const extremosLugar = (geojson) => {
  let latitudMin = Infinity;
  let latitudMax = -Infinity;
  let longitudMin = Infinity;
  let longitudMax = -Infinity;

  if (geojson.type === 'FeatureCollection') {
    geojson.features.forEach((area) => {
      area.geometry.coordinates.forEach((areas) => {
        extraer(areas);
      });
    });
  } else if (geojson.type === 'Feature') {
    geojson.geometry.coordinates.forEach((area) => {
      area.forEach((n) => {
        extraer(n);
      });
    });
  } else if (typeof geojson === 'object') {
    geojson.forEach((area) => {
      extraer(area);
    });
  }

  function extraer(areas) {
    areas.forEach((punto) => {
      const [longitud, latitud] = punto;
      longitudMin = longitudMin > longitud ? longitud : longitudMin;
      longitudMax = longitudMax < longitud ? longitud : longitudMax;
      latitudMin = latitudMin > latitud ? latitud : latitudMin;
      latitudMax = latitudMax < latitud ? latitud : latitudMax;
    });
  }

  return { latitudMin, latitudMax, longitudMin, longitudMax };
};
