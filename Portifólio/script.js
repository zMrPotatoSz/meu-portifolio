document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleSobreBtn");
  const texto = document.getElementById("sobreTexto");

  btn.addEventListener("click", () => {
    texto.classList.toggle("hidden");

    if (!texto.classList.contains("hidden")) {
      btn.textContent = "Fechar";
    } else {
      btn.textContent = "Sobre mim";
    }
  });
});