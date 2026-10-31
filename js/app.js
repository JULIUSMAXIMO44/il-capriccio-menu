/* Il Capriccio — menú bilingüe (ES/EN). Lee los datos de data/menu.js (const MENU). */
(() => {
  "use strict";
  const $ = s => document.querySelector(s);
  const T = {
    es: {skip:"Saltar al contenido", menu:"Menú", back:"Volver al menú", to:"EN", sw:"Cambiar idioma a inglés", st:"Idioma: español", err:"Categoría no encontrada.", foot:"Precios en pesos colombianos (COP)"},
    en: {skip:"Skip to content", menu:"Menu", back:"Back to menu", to:"ES", sw:"Switch language to Spanish", st:"Language: English", err:"Category not found.", foot:"Prices in Colombian pesos (COP)"}
  };
  // Categoría especial con los platos marcados con "r":1 en menu.js
  const REC = {id:"recomendados", icon:"⭐", es:{t:"Te recomendamos", s:"Selección del chef"}, en:{t:"We recommend", s:"Chef's picks"}};
  const home = document.body.dataset.page === "home";
  let lang = "es";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "").startsWith("en") ? "en" : "es"); } catch (e) {}

  const money = p => "$" + p.toLocaleString("es-CO");
  // Foto en img/cat/<id>.jpg; si no existe, onerror la quita y queda el ícono de respaldo
  const media = c => `<span class="ph"><b aria-hidden="true">${c.icon}</b><img src="img/cat/${c.id}.jpg" alt="" onerror="this.remove()"></span>`;

  function renderHome() {
    $("#app").innerHTML = [REC, ...MENU.cats].map(c => {
      const x = c[lang];
      return `<a class="card${c === REC ? " feat" : ""}" href="categoria.html?c=${c.id}">${media(c)}<span class="tx"><strong>${x.t}</strong><em>${x.s}</em></span></a>`;
    }).join("");
    document.title = "Il Capriccio | " + T[lang].menu;
  }

  function renderCat() {
    const id = new URLSearchParams(location.search).get("c");
    const c = id === REC.id ? REC : MENU.cats.find(k => k.id === id);
    if (!c) { $("#hero").innerHTML = `<h1>${T[lang].err}</h1>`; return; }
    const items = c === REC ? MENU.cats.flatMap(k => k.items.filter(i => i.r)) : c.items;
    const x = c[lang];
    $("#hero").innerHTML = `${media(c)}<h1>${x.t}</h1><p>${x.s}</p>`;
    $("#app").innerHTML = items.map(i => { const y = i[lang];
      return `<li class="it"><div><h2>${y.n}</h2>${y.d ? `<p>${y.d}</p>` : ""}</div><span class="pr">${money(i.p)}</span></li>`; }).join("");
    document.title = x.t + " | Il Capriccio";
  }

  function render() {
    document.documentElement.lang = lang;                       // lectores de pantalla pronuncian bien
    document.querySelectorAll("[data-t]").forEach(e => e.textContent = T[lang][e.dataset.t]);
    $("#lang").setAttribute("aria-label", T[lang].sw);
    $("#lt").textContent = T[lang].to;
    home ? renderHome() : renderCat();
  }

  $("#lang").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
    $("#live").textContent = T[lang].st;                         // anuncia el cambio
  });
  render();
})();
