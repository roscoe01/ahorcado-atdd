import { Ahorcado } from "../domain/Ahorcado";
import { Diccionario } from "../domain/Diccionario";
import { montarApp, montarMenu } from "./main";

const params = new URLSearchParams(window.location.search);
const palabraFijada = params.get("word");
const contenedor = document.getElementById("app")!;
const diccionario = new Diccionario();

function jugarNivel(nivel: string) {
  const palabra = diccionario.palabraAlAzar(nivel);
  const juego = new Ahorcado(palabra);
  // Jugar de nuevo: otra palabra del mismo nivel
  montarApp(contenedor, juego, () => jugarNivel(nivel));
}

function mostrarMenu() {
  montarMenu(contenedor, jugarNivel);
}

// Tocar el logo / la barra superior siempre te devuelve al menú.
document.getElementById("nav-home")?.addEventListener("click", () => {
  mostrarMenu();
});

if (palabraFijada) {
  // Vino ?word= : juego directo (los tests entran acá).
  // Jugar de nuevo reintenta la MISMA palabra.
  const juego = new Ahorcado(palabraFijada);
  const reintentar = () => {
    juego.reiniciar();
    montarApp(contenedor, juego, reintentar);
  };
  montarApp(contenedor, juego, reintentar);
} else {
  // Sin ?word= : arrancamos mostrando el menú
  mostrarMenu();
}
