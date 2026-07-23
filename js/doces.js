const doces = document.getElementById("doces");

for (let i = 4; i <= 80; i++) {

    const card = document.createElement("div");
    card.className = "receitas-doces";

    const img = document.createElement("img");
    img.src = `img/${i}.png`;

    img.addEventListener("click", () => {
        abrirModal(i);
    });

    card.appendChild(img);
    doces.appendChild(card);
}

function abrirModal(numero) {
    const imagem = document.getElementById("imagemModal");

    imagem.src = `img/${numero}.png`;

    document.getElementById("modalDoces").classList.add("active");
}

function fecharModal() {
    document.getElementById("modalDoces").classList.remove("active");
}