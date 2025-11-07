document.addEventListener("DOMContentLoaded", () => {
  const jokeElement = document.querySelector(".joke");
  const jokeButton = document.querySelector(".btn");

  // Al hacer clic en el botón
  jokeButton.addEventListener("click", async () => {
    jokeButton.disabled = true;

    try {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any");
      const data = await response.json();

      // Mostrar el chiste según su tipo
      if (data.type === "single") {
        jokeElement.textContent = data.joke;
      } else if (data.type === "twopart") {
        jokeElement.textContent = `${data.setup}\n\n${data.delivery}`;
      } else {
        jokeElement.textContent = "No se pudo obtener un chiste.";
      }
    } catch (error) {
      console.error("Error al obtener el chiste:", error);
      jokeElement.textContent = "Ocurrió un error al cargar el chiste 😢";
    } finally {
      jokeButton.disabled = false;
    }
  });
});
