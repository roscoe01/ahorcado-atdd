# language: es
Característica: Entrada inválida

  Escenario: El jugador ingresa un carácter que no es una letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "5"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas
