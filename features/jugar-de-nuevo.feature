# language: es
Característica: Jugar de nuevo

  Escenario: El jugador reinicia la partida tras perder
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Cuando el jugador presiona jugar de nuevo
    Entonces se ve la palabra "_ _ _"
    Y se ven 6 vidas
