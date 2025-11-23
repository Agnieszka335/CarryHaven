const routes = {
  "/": "./html/home.html",
  "/catalog": "./html/catalog.html",
  "/about": "./html/about.html",
  "/contact": "./html/contact.html",
  "/cart": "./html/cart.html",
};


function loadPage() {
  const hash = location.hash.replace("#", "");
  const path = hash || "/"; 
  const page = routes[path];

  fetch(page)
    .then(response => response.text())
    .then(html => {
      document.getElementById("content").innerHTML = html;
    })
    .catch(() => {
      document.getElementById("content").innerHTML = "<h2>404 — Not found</h2>";
    });
}

window.addEventListener("load", loadPage);
window.addEventListener("hashchange", loadPage);
