import { Ahorcado } from "../domain/Ahorcado";

export function montarApp(contenedor: HTMLElement, juego: Ahorcado): void {
  function render() {
    contenedor.innerHTML = `
      <h1>Ahorcado</h1>
      <p data-testid="word">${juego.palabraEnmascarada()}</p>
      <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
      <input type="text" maxlength="1" />
    `;
    contenedor.querySelector("input")!.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const input = e.target as HTMLInputElement;
        juego.adivinar(input.value);
        render();
      }
    });
  }
  render();
}
