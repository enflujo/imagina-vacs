export interface GeometriaMapa {
  type: 'Feature';
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';
    coordinates: [latitud: number, longitud: number][];
  };
  properties: {
    // Código numérico del municipio o departamento.
    codigo: string;
    // Nombre del municipio o departamento.
    nombre: string;
    // Nombre del departamento
    dep?: string;
    // Si es PDET o no.
    pdet: boolean;
  };
}

export interface GeoJson {
  features: GeometriaMapa[];
  type: string;
}

export interface ExtremosCoordenadas {
  latitudMin: number;
  latitudMax: number;
  longitudMin: number;
  longitudMax: number;
}
