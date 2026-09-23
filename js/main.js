document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll("#catalog-grid .product-card");

    if (filterButtons.length > 0 && products.length > 0) {
        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                // Actualizar estilo activo del botón
                filterButtons.forEach((b) => {
                    b.classList.remove("btn-primary-custom", "active");
                    b.classList.add("btn-outline-secondary");
                });

                btn.classList.remove("btn-outline-secondary");
                btn.classList.add("btn-primary-custom", "active");

                const filter = btn.getAttribute("data-filter");

                // Filtrar las tarjetas de productos
                products.forEach((product) => {
                    const category = product.getAttribute("data-category");

                    if (filter === "all" || filter === category) {
                        product.style.display = "flex";
                    } else {
                        product.style.display = "none";
                    }
                });
            });
        });
    }
});
// Validaciones nativas de formularios con Bootstrap 5
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert('¡Gracias por tu mensaje! Te responderemos a la brevedad.');
                contactForm.reset();
                contactForm.classList.remove('was-validated');
                return;
            }

            contactForm.classList.add('was-validated');
        }, false);
    }
});
