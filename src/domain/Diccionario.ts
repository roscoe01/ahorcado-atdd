export class Diccionario {
  private palabras: Record<string, string[]> = {
    facil: ["GATO", "MESA", "PATO", "CASA"],
    normal: ["PERRO", "LIBRO", "VERDE", "FELIZ"],
    dificil: ["CARTON", "PLANTA", "SILLON"],
    imposible: ["MURCIELAGO", "ARQUITECTO"],
  };

  palabraAlAzar(nivel: string): string {
    const opciones = this.palabras[nivel];
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
  }
}
