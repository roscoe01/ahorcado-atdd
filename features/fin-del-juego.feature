# language: es
Característica: Correcto fin del juego

  Escenario: No se puede seguir jugando tras perder
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Cuando el jugador adivina la letra "G"
    Entonces se ven 0 vidas

  Escenario: No se puede ganar tras perder
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "B"
    Y el jugador adivina la letra "C"
    Y el jugador adivina la letra "D"
    Y el jugador adivina la letra "E"
    Y el jugador adivina la letra "F"
    Cuando el jugador adivina la letra "S"
    Entonces se ve el mensaje "PERDISTE"
