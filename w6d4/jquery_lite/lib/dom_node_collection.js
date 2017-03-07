class DOMNodeCollection {
  constructor(HTMLElements) {
    this.HTMLElements = HTMLElements;
  }

  html(string = null) {
    if (string === null) {
      return this.HTMLElements[0].innerHTML;
    } else {
      this.HTMLElements.forEach((el) => {
        el.innerHTML = string;
      });
    }
  }

  empty() {
    this.html("");
  }

  append(arg) {
    if (arg instanceof String) {
      this.HTMLElements.forEach((el) => {
        el.innerHTML.concat(arg);
      });
    } else if (arg instanceof HTMLElement) {
    this.HTMLElements.forEach((el) => {
      el.innerHTML.concat(arg.outerHTML);
    });
    } else if (arg instanceof DOMNodeCollection) {
      //convert to html text THEN concat to inner
    }
  }

  attr(name, value = null) {
    if (value === null) {
      return this.HTMLElements[0].getAttribute(name);
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(name, value);
      });
      return this.HTMLElements;
    }
  }

  addClass(cName) {
    this.HTMLElements.forEach((el) => {
      el.className = cName;
    });
  }

  removeClass(cName) {
    this.HTMLElements.forEach((el) => {
      el.classList.remove(cName);
    });
  }

  children() {
    let childElements = [];
    this.HTMLElements.forEach((el) => {
      childElements = childElements.concat(el.children);
    });
    return new DOMNodeCollection(childElements);
  }

  parent() {
    let parentElements = [];
    this.HTMLElements.forEach((el) => {
      parentElements = parentElements.concat(el.parentNode);
    });
    return new DOMNodeCollection(parentElements);
  }

  find(selector) {
    let matchingElements = [];
    this.HTMLElements.forEach((el) => {
      matchingElements = matchingElements.
        concat(el.querySelectorAll(selector));
    });
    return new DOMNodeCollection(matchingElements);
  }

  remove() {
    this.empty();
  }
}

module.exports = DOMNodeCollection;
