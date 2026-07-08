# Unit tests por Acceptance Test

## AT1 - Iniciar partida
- [x] arranca enmascarando la palabra: "GATO" -> "_ _ _ _"
- [x] arranca con 6 vidas

## AT2 - Acertar letra
- [x] al ingresar una letra correcta, se revela en la posicion correcta

## AT3 - Fallar letra
- [x] al fallar una letra, las vidas bajan a 5

## AT4 - Ganar la partida
- [x] gano() es true cuando se adivinaron todas las letras

## AT5 - Perder la partida
- [x] perdio() es true cuando se agotaron las 6 vidas

## AT6 - Letra repetida
- [x] al repetir una letra, se checkea si la letra ya fue ingresada
- [x] al repetir una letra, las vidas quedan iguales

## AT7 - Entrada invalida
- [x] al ingresar un caracter que no es letra, se ignora

## AT8 - Teclado en pantalla
- [x] letrasIntentadas() devuelve las letras que ya fueron usadas

## AT9 - Jugar de nuevo
- [x] reiniciar() vuelve el juego al estado inicial

## AT10 - Correcto fin del juego
- [x] adivinar() no hace nada si la partida ya termino

## AT11 - Elegir dificultad
- [x] una palabra facil tiene 4 letras
- [x] una palabra normal tiene 5 letras
- [x] una palabra dificil tiene 6 letras
- [x] una palabra imposible tiene 8 letras

## AT12 - Volver al menu
- [ ] (sin unit tests: es comportamiento de UI, cubierto por el acceptance test)
