import { Ahorcado } from "../domain/Ahorcado";

export function montarApp(contenedor: HTMLElement, juego: Ahorcado): void {
  let ultimaLetraRepetida = false;

  const QWERTY = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

  function buildTeclado(usadas: string[], acertadas: string[]): string {
    return QWERTY.map((fila) =>
      `<div class="fila-teclado">${fila.split("").map((l) => {
        const clase = acertadas.includes(l) ? "usada acertada" : usadas.includes(l) ? "usada fallada" : "";
        return `<button data-testid="key-${l}" class="tecla ${clase}" ${usadas.includes(l) ? "disabled" : ""}>${l}</button>`;
      }).join("")}</div>`
    ).join("");
  }

  function render() {
    const mensaje = juego.gano() ? "Felicidades papu, ganaste." : juego.perdio() ? "PERDISTE" : ultimaLetraRepetida ? "LETRA REPETIDA" : "";
    const usadas = juego.letrasIntentadas();
    const acertadas = juego.letrasAcertadas();
    contenedor.innerHTML = `
      <h1>Ahorcado</h1>
      <p data-testid="word">${juego.palabraEnmascarada()}</p>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      <p data-testid="message">${mensaje}</p>
      <input type="text" maxlength="1" id="input-letra" />
      <div data-testid="teclado">${buildTeclado(usadas, acertadas)}</div>
      ${juego.gano() || juego.perdio() ? `<button id="jugar-de-nuevo">Jugar de nuevo</button>` : ""}
    `;

    contenedor.querySelector("#input-letra")!.addEventListener("keydown", (e) => {
      const ke = e as KeyboardEvent;
      if (ke.key === "Enter") {
        const input = e.target as HTMLInputElement;
        ultimaLetraRepetida = juego.letraRepetida(input.value);
        juego.adivinar(input.value);
        render();
      }
    });

    contenedor.querySelectorAll(".tecla:not([disabled])").forEach((btn) => {
      btn.addEventListener("click", () => {
        const letra = btn.textContent!;
        ultimaLetraRepetida = juego.letraRepetida(letra);
        juego.adivinar(letra);
        render();
      });
    });

    contenedor.querySelector("#jugar-de-nuevo")?.addEventListener("click", () => {
      juego.reiniciar();
      ultimaLetraRepetida = false;
      render();
    });
  }
  render();
}
