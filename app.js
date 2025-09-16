function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

let debounceTimeout;

function pesquisar() {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        let section = document.getElementById("resultados-pesquisa");
        let campoPesquisa = document.getElementById("campo-pesquisa");
        let loading = document.getElementById("loading");

        // Mostrar loading
        section.classList.remove('mostrar');
        loading.style.display = 'block';

        let pesquisaNormalizada = normalizeString(campoPesquisa.value.trim());

        setTimeout(() => {
            if (!pesquisaNormalizada) {
                section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome do poeta ou título da obra.</p>";
                loading.style.display = 'none';
                section.classList.add('mostrar');
                return;
            }

            let resultados = "";

            for (let dado of dados) {
                let poeta = normalizeString(dado.poeta);
                let descricao = normalizeString(dado.descricao);
                let obras = dado.obras.map(obra => normalizeString(obra.titulo)).join(' ');

                if (poeta.includes(pesquisaNormalizada) || descricao.includes(pesquisaNormalizada) || obras.includes(pesquisaNormalizada)) {
                    resultados += `
                    <div class="item-resultado">
                        <h2><a href="${dado.wikipedia}" target="_blank">${dado.poeta}</a></h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <ul>
                            ${dado.obras.map(obra => `
                                <li><a href="${obra.link}" target="_blank">${obra.titulo}</a></li>
                            `).join('')}
                        </ul>
                    </div>
                    `;
                }
            }

            section.innerHTML = resultados || "<p>Nada foi encontrado.</p>";
            loading.style.display = 'none';
            section.classList.add('mostrar');
            campoPesquisa.value = '';
        }, 500);
    }, 300);
}

function limparPesquisa() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa");
    campoPesquisa.value = '';
    section.innerHTML = '';
    section.classList.remove('mostrar');
}

document.getElementById("campo-pesquisa").addEventListener("input", pesquisar);
document.getElementById("campo-pesquisa").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        pesquisar();
    }
});
