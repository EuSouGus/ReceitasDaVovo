const salgados = document.getElementById('salgados');

for (let i = 82; i <= 119; i++) {

    const card = document.createElement('div');
    card.className = 'receitas-salgadas';

    const img = document.createElement('img');
    img.src = `img/${i}.png`;

    img.addEventListener("click", () => {
        abrirModal(i);
    });

    card.appendChild(img);
    salgados.appendChild(card);
}

function abrirModal(numero) {
    const imagem = document.getElementById("imagemModal");

    imagem.src = `img/${numero}.png`;

    document.getElementById("modalSalgados").classList.add("active");
}

function fecharModal() {
    document.getElementById("modalSalgados").classList.remove("active");
}

/*  Entendendo a lógica do código:
    
    <main class="salgados">
        <div id="salgados"></div> --> document.getElementById('salgados')
        <div class="receitas-salgadas"> --> const card = document.createElement('div');
                                            card.className = 'receitas-salgadas';
            <img> --> img.src = `/img/${i}.png`
        </div>
    </main>

    <div id="modalSalgados">
        <button onclick="fecharModal()">Fechar</button> --> document.getElementById("modalSalgados").classList.remove("active");
        <img src="" alt="" id="imagemModal"> -->  const imagem = document.getElementById("imagemModal");
    </div> 
*/