let Router = require('./router');
let Inbox = require('./Inbox');

document.addEventListener('DOMContentLoaded', () => {
  let node = document.querySelector('.content');
  let router = new Router(node, routes);
  router.start();

  let navs = Array.from(document.querySelectorAll('.sidebar-nav li'));
  navs.forEach(sidebarLi => {
    sidebarLi.addEventListener('click', () => {
      let newLoc = sidebarLi.innerText.toLowerCase();
      window.location.hash = newLoc;
    });
  });

  }
);

const routes = {
  inbox: Inbox
};
