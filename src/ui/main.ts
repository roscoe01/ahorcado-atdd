import { Ahorcado } from "../domain/Ahorcado";

export function montarApp(contenedor: HTMLElement, juego: Ahorcado): void {
  contenedor.innerHTML = `
    <h1>Ahorcado</h1>
    <p data-testid="word">${juego.palabraEnmascarada()}</p>
    <p>Vidas: <span data-testid="lives">${juego.vidas()}</span></p>
  `;
}
