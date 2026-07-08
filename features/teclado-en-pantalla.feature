# language: es
Característica: Teclado en pantalla

  Escenario: La letra usada se marca como no disponible
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Entonces la letra "A" aparece marcada en el teclado
