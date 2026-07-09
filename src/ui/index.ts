import { Ahorcado } from "../domain/Ahorcado";
import { Diccionario } from "../domain/Diccionario";
import { montarApp, montarMenu } from "./main";

const params = new URLSearchParams(window.location.search);
const palabraFijada = params.get("word");
const contenedor = document.getElementById("app")!;
const diccionario = new Diccionario();

function mostrarMenu() {
  montarMenu(contenedor, (nivel) => {
    const palabra = diccionario.palabraAlAzar(nivel);
    montarApp(contenedor, new Ahorcado(palabra));
  });
}

// Tocar el logo / la barra superior siempre te devuelve al menú.
document.getElementById("nav-home")?.addEventListener("click", () => {
  mostrarMenu();
});

if (palabraFijada) {
  // Vino ?word= : juego directo (los tests entran acá)
  montarApp(contenedor, new Ahorcado(palabraFijada));
} else {
  // Sin ?word= : arrancamos mostrando el menú
  mostrarMenu();
}
