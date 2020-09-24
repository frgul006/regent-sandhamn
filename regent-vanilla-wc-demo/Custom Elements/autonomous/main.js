class RegentCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    // Create wrapper element
    const wrapperEl = document.createElement("div");
    wrapperEl.setAttribute("class", "regent-card__wrapper");

    // Create some content for now - we're gonna replace this with templates later
    const headerEl = document.createElement("h1");
    headerEl.textContent = this.getAttribute("data-header");
    wrapperEl.append(headerEl);

    const sampleTextEl = document.createElement("p");
    sampleTextEl.textContent = this.getAttribute("data-text");
    wrapperEl.append(sampleTextEl);

    // Create some CSS to apply
    const styleEl = document.createElement("style");
    styleEl.textContent =
      ".regent-card__wrapper { background-color: #333; color: #fff; padding: 1rem; border-radius: 3px; }";

    this.append(wrapperEl);
    this.append(styleEl);
  }
}

customElements.define("regent-card", RegentCard);
