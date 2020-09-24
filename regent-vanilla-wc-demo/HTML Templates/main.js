class RegentCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
    // const templateEl = document.createElement("template");
    // templateEl.setAttribute("id", "regent-card-template");

    // const wrapperEl = document.createElement("div");
    // wrapperEl.setAttribute("class", "wrapper");

    // const headerEl = document.createElement("div");
    // headerEl.setAttribute("class", "header");

    // const headerSlotEl = document.createElement("slot");
    // headerSlotEl.setAttribute("name", "regent-card-header");

    // const headerSlotDefaultEl = document.createElement("h1");
    // headerSlotDefaultEl.textContent = "Default header";

    // const contentEl = document.createElement("div");
    // contentEl.setAttribute("class", "content");

    // const contentSlotEl = document.createElement("slot");
    // contentSlotEl.setAttribute("name", "regent-card-content");

    // const contentSlotDefaultEl = document.createElement("p");
    // contentSlotDefaultEl.textContent = "Default content";

    // headerSlotEl.appendChild(headerSlotDefaultEl);
    // headerEl.appendChild(headerSlotEl);
    // wrapperEl.appendChild(headerEl);

    // contentSlotEl.appendChild(contentSlotDefaultEl);
    // contentEl.appendChild(contentSlotEl);
    // wrapperEl.appendChild(contentEl);

    // templateEl.appendChild(wrapperEl);

    // document.body.appendChild(templateEl);
    let template = document.getElementById("regent-card-template");
    let templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
      templateContent.cloneNode(true)
    );
  }
}

customElements.define("regent-card", RegentCard);
