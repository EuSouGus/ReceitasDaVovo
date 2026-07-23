const receitas = [
    //SALGADAS
    {
        id: "risoto",
        nome: "Risoto",
        tipo: "salgado",
        obrigatorios: ["arroz", "cebola", "manteiga", "queijo ralado"],
        opcionais: ["caldo knorr", "presunto"],
        preparo: "1. Doure a cebola em 2 colheres (sopa) de manteiga e junte o arroz para refogar;\n2. Acrescente o presunto picado em cubinhos e adicione os temperos;\n3. Tampe a panela e deixe cozinhar em fogo baixo por aproximadamente 30 minutos;\n4. Quando estiver cozido e quase seco, junte o queijo parmesão ralado e sirva."
    },
    {
        id: "pao_de_queijo",
        nome: "Pão de Queijo",
        tipo: "salgado",
        obrigatorios: ["polvilho doce", "óleo", "leite", "ovo", "queijo ralado"],
        opcionais: ["sal"],
        preparo: "1. Bata todos os ingredientes no liquidificador;\n2. Separe a massa em bolinhas e coloque em uma assadeira untada com óleo;\n3. Leve para assar."
    },
    {
        id: "bolinho_de_batata",
        nome: "Bolinho de Batata",
        tipo: "salgado",
        obrigatorios: ["batata", "ovo", "maizena", "queijo ralado"],
        opcionais: ["sal", "cheiro verde", "pimenta"],
        preparo: "1. Colocar todos os ingredientes numa vasilha, amassar bem, deixar a massa meia hora na geladeira, depois fazer bolinha e fritar em óleo quente."
    },
    {
        id: "nhoque",
        nome: "Nhoque",
        tipo: "salgado",
        obrigatorios: ["batata", "ovo", "manteiga", "leite", "farinha"],
        opcionais: [],
        preparo: "1. Cozinhe a batata e amasse;\n2. Adicione na panela os outros ingredientes e misture;\n3. Espere esfriar e faça bolinhas ou quadradinhos."
    },
    {
        id: "panqueca",
        nome: "Panqueca",
        tipo: "salgado",
        obrigatorios: ["farinha", "óleo", "ovo", "leite"],
        opcionais: ["sal", "queijo", "presunto"], // Opcionais usados para rechear
        preparo: "1. Bata todos os ingredientes no liquidificador até ficar uma mistura homogênea;\n2. Pegue uma frigideira e unte com óleo ou margarina;\n3. Coloque a massa na assadeira e espere até a massa soltar do fundo, vire e deixe fritar do outro lado;\n4. Acrescente o recheio e enrole."
    },

    // --- DOCES ---
    {
        id: "bolo_cenoura",
        nome: "Bolo de Cenoura",
        tipo: "doce",
        obrigatorios: ["cenoura", "açúcar", "óleo", "farinha", "ovo", "fermento", "chocolate em pó", "manteiga", "leite"],
        opcionais: [],
        preparo: "BOLO:\n1. Corte a cenoura e coloque no liquidificador;\n2. Adicione os outros ingredientes e bata até ficar uma massa homogênea;\n3. Unte uma assadeira, despeje a massa e leve para assar.\n\nCOBERTURA:\n1. Adicione todos os ingredientes em uma panela;\n2. Leve ao fogo e deixe cozinhar até levantar fervura;\n3. Coloque a cobertura no bolo e sirva."
    },
    {
        id: "brigadeiro",
        nome: "Brigadeiro",
        tipo: "doce",
        obrigatorios: ["leite em pó", "chocolate em pó", "leite condensado", "manteiga"],
        opcionais: ["açúcar"],
        preparo: "1. Misture o leite condensado, o leite em pó, o chocolate em pó (Nescau), a manteiga e o açúcar;\n2. Leve ao fogo até desgrudar do fundo da panela e deixe esfriar;\n3. Faça bolinhas e coloque em forminhas para servir."
    },
    {
        id: "pudim",
        nome: "Pudim",
        tipo: "doce",
        obrigatorios: ["leite condensado", "leite", "ovo"],
        opcionais: ["açúcar"], // usado para a calda opcional descrita
        preparo: "1. Bater os ingredientes (menos o açúcar) no liquidificador até ficar espumoso;\n2. Despejar a massa numa forma redonda de pudim;\n3. Cozinhar em banho-maria com a forma dentro de uma panela com água por 40 minutos;\n4. Colocar na geladeira e servir com a calda."
    },
    {
        id: "mousse_maracuja",
        nome: "Mousse de Maracujá",
        tipo: "doce",
        obrigatorios: ["leite condensado", "creme de leite", "suco de maracujá", "gelatina de maracujá"],
        opcionais: [], // Água morna não entra como item de despensa
        preparo: "1. Bata todos os ingredientes no liquidificador até ficar uma mistura homogênea;\n2. Coloque a mistura no pirex e leve para geladeira."
    },
    {
        id: "capuccino",
        nome: "Capuccino",
        tipo: "doce",
        obrigatorios: ["creme de leite", "chocolate em barra", "café", "conhaque"],
        opcionais: [],
        preparo: "1. Leve o creme de leite ao banho-maria. Apague o fogo antes que a água ferva;\n2. Junte os pedaços de chocolate picados e mexa delicadamente até formar um creme liso;\n3. Coloque 3 colheres de sopa desse creme em canecas aquecidas e despeje por cima o café forte e bem quente;\n4. Coloque o conhaque em uma concha e leve ao fogo até aquecer;\n5. Distribua o conhaque ainda quente nas canecas e sirva."
    }
];

// Estado da sessão atual
let tipoSelecionado = "";
let ingredientesEscolhidos = [];

// 2. Lista Consolidada de Inputs baseada nas novas receitas
const todosIngredientes = [
    "açúcar", "arroz", "batata", "café", "caldo knorr", "cebola", "cenoura",
    "chocolate em barra", "chocolate em pó", "conhaque", "creme de leite", "farinha",
    "fermento", "gelatina de maracujá", "leite", "leite condensado", "leite em pó",
    "maizena", "manteiga", "óleo", "ovo", "polvilho doce", "presunto", "queijo ralado",
    "queijo", "sal", "cheiro verde", "pimenta", "suco de maracujá"
];

// Helper para injetar mensagens simulando digitação no chat
function adicionarMensagem(texto, remetente) {
    const chatBox = document.getElementById("chatBox");
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${remetente}-message`;
    msgDiv.innerHTML = texto;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Passo 1: Captura o tipo e avança
function selecionarTipo(tipo) {
    tipoSelecionado = tipo;

    const textos = {
        doce: "Quero receitas doces! 🍰",
        salgado: "Quero receitas salgadas! 🍔",
        tanto_faz: "Tanto faz, me mostre opções! 🔄"
    };

    adicionarMensagem(textos[tipo], "user");

    setTimeout(() => {
        adicionarMensagem("Excelente! Agora me diga: quais destes ingredientes você tem em mãos no momento?", "bot");
        renderizarIngredientes();
        mudarPasso("stepIngredientes");
    }, 600);
}

function getIngredientesPorTipo(tipo) {
    if (tipo === "tanto_faz" || tipo === "") {
        return [...new Set(todosIngredientes)].sort();
    }

    const ingredientes = receitas
        .filter(r => r.tipo === tipo)
        .flatMap(r => [...r.obrigatorios, ...r.opcionais]);

    return [...new Set(ingredientes)].sort();
}

// Constrói os checkboxes interativos baseados no array de ingredientes filtrado pelo tipo
function renderizarIngredientes() {
    const grid = document.getElementById("ingredientsGrid");
    grid.innerHTML = "";

    const ingredientesParaExibir = getIngredientesPorTipo(tipoSelecionado);

    ingredientesParaExibir.forEach(ing => {
        const label = document.createElement("label");
        label.className = "ing-label";
        label.innerHTML = `<input type="checkbox" value="${ing}" onchange="toggleIngrediente(this)"> ${ing}`;
        grid.appendChild(label);
    });
}

function toggleIngrediente(checkbox) {
    if (checkbox.checked) {
        checkbox.parentElement.classList.add("selected");
    } else {
        checkbox.parentElement.classList.remove("selected");
    }
}

function voltarPasso1() {
    mudarPasso("stepTipo");
}

// Passo 2: Aplicação da Regra de Negócio principal de Comparação
function processarReceitas() {
    const checkboxes = document.querySelectorAll("#ingredientsGrid input:checked");
    ingredientesEscolhidos = Array.from(checkboxes).map(cb => cb.value);

    if (ingredientesEscolhidos.length === 0) {
        adicionarMensagem("Não marquei nenhum ingrediente.", "user");
        setTimeout(() => {
            adicionarMensagem("Você precisa marcar pelo menos um ingrediente para que eu possa analisar! 🧐", "bot");
        }, 500);
        return;
    }

    const textoIngredientes = ingredientesEscolhidos.join(", ");
    adicionarMensagem(`Tenho em mãos: <strong>${textoIngredientes}</strong>.`, "user");

    setTimeout(() => {
        // Filtra pelo tipo (Doce / Salgado / Tanto Faz)
        const receitasFiltradas = receitas.filter(r => tipoSelecionado === "tanto_faz" || r.tipo === tipoSelecionado);

        let possiveis = [];
        let quasePossiveis = [];

        receitasFiltradas.forEach(receita => {
            // Verifica quais ingredientes obrigatórios da receita o usuário NÃO possui
            const faltantesObrigatorios = receita.obrigatorios.filter(ing => !ingredientesEscolhidos.includes(ing));

            if (faltantesObrigatorios.length === 0) {
                possiveis.push(receita);
            } else if (faltantesObrigatorios.length === 1) {
                quasePossiveis.push({ ...receita, falta: faltantesObrigatorios[0] });
            }
        });

        // Apresentação dos resultados estruturados em formato de conversa
        if (possiveis.length === 0 && quasePossiveis.length === 0) {
            adicionarMensagem("Hum... com o que você marcou, infelizmente não consegui encontrar receitas compatíveis no momento sem que faltem muitos itens. 😕", "bot");
        } else {
            adicionarMensagem(`Encontrei opções compatíveis com sua despensa:`, "bot");

            // Renderiza as receitas completas primeiro
            possiveis.forEach(r => {
                criarCardResposta(r.nome, "possivel", `Você tem todos os ingredientes obrigatórios! Clique para ver o preparo.`, r);
            });

            // Renderiza as parciais abaixo (faltando apenas 1 ingrediente obrigatório)
            quasePossiveis.forEach(r => {
                criarCardResposta(r.nome, "quase_possivel", `Falta apenas 1 ingrediente obrigatório (Falta: <strong>${r.falta}</strong>).`, r);
            });
        }

        mudarPasso("stepReiniciar");
    }, 800);
}

// Cria os elementos visuais interativos dentro do chat box
function criarCardResposta(nome, status, subtexto, dadosCompletos) {
    const chatBox = document.getElementById("chatBox");
    const card = document.createElement("div");
    card.className = "recipe-card";

    const tagClass = status === "possivel" ? "status-possivel" : "status-quase";
    const tagTexto = status === "possivel" ? "POSSÍVEL" : "QUASE LÁ";

    card.innerHTML = `
        <span class="status-tag ${tagClass}">${tagTexto}</span><br>
        <strong>${nome}</strong>
        <p style="font-size: 12.5px; color: #555; margin-top: 4px;">${subtexto}</p>
    `;

    card.onclick = () => abrirModal(dadosCompletos);

    chatBox.appendChild(card);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Controle do Modal de Modo de Preparo
function abrirModal(receita) {
    document.getElementById("modalTitle").innerText = receita.nome;

    const ulOb = document.getElementById("modalObrigatorios");
    ulOb.innerHTML = receita.obrigatorios.map(i => `<li>${i}</li>`).join("");

    const ulOp = document.getElementById("modalOpcionais");
    ulOp.innerHTML = receita.opcionais.length > 0
        ? receita.opcionais.map(i => `<li>${i}</li>`).join("")
        : "<li>Nenhum ingrediente opcional cadastrado para esta receita.</li>";

    // Formata quebras de linha para exibição amigável do preparo
    document.getElementById("modalPreparo").innerHTML = receita.preparo.replace(/\n/g, "<br>");
    document.getElementById("recipeModal").classList.add("active");
}

function fecharModal() {
    document.getElementById("recipeModal").classList.remove("active");
}

function mudarPasso(stepId) {
    document.querySelectorAll(".control-step").forEach(step => step.classList.remove("active"));
    document.getElementById(stepId).classList.add("active");
}

function reiniciarBot() {
    document.getElementById("chatBox").innerHTML = `
        <div class="message bot-message">
            Vamos começar de novo! Que tipo de receita você está procurando hoje?
        </div>
        <div id="stepTipo" class="control-step active">
            <button onclick="selecionarTipo('doce')"><iconify-icon
                icon="streamline-plump:cake-slice-solid"></iconify-icon>Doces</button>
            <button onclick="selecionarTipo('salgado')"><iconify-icon
                icon="streamline-plump:burger-solid"></iconify-icon>Salgadas</button>
            <button onclick="selecionarTipo('tanto_faz')"><iconify-icon
                icon="streamline-plump:chef-toque-hat-solid"></iconify-icon>Tanto Faz</button>
        </div>
    `;
    mudarPasso("stepTipo");
}