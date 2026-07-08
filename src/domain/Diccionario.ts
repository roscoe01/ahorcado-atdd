export class Diccionario {
  private palabras: Record<string, string[]> = {
    facil: ["GATO", "MESA", "SOL", "CASA"],
    normal: ["PERRO", "LIBRO", "VERDE"],
    dificil: ["VENTANA", "CAMISON", "JOAQUIN"],
    imposible: ["MURCIELAGO", "ELEFANTES"],
  };

  palabraAlAzar(nivel: string): string {
    const opciones = this.palabras[nivel];
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
  }
}
