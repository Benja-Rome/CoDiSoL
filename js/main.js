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

// Buscador en tiempo real para la tienda
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('storeSearchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    const noResultsMsg = document.getElementById('noResultsMessage');

    if (!productCards.length) return;

    let activeCategory = 'all';

    // Función unificada para filtrar por categoría y texto
    function filterProducts() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        let visibleCount = 0;

        productCards.forEach(card => {
            const category = card.getAttribute('data-category')?.toLowerCase() || '';
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.card-text')?.textContent.toLowerCase() || '';

            // 1. Validar categoría activa
            const matchesCategory = (activeCategory === 'all' || category === activeCategory);

            // 2. Validar coincidencia con la búsqueda
            const matchesSearch = !query || title.includes(query) || description.includes(query) || category.includes(query);

            // Se muestra la tarjeta solo si cumple ambas condiciones
            if (matchesCategory && matchesSearch) {
                card.classList.remove('d-none');
                visibleCount++;
            } else {
                card.classList.add('d-none');
            }
        });

        // Mostrar u ocultar mensaje cuando no hay resultados
        if (noResultsMsg) {
            if (visibleCount === 0) {
                noResultsMsg.classList.remove('d-none');
            } else {
                noResultsMsg.classList.add('d-none');
            }
        }
    }

    // Escuchar la escritura en el buscador
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    // Escuchar el clic en los botones de categoría
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar estados estéticos de los botones
            filterBtns.forEach(b => {
                b.classList.remove('active', 'btn-primary-custom');
                b.classList.add('btn-outline-secondary');
            });

            btn.classList.remove('btn-outline-secondary');
            btn.classList.add('active', 'btn-primary-custom');

            // Actualizar categoría seleccionada y filtrar
            activeCategory = btn.getAttribute('data-filter') || 'all';
            filterProducts();
        });
    });
});
