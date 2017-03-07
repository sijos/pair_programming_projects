const DOMNodeCollection = require('./dom_node_collection');

const $l = function (selector) {
  if (selector instanceof HTMLElement) {
    return new DOMNodeCollection([selector]);
  } else {
    const NodeList = document.querySelectorAll(selector);
    let nodesArray = Array.from(NodeList);
    return new DOMNodeCollection(nodesArray);
  }
};

window.$l = $l;
