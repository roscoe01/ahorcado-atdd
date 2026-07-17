import { Ahorcado } from "../domain/Ahorcado";

const QWERTY = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

// Manejo global del listener del teclado físico: así, al cambiar de pantalla
// (menú, nueva partida) no se acumulan listeners viejos apuntando a juegos muertos.
let keydownActual: ((e: KeyboardEvent) => void) | null = null;
function limpiarKeydown(): void {
  if (keydownActual) {
    document.removeEventListener("keydown", keydownActual);
    keydownActual = null;
  }
}

export function montarMenu(
  contenedor: HTMLElement,
  alElegirNivel: (nivel: string) => void
): void {
  limpiarKeydown();
  const niveles = ["facil", "normal", "dificil", "imposible"];
  contenedor.innerHTML = `
    <div class="menu-container">
      <h2>Elegí tu dificultad</h2>
      <div data-testid="menu">
        ${niveles.map((n) => `<button class="btn-nivel" data-testid="nivel-${n}">${n}</button>`).join("")}
      </div>
    </div>
  `;
  niveles.forEach((nivel) => {
    contenedor
      .querySelector(`[data-testid="nivel-${nivel}"]`)!
      .addEventListener("click", () => alElegirNivel(nivel));
  });
}

export function montarApp(
  contenedor: HTMLElement,
  juego: Ahorcado,
  alJugarDeNuevo: () => void = () => {}
): void {
  let ultimaLetraRepetida = false;
  let ultimoFallo = false;

  function buildTiles(): string {
    const perdido = juego.perdio();
    return juego
      .palabraEnmascarada()
      .split(" ")
      .map((c) =>
        c === "_"
          ? `<div class="tile"></div>`
          : `<div class="tile revealed${perdido ? " perdida" : ""}">${c}</div>`
      )
      .join("");
  }

  function buildTeclado(usadas: string[], acertadas: string[]): string {
    return QWERTY.map(
      (fila) =>
        `<div class="fila-teclado">${fila
          .split("")
          .map((l) => {
            const clase = acertadas.includes(l)
              ? "tecla usada acertada"
              : usadas.includes(l)
              ? "tecla usada fallada"
              : "tecla";
            return `<button data-testid="key-${l}" class="${clase}" ${usadas.includes(l) ? "disabled" : ""}>${l}</button>`;
          })
          .join("")}</div>`
    ).join("");
  }

  // Las 6 partes del muñeco, en el orden en que se van dibujando a medida
  // que se pierden vidas: cabeza, torso, brazo, brazo, pierna, pierna.
  function buildMuneco(): string {
    const perdido = juego.perdio();
    // Carita: ojos normales mientras juega, ojos en X (muerto) cuando perdés.
    const cara = perdido
      ? `<g class="cara muerta">
           <line x1="122" y1="49" x2="127" y2="54" /><line x1="127" y1="49" x2="122" y2="54" />
           <line x1="133" y1="49" x2="138" y2="54" /><line x1="138" y1="49" x2="133" y2="54" />
           <path d="M124 63 Q130 58 136 63" fill="none" />
         </g>`
      : `<g class="cara">
           <circle cx="124.5" cy="52" r="1.8" /><circle cx="135.5" cy="52" r="1.8" />
           <path d="M124 60 Q130 65 136 60" fill="none" />
         </g>`;
    const partes = [
      `<g data-testid="parte-cabeza" class="parte"><circle cx="130" cy="55" r="15" />${cara}</g>`,
      `<line data-testid="parte-torso" class="parte" x1="130" y1="70" x2="130" y2="130" />`,
      `<line data-testid="parte-brazo-izq" class="parte" x1="130" y1="85" x2="105" y2="110" />`,
      `<line data-testid="parte-brazo-der" class="parte" x1="130" y1="85" x2="155" y2="110" />`,
      `<line data-testid="parte-pierna-izq" class="parte" x1="130" y1="130" x2="110" y2="165" />`,
      `<line data-testid="parte-pierna-der" class="parte" x1="130" y1="130" x2="150" y2="165" />`,
    ];
    const visibles = partes.slice(0, juego.partesDibujadas()).join("");
    return `
      <svg class="muneco" viewBox="0 0 200 260" data-testid="muneco">
        <line class="horca" x1="20" y1="240" x2="140" y2="240" />
        <line class="horca" x1="50" y1="240" x2="50" y2="20" />
        <line class="horca" x1="50" y1="20" x2="130" y2="20" />
        <line class="horca" x1="130" y1="20" x2="130" y2="40" />
        ${visibles}
      </svg>
    `;
  }

  function render(): void {
    limpiarKeydown();

    const terminado = juego.gano() || juego.perdio();
    const usadas = juego.letrasIntentadas();
    const acertadas = juego.letrasAcertadas();

    let mensajeClase = "message-box";
    let mensajeTexto = ultimaLetraRepetida ? "LETRA REPETIDA" : "";
    if (juego.gano()) { mensajeTexto = "Felicidades papu, ganaste."; mensajeClase += " ganaste"; }
    if (juego.perdio()) { mensajeTexto = "PERDISTE"; mensajeClase += " perdiste"; }

    contenedor.innerHTML = `
      <div class="muneco-wrap${ultimoFallo ? " shake" : ""}">${buildMuneco()}</div>
      <div class="word-tiles">${buildTiles()}</div>
      <div class="lives-display">
        <span class="lives-label">Vidas</span>
        <span class="lives-pill" data-testid="lives">${juego.vidas()}</span>
      </div>
      <p data-testid="word" style="display:none">${juego.palabraEnmascarada()}</p>
      <div class="${mensajeClase}" data-testid="message">${mensajeTexto}</div>
      <div class="input-area${terminado ? " apagado" : ""}">
        <input
          type="text"
          id="input-letra"
          class="input-letra"
          maxlength="1"
          autocomplete="off"
          spellcheck="false"
        />
      </div>
      <div class="teclado-container${terminado ? " apagado" : ""}" data-testid="teclado">
        ${buildTeclado(usadas, acertadas)}
      </div>
      ${terminado ? `
      <div class="acciones">
        <button class="btn-accion btn-primario" id="jugar-de-nuevo">Jugar de nuevo</button>
      </div>` : ""}
    `;

    const input = contenedor.querySelector<HTMLInputElement>("#input-letra");

    if (input) {
      if (!terminado) input.focus();

      // Teclado físico: cualquier tecla alfabética se escribe directo en la barra
      keydownActual = (e: KeyboardEvent) => {
        if (terminado) return;
        if (e.key === "Enter") {
          const val = input.value.trim();
          if (val) {
            ultimaLetraRepetida = juego.letraRepetida(val);
            const vidasAntes = juego.vidas();
            juego.adivinar(val);
            ultimoFallo = juego.vidas() < vidasAntes;
            render();
          }
        } else if (/^[a-zA-ZÑñ]$/.test(e.key)) {
          input.value = e.key.toUpperCase();
          e.preventDefault();
        } else if (e.key === "Backspace") {
          input.value = "";
          e.preventDefault();
        }
      };
      document.addEventListener("keydown", keydownActual);

      // Clic en tecla del teclado visual
      contenedor.querySelectorAll(".tecla:not([disabled])").forEach((btn) => {
        btn.addEventListener("click", () => {
          if (terminado) return;
          const letra = btn.textContent!.trim();
          ultimaLetraRepetida = juego.letraRepetida(letra);
          const vidasAntes = juego.vidas();
          juego.adivinar(letra);
          ultimoFallo = juego.vidas() < vidasAntes;
          render();
        });
      });
    }

    // "Jugar de nuevo" delega en index.ts: otra palabra del mismo nivel (si se
    // entró por el menú) o la misma palabra reiniciada (si se entró por ?word=).
    // No llamamos a juego.reiniciar() acá para no pisar esa lógica del compañero.
    contenedor.querySelector("#jugar-de-nuevo")?.addEventListener("click", () => {
      limpiarKeydown();
      ultimaLetraRepetida = false;
      ultimoFallo = false;
      alJugarDeNuevo();
    });
  }

  render();
}
