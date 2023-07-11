import datos from '@/datos/migracionMenores18';

export default (contenedor) => {
  const contenedorGrafica = document.createElement('div');

  const listaPais = document.createElement('ul');
  const listaMun = document.createElement('ul');

  datos.pais.forEach((variable) => {
    const elemento = document.createElement('li');
    elemento.innerText = `${variable.nombre} (${variable.porcentaje}%)`;
    listaPais.appendChild(elemento);
  });

  datos.municipio.forEach((variable) => {
    const elemento = document.createElement('li');
    elemento.innerText = `${variable.nombre} (${variable.porcentaje}%)`;
    listaMun.appendChild(elemento);
  });

  contenedorGrafica.appendChild(listaPais);
  contenedorGrafica.appendChild(listaMun);

  contenedor.appendChild(contenedorGrafica);
};
