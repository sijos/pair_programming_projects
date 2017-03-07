class Router {
  constructor(node, routes) {
    this.node = node;
    this.routes = routes;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    let component = this.activeRoute();
    this.node.innerHTML = "";
    if (component !== undefined) {
      let newNode = component.render();
      this.node.appendChild(newNode);
    }
    // let p = document.createElement("p");
    // p.innerHTML = currentRoute;
    // this.node.appendChild(p);
  }

  activeRoute() {
    let loc =  window.location.hash.slice(1);
    return this.routes[loc];
  }
}

module.exports = Router;
