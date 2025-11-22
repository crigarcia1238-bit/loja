document.addEventListener("DOMContentLoaded", function () {
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
