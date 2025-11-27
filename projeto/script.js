document.addEventListener("DOMContentLoaded", function () {

/* -------------------------- CARROSSEL DE IMAGENS --------------------------- */
    document.querySelectorAll(".carousel").forEach(carousel => {
        const img = carousel.querySelector(".carousel-img");
        const images = JSON.parse(carousel.getAttribute("data-images"));
        let index = 0;

        carousel.querySelector(".next").addEventListener("click", () => {
            index = (index + 1) % images.length;
            img.src = images[index];
        });

        carousel.querySelector(".prev").addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            img.src = images[index];
        });
    });


/* -------------------------- LER MAIS / LER MENOS --------------------------- */

    const blocos = document.querySelectorAll(".bloco-produtos");

    blocos.forEach(bloco => {
        const legendas = bloco.querySelectorAll(".legenda");

        if (legendas.length > 1) {
            for (let i = 1; i < legendas.length; i++) {
                legendas[i].style.display = "none";
            }

            const botao = document.createElement("button");
            botao.textContent = "Ler mais";
            botao.classList.add("btn-toggle");

            let aberto = false;

            botao.addEventListener("click", function () {
                aberto = !aberto;

                if (aberto) {
                    legendas.forEach((leg, index) => {
                        if (index > 0) leg.style.display = "block";
                    });
                    botao.textContent = "Ler menos";
                } else {
                    legendas.forEach((leg, index) => {
                        if (index > 0) leg.style.display = "none";
                    });
                    botao.textContent = "Ler mais";
                }
            });

            bloco.appendChild(botao);
        }
    });

});
