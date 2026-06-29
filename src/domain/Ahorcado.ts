export class Ahorcado {
  private palabra: string;

  constructor(palabra: string) {
    this.palabra = palabra;
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map(() => "_")
      .join(" ");
  }

  vidas(): number {
    return 6; // En el AT #1 ponemos que desvuelva 6 siempre, ya que aún no hicimos la funcionalidad de que bajen las vidas.
  }
}
