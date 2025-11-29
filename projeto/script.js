document.addEventListener("DOMContentLoaded", function () {

/* -------------------------- Imagens dos Produtos --------------------------- */
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


/* -------------------------- ler mais e ler menos --------------------------- */

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




/* -------------------------- Local Storage no Formulario --------------------------- */

    const form = document.querySelector(".contacto-form");
    if (form) {
        const nome = document.getElementById("nome");
        const telefone = document.getElementById("telefone");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        // Carregar dados ao abrir a página
        const dadosSalvos = JSON.parse(localStorage.getItem("formContato"));
        if (dadosSalvos) {
            nome.value = dadosSalvos.nome || "";
            telefone.value = dadosSalvos.telefone || "";
            email.value = dadosSalvos.email || "";
            mensagem.value = dadosSalvos.mensagem || "";
        }

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const dados = {
                nome: nome.value,
                telefone: telefone.value,
                email: email.value,
                mensagem: mensagem.value
            };

            localStorage.setItem("formContato", JSON.stringify(dados));

            alert("Dados salvos com sucesso!");
        });

        const btnLimpar = document.getElementById("limpar");

        if (btnLimpar) {
            btnLimpar.addEventListener("click", () => {
                localStorage.removeItem("formContato");

                nome.value = "";
                telefone.value = "";
                email.value = "";
                mensagem.value = "";

                alert("Dados apagados com sucesso!");
            });
        }
    }

});
