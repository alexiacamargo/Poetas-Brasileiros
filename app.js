function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function pesquisar() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa");
    const pesquisaNormalizada = normalizeString(campoPesquisa.value.trim());

    section.classList.remove('mostrar');

    if (!pesquisaNormalizada) {
        section.innerHTML = '<p class="mensagem-inicial">Por favor, digite o nome do poeta ou título da obra.</p>';
        section.classList.add('mostrar');
        return;
    }

    let resultados = "";

    for (const dado of dados) {
        const poeta = normalizeString(dado.poeta);
        const descricao = normalizeString(dado.descricao);
        const obras = dado.obras.map(obra => normalizeString(obra.titulo)).join(' ');

        if (poeta.includes(pesquisaNormalizada) || descricao.includes(pesquisaNormalizada) || obras.includes(pesquisaNormalizada)) {
            resultados += `
                <div class="item-resultado">
                    <img src="${dado.imagem}" alt="Foto de ${dado.poeta}">
                    <div class="conteudo">
                        <h2><a href="${dado.wikipedia}" target="_blank" aria-label="Saiba mais sobre ${dado.poeta}">${dado.poeta}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <ul>
                            ${dado.obras.map(obra => `
                                <li><a href="${obra.link}" target="_blank" aria-label="Leia mais sobre ${obra.titulo}">${obra.titulo}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            `;
        }
    }

    section.innerHTML = resultados || '<p class="mensagem-inicial">Nenhum resultado encontrado. Tente outro termo.</p>';
    section.classList.add('mostrar');
    campoPesquisa.value = '';
}

function resetarPesquisa() {
    const section = document.getElementById("resultados-pesquisa");
    const campoPesquisa = document.getElementById("campo-pesquisa");
    section.innerHTML = '<p class="mensagem-inicial">Pesquise acima para descobrir poetas brasileiros e suas obras!</p>';
    section.classList.add('mostrar');
    campoPesquisa.value = '';
}

document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        pesquisar();
    }
});
