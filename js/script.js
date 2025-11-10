// Aquí tu código
const lista = document.getElementById("lista");
const agregar = document.getElementById("agregar");
console.log(agregar);

agregar.addEventListener("click", function () {
  const elemento = prompt("Agregá un elemento a la lista");
  const item = document.createElement("li");
  lista.appendChild(item);
  item.textContent = elemento;
});
