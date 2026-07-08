import { Ahorcado } from "../domain/Ahorcado";

export function montarApp(contenedor: HTMLElement, juego: Ahorcado): void {
  let ultimaLetraRepetida = false;

  function render() {
    const mensaje = juego.gano() ? "Felicidades papu, ganaste." : juego.perdio() ? "PERDISTE" : ultimaLetraRepetida ? "LETRA REPETIDA" : "";
    const usadas = juego.letrasIntentadas();
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const teclado = letras
      .split("")
      .map((l) => `<button data-testid="key-${l}" class="${usadas.includes(l) ? "usada" : ""}" disabled="${usadas.includes(l)}">${l}</button>`)
      .join("");
    contenedor.innerHTML = `
      <h1>Ahorcado</h1>
      <p data-testid="word">${juego.palabraEnmascarada()}</p>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      <p data-testid="message">${mensaje}</p>
      <div data-testid="teclado">${teclado}</div>
      <input type="text" maxlength="1" />
    `;
    contenedor.querySelector("input")!.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const input = e.target as HTMLInputElement;
        ultimaLetraRepetida = juego.letraRepetida(input.value);
        juego.adivinar(input.value);
        render();
      }
    });
  }
  render();
}
