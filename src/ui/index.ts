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
  montarApp(contenedor, juego, mostrarMenu, () => jugarNivel(nivel));
}

function mostrarMenu() {
  montarMenu(contenedor, jugarNivel);
}

if (palabraFijada) {
  // Vino ?word= : juego directo, y jugar de nuevo reintenta la MISMA palabra
  const juego = new Ahorcado(palabraFijada);
  montarApp(contenedor, juego, mostrarMenu, () => {
    juego.reiniciar();
    montarApp(contenedor, juego, mostrarMenu, () => {});
  });
} else {
  mostrarMenu();
}
