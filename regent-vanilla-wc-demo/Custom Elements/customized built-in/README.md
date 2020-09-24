# This is an example of an customized built-in element

These inherit from standard HTML elements.
Not supported by all browsers.
You have to specify what element they extend.

```javascript
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

```javascript
<ul is="expanding-list">...</ul>
```
