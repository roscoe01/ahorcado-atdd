# language: es
Característica: Volver al menu

  Escenario: El jugador vuelve al menu tras perder
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Cuando el jugador presiona volver al menu
    Entonces se ve el menu de dificultad
