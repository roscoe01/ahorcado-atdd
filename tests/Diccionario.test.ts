import { describe, it, expect } from "vitest";
import { Diccionario } from "../src/domain/Diccionario";

describe("Diccionario", () => {
  it("una palabra facil tiene 4 letras", () => {
    const diccionario = new Diccionario();
    const palabra = diccionario.palabraAlAzar("facil");
    expect(palabra.length).toBe(4);
  });

  it("una palabra normal tiene 5 letras", () => {
    const diccionario = new Diccionario();
    const palabra = diccionario.palabraAlAzar("normal");
    expect(palabra.length).toBe(5);
  });

   it("una palabra dificil tiene 6 letras", () => {
    const diccionario = new Diccionario();
    const palabra = diccionario.palabraAlAzar("dificil");
    expect(palabra.length).toBe(6);
  });

  it("una palabra imposible tiene 8 letras", () => {
    const diccionario = new Diccionario();
    const palabra = diccionario.palabraAlAzar("imposible");
    expect(palabra.length).toBe(8);
  });
});
