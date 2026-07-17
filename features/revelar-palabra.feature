# language: es
Característica: Revelar la palabra al perder

  Escenario: Al perder se revela la palabra completa
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "I"
    Y el jugador adivina la letra "U"
    Y el jugador adivina la letra "R"
    Y el jugador adivina la letra "S"
    Y el jugador adivina la letra "D"
    Entonces se ve la palabra "G A T O"
