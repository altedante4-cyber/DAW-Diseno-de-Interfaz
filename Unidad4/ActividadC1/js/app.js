console.log("app.js conectado");

const encabezado = document.querySelector("header");
const tarjetas = document.querySelectorAll(".tarjeta");

console.log(tarjetas.length);

const titulo = document.querySelector("h1");
const primeraTarjeta = tarjetas[0];

primeraTarjeta.classList.add("destacado");

document.querySelector("#cambiar-titulo").addEventListener("click", () => {
  titulo.textContent = "Título cambiado con JavaScript";
});

document.querySelector("#alternar-destacado").addEventListener("click", () => {
  primeraTarjeta.classList.toggle("destacado");
});
