function Renderer() {
  function render(wisdom) {
    const textDiv = $("#texts-container");
    textDiv.empty();
    wisdom
      .map(
        t => `
            <div class="text" id=${t.id}>
              <button>X</button
              <p>${t.text}</p>
            </div>
            `
      )
      .forEach(p => textDiv.append(p));
  }

  return { render };
}
