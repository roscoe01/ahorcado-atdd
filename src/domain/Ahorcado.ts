export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  adivinar(letra: string): void {
    this.letrasAdivinadas.push(letra.toUpperCase());
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((l) => (this.letrasAdivinadas.includes(l) ? l : "_"))
      .join(" ");
  }

  vidas(): number {
    return 6; // En el AT #1 ponemos que desvuelva 6 siempre, ya que aún no hicimos la funcionalidad de que bajen las vidas.
  }
}
