document.addEventListener("DOMContentLoaded", function() {
  const shareButton = document.querySelector(".share-button");
  const reviewsButton = document.querySelector(".reviews-button");
  const reviewsModal = document.getElementById("reviews-modal");

  shareButton.addEventListener("click", function() {
    // Simplemente una demostración de alerta para compartir
    alert("¡Compartir en redes sociales!");
  });

  reviewsButton.addEventListener("click", function() {
    // Simulación de reseñas
    const reviewList = reviewsModal.querySelector(".review-list");
    reviewList.innerHTML = ""; // Limpiar las reseñas anteriores (en caso de que existan)
    
    // Añadir reseñas simuladas (puedes obtenerlas de una base de datos en un escenario real)
    const reviews = [
      "¡Excelente comida y entrega rápida!",
      "Me encanta este restaurante, siempre ordeno aquí.",
      "La comida estaba deliciosa, pero la entrega tardó un poco más de lo esperado."
    ];

    reviews.forEach(review => {
      const reviewItem = document.createElement("div");
      reviewItem.textContent = review;
      reviewList.appendChild(reviewItem);
    });

    // Mostrar el modal de reseñas
    reviewsModal.style.display = "block";
  });

  // Cierra el modal al hacer clic en la 'x' o fuera del modal
  reviewsModal.addEventListener("click", function(event) {
    if (event.target === reviewsModal || event.target.classList.contains("close")) {
      reviewsModal.style.display = "none";
    }
  });

  // Evita que el clic en el modal se propague al contenido
  reviewsModal.querySelector(".modal-content").addEventListener("click", function(event) {
    event.stopPropagation();
  });
});
