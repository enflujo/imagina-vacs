type FuncionesMov = 'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier(n,n,n,n)';
type Predeterminados = {
  velocidad: string;
  tipoMov: FuncionesMov;
};

const predeterminados: Predeterminados = {
  velocidad: '0.3s',
  tipoMov: 'ease-in-out',
};

export const moverX = (
  elemento: HTMLElement,
  x: string,
  velocidad = predeterminados.velocidad,
  tipoMov: FuncionesMov = predeterminados.tipoMov
): Promise<void> => {
  return new Promise((resolver) => {
    Object.assign(elemento.style, {
      transition: `transform ${velocidad} ${tipoMov}`,
      transform: `translateX(${x})`,
    });

    elemento.addEventListener('transitionend', () => {
      resolver();
    });
  });
};

export const opacidad = (
  elemento: HTMLElement,
  opacidad = 1,
  velocidad = predeterminados.velocidad,
  tipoMov = predeterminados.tipoMov
): Promise<void> => {
  return new Promise((resolver) => {
    Object.assign(elemento.style, {
      // transition: `opacity ${tipoMov} ${velocidad}`,
      transitionProperty: 'opacity',
      transitionTimingFunction: tipoMov,
      transitionDuration: velocidad,
      opacity: opacidad,
    });

    elemento.addEventListener('transitionend', () => {
      resolver();
    });
  });
};
