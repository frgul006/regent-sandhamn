# This is an example of an autonomous custom element

These are standalone and don't inherit from standard HTML elements.
Better browser support and most popular kind of custom element.

```javascript
class RegentCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here

    ...
  }
}

customElements.define("regent-card", RegentCard);
```

```javascript
<regent-card>...</regent-card>
```
