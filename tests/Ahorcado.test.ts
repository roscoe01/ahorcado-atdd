import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("arranca enmascarando la palabra con guiones", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
  });

  it("arranca con 6 vidas", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.vidas()).toBe(6);
  });

  it("al ingresar una letra correcta, se revela en la posicion correcta", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
  });
  it("al fallar una letra, las vidas bajan a 5", () => {
  const juego = new Ahorcado("GATO");
  juego.adivinar("E");   // ← esta línea falta
  expect(juego.vidas()).toBe(5);

  
});
it("gano() es true cuando se adivinaron todas las letras", () => {
    const juego = new Ahorcado("SOL");
    juego.adivinar("S");
    juego.adivinar("O");
    juego.adivinar("L");
    expect(juego.gano()).toBe(true);
  });

  it("al repetir una letra, se checkea si la letra ya fue ingresada", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.letraRepetida("E")).toBe(true);
  });

  it("al repetir una letra, las vidas quedan iguales", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    juego.adivinar("E");
    expect(juego.vidas()).toBe(5);
  });

  it("perdio() es true cuando se agotaron las 6 vidas", () => {
    const juego = new Ahorcado("SOL");
    juego.adivinar("A");
    juego.adivinar("B");
    juego.adivinar("C");
    juego.adivinar("D");
    juego.adivinar("E");
    juego.adivinar("F");
    expect(juego.perdio()).toBe(true);
  });
});

  it("al ingresar un caracter que no es letra, se ignora", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("5");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
    expect(juego.vidas()).toBe(6);
  });
