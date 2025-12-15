async function cargarMenu(categoria) {
  try {
    const response = await fetch("data/menu.json");
    const data = await response.json();

    const contenedor = document.getElementById("menu-lista");
    contenedor.innerHTML = "";

    data[categoria].forEach((item) => {
      contenedor.innerHTML += `
        <div class="col s12 m6 l4">
          <div class="card">
            <div class="card-content">
              <span class="card-title">${item.nombre}</span>
              <p class="precio">$${item.precio.toLocaleString()}</p>
            </div>
          </div>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error cargando menú:", error);
  }
}
