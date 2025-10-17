
// Interacciones: carga de portafolio y subida de proyectos con imagen real
document.addEventListener("DOMContentLoaded", () => {
  const galeria = document.getElementById("galeria");
  const form = document.getElementById("formPortafolio");
  const contactForm = document.getElementById("contactForm");

  async function cargarPortafolio(){
    if(!galeria) return;
    try {
      const res = await fetch("/api/portafolio");
      const proyectos = await res.json();
      galeria.innerHTML = proyectos.map(p => `
        <div class="item">
          <img src="${p.imagen}" alt="${p.titulo}" onerror="this.style.display='none'"/>
          <h4>${p.titulo}</h4>
          <p>${p.descripcion}</p>
        </div>
      `).join("");
    } catch (e) {
      console.error("Error cargando portafolio", e);
    }
  }

  if(form){
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      // POST multipart/form-data to /api/portafolio
      try {
        const res = await fetch("/api/portafolio", {
          method: "POST",
          body: fd
        });
        if(res.ok){
          form.reset();
          cargarPortafolio();
          alert("Proyecto agregado correctamente");
        } else {
          alert("Error al subir proyecto");
        }
      } catch (err) {
        console.error(err);
        alert("Error de red al intentar subir");
      }
    });
  }

  if(contactForm){
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Gracias — Te contactaré pronto.");
      contactForm.reset();
    });
  }

  cargarPortafolio();
});
