const titulo = document.querySelector('.titulo-principal');
    const textoVariavel = "Desenvolvedor de Software";

    function typeWrite(elemento, texto) {
        const textoArray = texto.split('');
        let i = 0;

        function escrever() {
            if (i < textoArray.length) {
                elemento.innerHTML += textoArray[i];
                i++;
                setTimeout(escrever, 120);
            } else {
                setTimeout(apagar, 2000); // Esperar 2 segundos antes de apagar
            }
        }

        function apagar() {
            if (elemento.innerHTML.length > 0) {
                elemento.innerHTML = elemento.innerHTML.slice(0, -1);
                setTimeout(apagar, 75);
            } else {
                setTimeout(reiniciar, 1000); // Esperar 1 segundo antes de reiniciar
            }
        }

        function reiniciar() {
            i = 0;
            setTimeout(escrever, 0);
        }

        escrever();
    }

    // Iniciar o loop
    typeWrite(titulo, textoVariavel);



    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
        }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
        }
    });
    } else {
    $(multipleCardCarousel).addClass("slide");
    }

    
    AOS.init();

    document.addEventListener("DOMContentLoaded", function () {
      const mostrarTodosBtn = document.getElementById("mostrarTodos");
      const ocultarTodosBtn = document.getElementById("ocultarTodos");
      const hiddenCards = document.querySelectorAll(".hidden-card");
      const servicosOferecidosSection = document.getElementById("minhas_conquistas");

      mostrarTodosBtn.addEventListener("click", function () {
          hiddenCards.forEach(function (card) {
          card.style.display = "block"; // Mostrar o card
          });

          mostrarTodosBtn.style.display = "none"; // Ocultar o botão "Mostrar Todos"
          ocultarTodosBtn.style.display = "block"; // Mostrar o botão "Ocultar Todos"
      });

      ocultarTodosBtn.addEventListener("click", function () {
          hiddenCards.forEach(function (card) {
          card.style.display = "none"; // Ocultar o card
          });

          ocultarTodosBtn.style.display = "none"; // Ocultar o botão "Ocultar Todos"
          mostrarTodosBtn.style.display = "block"; // Mostrar o botão "Mostrar Todos"

          // Redirecionar a página para a seção "Serviços oferecidos"
          servicosOferecidosSection.scrollIntoView({ behavior: "smooth" });
      });
    });