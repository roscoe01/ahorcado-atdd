# language: es
Característica: Palabra nueva al reintentar

  Escenario: Tras terminar por el menu, jugar de nuevo empieza otra partida del mismo nivel
    Dado que el jugador entra al juego
    Cuando elige el nivel "normal"
    Y el jugador prueba todas las letras
    Y el jugador presiona jugar de nuevo
    Entonces se ven 5 espacios para adivinar
    Y se ven 6 vidas
