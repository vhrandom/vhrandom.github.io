function toggleDarkMode() {
    const button = document.querySelector("button"); // Seleccionamos el botón
  
    document.body.classList.toggle("dark-mode");
  
    // Actualizamos el texto y guardamos la preferencia en localStorage
    if (document.body.classList.contains("dark-mode")) {
      button.innerHTML = "☀️ Modo Claro";
      localStorage.setItem("darkMode", "enabled");
    } else {
      button.innerHTML = "🌙 Modo Oscuro";
      localStorage.setItem("darkMode", "disabled");
    }
  }
  
  // Detecta la preferencia guardada y la preferencia del sistema
  function applySystemPreference() {
    const button = document.querySelector("button");
    
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches; // Preferencia del sistema
    const savedPreference = localStorage.getItem("darkMode"); // Preferencia guardada
    
    if (savedPreference === "enabled") {
      // Si el usuario ha habilitado el modo oscuro
      document.body.classList.add("dark-mode");
      button.innerHTML = "☀️ Modo Claro";
    } else if (savedPreference === "disabled") {
      // Si el usuario ha deshabilitado el modo oscuro
      document.body.classList.remove("dark-mode");
      button.innerHTML = "🌙 Modo Oscuro";
    } else if (systemPrefersDark) {
      // Si no hay preferencia guardada, y el sistema prefiere el modo oscuro
      document.body.classList.add("dark-mode");
      button.innerHTML = "☀️ Modo Claro";
    } else {
      // Si no hay preferencia guardada y el sistema prefiere el modo claro
      document.body.classList.remove("dark-mode");
      button.innerHTML = "🌙 Modo Oscuro";
    }
  }
  
  // Ejecuta la función cuando el DOM está completamente cargado
  document.addEventListener("DOMContentLoaded", applySystemPreference);
  