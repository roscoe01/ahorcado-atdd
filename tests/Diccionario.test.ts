import { describe, it, expect } from "vitest";
import { Diccionario } from "../src/domain/Diccionario";

describe("Diccionario", () => {
  it("una palabra facil tiene 4 letras", () => {
    const diccionario = new Diccionario();
    const palabra = diccionario.palabraAlAzar("facil"); // Creamos el diccionario y le pedimos una palabra fácil y esperamos que tenga 4 letras
    expect(palabra.length).toBe(4);
  });
});
