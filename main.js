const btnAgregarOP = document.querySelector('.btn-agregar-op');
const inputArticulo = document.getElementById('articulo');
const inputInicio = document.getElementById('inicio');
const inputCantidad = document.getElementById('cantidad');
const inputPartida = document.getElementById('partida');
const inputLote = document.getElementById('lote');
const btnGrabar = document.querySelector('.grabar');
const divAgregarOP = document.querySelector('.agregar-op');
const btnCerrar = document.querySelector('.cerrar');

btnAgregarOP.addEventListener('click', () => {
  divAgregarOP.classList.add('active');
});

btnCerrar.addEventListener('click', () => {
  divAgregarOP.classList.remove('active');
});

btnGrabar.addEventListener('click', () => {
  console.log("grabar");
  ;
})

