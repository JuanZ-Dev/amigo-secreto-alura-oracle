let arrayAmigos = [];
let amigoSorteado = "";
const botonLimpiar = document.getElementById("button-trash");
botonLimpiar.disabled = true;
const botonSortear = document.getElementById("button-play");
botonSortear.disabled = true;

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value.trim();

  // Verificar que el input no esté vacío
  if (nombreAmigo == "") {
    alert("Por favor, ingrese un nombre.");
    return;
  }

  // Verificar que tenga solo letras y espacios
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
  if (!regex.test(nombreAmigo)) {
    alert("El nombre solo puede contener letras y espacios");
    return;
  }

  // Verficiar que no se repita un nombre
  if (arrayAmigos.includes(nombreAmigo)) {
    alert("Este nombre ya ha sido ingresado.");
    return;
  }

  arrayAmigos.push(inputAmigo.value.trim());
  inputAmigo.value = "";
  console.log(arrayAmigos);
  const listaAmigos = document.getElementById("listaAmigos");
  const itemListaAmigos = document.createElement("li");
  itemListaAmigos.textContent = "✔ " + arrayAmigos[arrayAmigos.length - 1];
  listaAmigos.appendChild(itemListaAmigos);

  botonLimpiar.disabled = false;
  botonSortear.disabled = false;
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (resultado.querySelectorAll("li").length > 0) {
    resultado.innerHTML = "";
  }

  let indiceAleatorio = Math.floor(Math.random() * arrayAmigos.length);
  amigoSorteado = arrayAmigos[indiceAleatorio];

  const itemResultado = document.createElement("li");
  itemResultado.textContent =
    "🎉 El amigo sorteado es: " + amigoSorteado + " 🎉";
  resultado.appendChild(itemResultado);
}

function limpiarLista() {
  arrayAmigos = [];
  amigoSorteado = "";
  botonLimpiar.disabled = true;
  botonSortear.disabled = true;

  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
}
