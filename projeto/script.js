document.addEventListener("DOMContentLoaded", function () {

/* -------------------------- Imagens dos Produtos --------------------------- */

const carousels = document.querySelectorAll(".carousel");


for (let i = 0; i < carousels.length; i++) {
    const carousel = carousels[i];
    const img = carousel.querySelector(".carousel-img");
    const images = JSON.parse(carousel.getAttribute("data-images"));
    let index = 0;

    const nextBtn = carousel.querySelector(".next");
    const prevBtn = carousel.querySelector(".prev");

    nextBtn.addEventListener("click", function () {
        index = (index + 1) % images.length;
        img.src = images[index];
    });

    prevBtn.addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        img.src = images[index];
    });
}



/* -------------------------- ler mais e ler menos --------------------------- */

    const blocos = document.querySelectorAll(".bloco-produtos");


for (let i = 0; i < blocos.length; i++) {
    const bloco = blocos[i];
    const legendas = bloco.querySelectorAll(".legenda");

    if (legendas.length > 1) {

        // Esconde todas as legendas exceto a primeira
        for (let j = 1; j < legendas.length; j++) {
            legendas[j].style.display = "none";
        }

        // Cria o botão
        const botao = document.createElement("button");
        botao.textContent = "Ler mais";
        botao.classList.add("btn-toggle");

        let aberto = false;

        botao.addEventListener("click", function () {
            aberto = !aberto;

            if (aberto) {
                for (let k = 0; k < legendas.length; k++) {
                    if (k > 0) legendas[k].style.display = "block";
                }
                botao.textContent = "Ler menos";
            } else {
                for (let k = 0; k < legendas.length; k++) {
                    if (k > 0) legendas[k].style.display = "none";
                }
                botao.textContent = "Ler mais";
            }
        });

        bloco.appendChild(botao);
    }
}





/* -------------------------- Local Storage no Formulario --------------------------- */

    const form = document.querySelector(".contacto-form");

if (form) {
    const nome = document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    
    const dadosSalvos = JSON.parse(localStorage.getItem("formContato"));
    if (dadosSalvos) {
        nome.value = dadosSalvos.nome || "";
        telefone.value = dadosSalvos.telefone || "";
        email.value = dadosSalvos.email || "";
        mensagem.value = "";
    }

    
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const dados = {
            nome: nome.value,
            telefone: telefone.value,
            email: email.value,
            mensagem: mensagem.value
        };

        localStorage.setItem("formContato", JSON.stringify(dados));

        alert("Dados salvos com sucesso! Entraremos em contato em breve.");
    });

    const btnLimpar = document.getElementById("limpar");

    if (btnLimpar) {
        btnLimpar.addEventListener("click", function () {
            localStorage.removeItem("formContato");

            nome.value = "";
            telefone.value = "";
            email.value = "";
            mensagem.value = "";

            alert("Dados apagados com sucesso!");
        });
    }
}



/* -------------------------- adicionar ao carrinho --------------------------- */

document.querySelectorAll(".bloco-produtos").forEach((produto) => {
    const botao = produto.querySelector(".add-carrinho");

    if (botao) {
        botao.addEventListener("click", () => {

            const nome = produto.querySelector("h3 .legenda").innerText.trim();
            const imagem = produto.querySelector(".carousel-img").src;

         
            const item = { nome, imagem };

         
            let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

         
            carrinho.push(item);

         
            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            alert("Produto adicionado ao carrinho!");
        });
    }
});



});
