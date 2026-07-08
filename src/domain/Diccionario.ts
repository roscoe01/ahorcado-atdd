export class Diccionario {
  private palabras: Record<string, string[]> = {
    facil: [
      "GATO", "MESA", "PATO", "CASA", "LUNA", "ROPA", "SOPA", "MANO", "PIES", "OSOS",
      "RANA", "PALO", "VELA", "NUBE", "ROCA", "SEDA", "TAZA", "VASO", "LOBO", "FOCA",
      "PERA", "PICO", "MURO", "RAMO", "DEDO", "PELO", "HOJA", "LAGO", "FLOR", "MIEL",
    ],
    normal: [
      "PERRO", "LIBRO", "VERDE", "CAMPO", "FUEGO", "PLATO", "SILLA", "PUNTA", "CARTA", "PIANO",
      "RATON", "LECHE", "QUESO", "TIGRE", "CIELO", "NUBES", "BARCO", "CANTO", "MUNDO", "PALMA",
      "RUEDA", "NIEVE", "PAPEL", "LLAVE", "TORRE", "CLAVO", "FRUTA", "CABRA", "COBRE", "DEDOS",
    ],
    dificil: [
      "CARTON", "PLANTA", "SILLON", "CAMISA", "PUERTA", "ESPEJO", "CONEJO", "TOMATE", "LIBROS", "CABEZA",
      "CIUDAD", "CUADRO", "BOSQUE", "CESPED", "VERANO", "FLECHA", "PLUMAS", "ZAPATO", "GUANTE", "MANTEL",
      "SABANA", "PINCEL", "TIJERA", "VASIJA", "BANANA", "CEREZA", "PATATA", "ESPINA", "SOMBRA", "ARENAS",
    ],
    imposible: [
      "ELEFANTE", "MARIPOSA", "CABALLOS", "ALMOHADA", "TELEFONO", "VENTANAS", "CORTINAS", "CUCHARAS",
      "PELICULA", "CAMISETA", "PANTALON", "CHAQUETA", "SOMBRERO", "BUFANDAS", "CALCETIN", "MOCHILAS",
      "CUADERNO", "LAPICERA", "ESTUCHES", "PIZARRON", "PROFESOR", "HOSPITAL", "FARMACIA", "MERCADOS",
      "PANADERO", "JARDINES", "ARBOLEDA", "CASCADAS", "TORMENTA", "ESTRELLA",
    ],
  };

  palabraAlAzar(nivel: string): string {
    const opciones = this.palabras[nivel];
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
  }
}
