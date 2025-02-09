const mainContainer = document.querySelector('.main-container');
const btnAgregarOP = document.querySelector('.btn-agregar-op');
const inputArticulo = document.getElementById('articulo');
const inputInicio = document.getElementById('inicio');
const inputCantidad = document.getElementById('cantidad');
const inputPartida = document.getElementById('partida');
const inputLote = document.getElementById('lote');
const btnGrabar = document.querySelector('.grabar');
const divAgregarOP = document.querySelector('.agregar-op');
const btnCerrar = document.querySelector('.cerrar');
const tablaOP = document.querySelector('.tabla-op');


btnAgregarOP.addEventListener('click', () => {
  divAgregarOP.classList.add('active');
});

btnCerrar.addEventListener('click', () => {
  divAgregarOP.classList.remove('active');
});

btnGrabar.addEventListener('click', () => {

  const articulo = inputArticulo.value;
  const inicio = inputInicio.value;
  const cantidad = inputCantidad.value;
  const partida = inputPartida.value;
  const lote = inputLote.value;

  const lineaOP = document.createElement('tr');
  lineaOP.innerHTML = `
    <td>${articulo}</td>
    <td>${inicio}</td>
    <td>${cantidad}</td>
    <td>${partida}</td>
    <td>${lote}</td>
  `;
  
  tablaOP.appendChild(lineaOP);

  divAgregarOP.classList.remove('active');
  
})

