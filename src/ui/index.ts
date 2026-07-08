import { Ahorcado } from "../domain/Ahorcado";
import { Diccionario } from "../domain/Diccionario";
import { montarApp, montarMenu } from "./main";

const params = new URLSearchParams(window.location.search);
const palabraFijada = params.get("word");
const contenedor = document.getElementById("app")!;

if (palabraFijada) {
  // Vino ?word= : juego directo (así entran los tests)
  montarApp(contenedor, new Ahorcado(palabraFijada));
} else {
  // Sin ?word= : mostramos el menú de dificultad
  const diccionario = new Diccionario();
  montarMenu(contenedor, (nivel) => {
    const palabra = diccionario.palabraAlAzar(nivel);
    montarApp(contenedor, new Ahorcado(palabra));
  });
}
