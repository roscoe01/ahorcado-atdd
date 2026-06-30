export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  private vidasPerdidas: number = 0;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  adivinar(letra: string): void {
    const letraMayuscula = letra.toUpperCase();
    if (!this.palabra.includes(letraMayuscula)) {
      this.vidasPerdidas++;
    } else {
      this.letrasAdivinadas.push(letraMayuscula);
    }
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((l) => (this.letrasAdivinadas.includes(l) ? l : "_"))
      .join(" ");
  }

  vidas(): number {
    return 6 - this.vidasPerdidas;
  }
}