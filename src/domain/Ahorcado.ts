export class Ahorcado {
  private palabra: string;
  private letrasAdivinadas: string[] = [];
  private _letrasIntentadas: string[] = [];
  private vidasPerdidas: number = 0;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  adivinar(letra: string): void {
    const letraMayuscula = letra.toUpperCase();
    if (!this.esLetraValida(letraMayuscula)) {
      return;
    }
    if (this._letrasIntentadas.includes(letraMayuscula)) {
      return;
    }
    this._letrasIntentadas.push(letraMayuscula);
    if (!this.palabra.includes(letraMayuscula)) {
      this.vidasPerdidas++;
    } else {
      this.letrasAdivinadas.push(letraMayuscula);
    }
  }

  private esLetraValida(caracter: string): boolean {
    return caracter.length === 1 && /[A-ZÑ]/.test(caracter);
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

  reiniciar(): void {
    this._letrasIntentadas = [];
    this.letrasAdivinadas = [];
    this.vidasPerdidas = 0;
  }

  letrasIntentadas(): string[] {
    return [...this._letrasIntentadas];
  }

  letrasAcertadas(): string[] {
    return [...this.letrasAdivinadas];
  }

  letraRepetida(letra: string): boolean {
    return this._letrasIntentadas.includes(letra.toUpperCase());
  }

  perdio(): boolean {
    return this.vidasPerdidas >= 6;
  }

  gano(): boolean {
    return this.palabra
      .split("")
      .every((l) => this.letrasAdivinadas.includes(l));
  }
}
