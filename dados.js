function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    // Inicialmente, esconder a seção de resultados
    section.classList.remove('mostrar');
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do poeta ou título da obra.</p>";
        return;
    }

    let pesquisaNormalizada = normalizeString(campoPesquisa);
    let resultados = "";

    for (let dado of dados) {
        let poeta = normalizeString(dado.poeta);
        let descricao = normalizeString(dado.descricao);
        let obras = dado.obras.map(obra => normalizeString(obra.titulo)).join(' ');

        if (poeta.includes(pesquisaNormalizada) || descricao.includes(pesquisaNormalizada) || obras.includes(pesquisaNormalizada)) {
            resultados += `
            <div class="item-resultado">
                <h2><a href="${dado.wikipedia}" target="_blank">${dado.poeta}</a></h2>
                <p>${dado.descricao}</p>
                <ul>
                    ${dado.obras.map(obra => `
                        <li><a href="${obra.link}" target="_blank">${obra.titulo}</a></li>
                    `).join('')}
                </ul>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    section.innerHTML = resultados;
    // Mostrar a seção de resultados após a pesquisa
    section.classList.add('mostrar');
}
