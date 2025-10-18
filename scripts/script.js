    // =======================================================
    // 1 - Dados fixos(Objetos de filmes e series)
    // - Nossa fonte de dados ("como um mini-banco de dados" local)
    // =======================================================
    const dados = {
    filmes: [
        { titulo: "É Assim Que Acaba", imagem: "../assets/imgs/eassimqueacaba.webp", genero: ["Drama", "Romance"] },
        { titulo: "Bad Boys: Para Sempre", imagem: "../assets/imgs/badboys.webp", genero: ["Ação", "Comédia"] },
        { titulo: "Um Lugar Silencioso: Dia Um", imagem: "../assets/imgs/umlugarsilencioso.webp", genero: ["Ficção", "Terror", "Mistério"] },
        { titulo: "Venom", imagem: "../assets/imgs/venom.webp", genero: ["Ação", "Ficção"] },
        { titulo: "Deadpool & Wolverine", imagem: "../assets/imgs/deadpoolewolverine.webp", genero: ["Ação", "Comédia", "Ficção"] },
        { titulo: "Divertida Mente 2", imagem: "../assets/imgs/divertidamente.webp", genero: ["Ficção", "Animação", "Aventura", "Comédia"] },
    ],
    series: [
        { titulo: "Guerra dos Tronos", imagem: "../assets/imgs/gameofthrones.webp", genero: ["Ficção", "Aventura", "Ação", "Fantasia"] },
        { titulo: "Sobrenatural", imagem: "../assets/imgs/sobrenatural.webp", genero: ["Ficção", "Terror", "Mistério", "Drama", "Thriller"] },
        { titulo: "Grey's Anatomy", imagem: "../assets/imgs/greysanatomy.webp", genero: ["Drama", "Romance"] },
        { titulo: "Prison Break", imagem: "../assets/imgs/prisonbreak.webp", genero: ["Ação", "Drama", "Mistério", "Crime"] },
        { titulo: "O Senhor dos Anéis: Os Anéis de Poder", imagem: "../assets/imgs/osenhordosaneis.webp", genero: ["Ficção", "Aventura", "Sci-Fi & Fantasy"] },
        { titulo: "O Segredo do Rio", imagem: "../assets/imgs/osegredodorio.webp", genero: ["Drama", "Mistério"] },
    ]
    };


    //===========================================================
    // 2. SELETORES DO DOM (Capturando Elementos do HTML)
    //  -  Referencias para elementos HTML que o JS precisa manipular
    //============================================================

    // Captura todos os cards de filmes (elementos <a> dentro de #filmes-container)
    const filmesCards = document.querySelectorAll("#filmes-container a");

    // Captura todos os cards de series (elementos <a> dentro de #series-container)
    const seriesCards = document.querySelectorAll("#series-container a");

    // Captura o elemento <select> para filtro de genero
    const selectGenero = document.getElementById("genero");

    // Captura o botão "Limpar filtro"
    const btnLimpar = document.getElementById("limpar-filtro");

    // Captura o campo de texto para pesquisa
    const inputPesquisar = document.getElementById("pesquisar");

    //Seletores do Menu Mobile
    const btnMenu = document.getElementById("menu-btn");
    const menuMobile = document.getElementById("menu-mobile");

    // =========================================================
    // 3. FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO E FILTRAGEM (REUTILIZÁVEL)
    // -  Esta função define a visibilidade e a imagem de fundo de cada card.
    // -  Foi definida de forma global para ser usada em vários pontos do código.
    // =========================================================

    function renderizar(cards, lista, filtro = "todos"){
        cards.forEach((card, index) => {
            const item = lista[index];
            const generos = item && item.genero;

            const correspondeFiltro = filtro === "todos" || (generos && generos.includes(filtro))

            if (item && correspondeFiltro) {
                card.style.display = "block";
                card.style.backgroundImage = `url(${item.imagem})`
                card.style.backgroundSiza = "cover";
                card.style.backgroundPosition = "center";
            } else {
                card.style.display = "none";
            }
        });
        console.log(`Renderização concluída para o filtro: ${filtro}`)
    };

    // =========================================================
    // 4. FUNÇÃO que chama a renderização para filmes e series
    // -  centraliza a chamada para evitar repetição de codigo
    // =========================================================
    function aplicarFiltro(generoSelecionado) {
        renderizar(filmesCards, dados.filmes, generoSelecionado);
        renderizar(seriesCards, dados.series, generoSelecionado);
    }

    // =========================================================
    // 5. Eventos do DOM (Ações que ocorrem após o carregamento da página)
    // -  Este bloco garante que só manipularemos os elementos depois que eles existirem
    // =========================================================

    document.addEventListener("DOMContentLoaded", function() {
        if (selectGenero) {
            selectGenero.addEventListener("change", function (){
                const generoSelecionado = this.value === "" ? "todos" : this.value;
                aplicarFiltro(generoSelecionado)
            }) 
        }
        // Ação: Quando o usuário clica em "Limpar filtro"
    }) 
