const molhos = document.getElementById('molhos');

for (let i = 124; i <= 126; i++) {
    const card = document.createElement('div');
    card.className = 'molhos-e-acompanhamentos';

    const img = document.createElement('img');
    img.src = `img/${i}.png`;

    img.addEventListener("click", () => {
        abrirModal(i);
    });

    card.appendChild(img);
    molhos.appendChild(card);
}

function abrirModal(numero) {
    const imagem = document.getElementById("imagemModal");

    imagem.src = `img/${numero}.png`;

    document.getElementById("modalMolhos").classList.add("active");
}

function fecharModal() {
    document.getElementById("modalMolhos").classList.remove("active");
}