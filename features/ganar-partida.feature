# language: es
Característica: Ganar la partida

  Escenario: El jugador adivina todas las letras
    Dado una partida con la palabra "SOL"
    Cuando el jugador adivina la letra "S"
    Y el jugador adivina la letra "O"
    Y el jugador adivina la letra "L"
    Entonces se ve el mensaje "Felicidades papu, ganaste."
