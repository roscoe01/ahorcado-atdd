import { Ahorcado } from "../domain/Ahorcado";
import { montarApp } from "./main";

const params = new URLSearchParams(window.location.search);
const palabra = params.get("word") ?? "GATO";

const juego = new Ahorcado(palabra);
const contenedor = document.getElementById("app")!;
montarApp(contenedor, juego);
