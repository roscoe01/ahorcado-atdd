export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  private letrasIntentadas: string[] = [];
  private vidasPerdidas: number = 0;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  adivinar(letra: string): void {
    const letraMayuscula = letra.toUpperCase();
    if (this.letrasIntentadas.includes(letraMayuscula)) {
      return;
    }
    this.letrasIntentadas.push(letraMayuscula);
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

  perdio(): boolean {
    return this.vidasPerdidas >= 6;
  }

  gano(): boolean {
    return this.palabra
      .split("") // si la palabra es "SOL" -> ["S","O","L"] este metodo nos separa las letras de la palabra y nos devuelve un array con cada letra
      .every((l) => this.letrasAdivinadas.includes(l)); // este metodo pregunta si todas las letras de la palabra están adivinadas
  }
}
