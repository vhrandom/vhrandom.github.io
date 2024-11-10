function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Cambia el icono y texto del botón
    const button = document.querySelector("button");
    if (document.body.classList.contains("dark-mode")) {
      button.innerHTML = "☀️ Modo Claro";
      localStorage.setItem("darkMode", "enabled");
    } else {
      button.innerHTML = "🌙 Modo Oscuro";
      localStorage.setItem("darkMode", "disabled");
    }
  }
  
  // Detecta la preferencia del sistema
  function applySystemPreference() {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedPreference = localStorage.getItem("darkMode");
  
    // Aplica la preferencia guardada del usuario, si existe
    if (savedPreference === "enabled") {
      document.body.classList.add("dark-mode");
      document.querySelector("button").innerHTML = "☀️ Modo Claro";
    } else if (savedPreference === "disabled") {
      document.body.classList.remove("dark-mode");
      document.querySelector("button").innerHTML = "🌙 Modo Oscuro";
    } else if (systemPrefersDark) {
      // Si no hay preferencia guardada, usa la preferencia del sistema
      document.body.classList.add("dark-mode");
      document.querySelector("button").innerHTML = "☀️ Modo Claro";
    } else {
      document.body.classList.remove("dark-mode");
      document.querySelector("button").innerHTML = "🌙 Modo Oscuro";
    }
  }
  
  // Ejecuta la función al cargar la página
  applySystemPreference();
  