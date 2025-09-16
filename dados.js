let dados = [
    {
        poeta: "Manuel Bandeira",
        descricao: "Manuel Bandeira foi um dos poetas mais importantes do modernismo brasileiro. Suas obras são conhecidas por sua sensibilidade e profunda introspecção.",
        obras: [
            { titulo: "A Arena", link: "https://pt.wikipedia.org/wiki/A_Arena" },
            { titulo: "Estrela da Manhã", link: "https://pt.wikipedia.org/wiki/Estrela_da_Manhã" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Manuel_Bandeira",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Carlos_Drummond_de_Andrade_e_Manuel_Bandeira_%28cropped%29.tif/lossy-page1-250px-Carlos_Drummond_de_Andrade_e_Manuel_Bandeira_%28cropped%29.tif.jpg"
    },
    {
        poeta: "Carlos Drummond de Andrade",
        descricao: "Carlos Drummond de Andrade é amplamente reconhecido como um dos maiores poetas brasileiros. Seu trabalho é conhecido por seu lirismo e crítica social.",
        obras: [
            { titulo: "Alguma Poesia", link: "https://pt.wikipedia.org/wiki/Alguma_Poesia" },
            { titulo: "Sentimento do Mundo", link: "https://pt.wikipedia.org/wiki/Sentimento_do_Mundo" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Carlos_Drummond_de_Andrade",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Carlos_Drummond_de_Andrade%2C_1970.tif/lossy-page1-922px-Carlos_Drummond_de_Andrade%2C_1970.tif.jpg"
    },
    {
        poeta: "Adélia Prado",
        descricao: "Adélia Prado é uma poetisa brasileira cuja obra é marcada pela simplicidade e profundidade. Seus poemas refletem a vida cotidiana e a espiritualidade.",
        obras: [
            { titulo: "Bagagem", link: "https://pt.wikipedia.org/wiki/Bagagem_(livro)" },
            { titulo: "O Coração Disparado", link: "https://pt.wikipedia.org/wiki/O_Coração_Disparado" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Adélia_Prado",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/8/84/Adelia_prado_2014_flickr.jpg"
    },
    {
        poeta: "Cecília Meireles",
        descricao: "Cecília Meireles foi uma renomada poetisa brasileira, cuja obra é conhecida por sua inovação formal e temática.",
        obras: [
            { titulo: "Romanceiro da Inconfidência", link: "https://pt.wikipedia.org/wiki/Romanceiro_da_Inconfidência" },
            { titulo: "Poemas Conjuntos", link: "https://pt.wikipedia.org/wiki/Poemas_Conjuntos" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Cecília_Meireles",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Cec%C3%ADlia-Meireles.jpg/250px-Cec%C3%ADlia-Meireles.jpg"
    },
    {
        poeta: "Vinícius de Moraes",
        descricao: "Vinícius de Moraes foi um influente poeta e compositor brasileiro, conhecido por suas letras de bossa nova e sua contribuição para a música popular.",
        obras: [
            { titulo: "Antologia Poética", link: "https://pt.wikipedia.org/wiki/Antologia_Poética" },
            { titulo: "Soneto de Separação", link: "https://pt.wikipedia.org/wiki/Soneto_de_Separação" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Vinícius_de_Moraes",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9sIJENXMdXxjhNdLaIjL24K-E31uQxh346w&s"
    },
    {
        poeta: "Mário Quintana",
        descricao: "Mário Quintana foi um poeta brasileiro conhecido por sua simplicidade e ironia. Seus poemas são apreciados por seu estilo acessível e profundidade emocional.",
        obras: [
            { titulo: "A Rua dos Cataventos", link: "https://pt.wikipedia.org/wiki/A_Rua_dos_Cataventos" },
            { titulo: "O Melhor de Mário Quintana", link: "https://pt.wikipedia.org/wiki/O_Melhor_de_Mário_Quintana" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Mário_Quintana",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm8dbJ-lmWlFJR5cz89PlAax6PvlugW9Udfg&s"
    },
    {
        poeta: "Castro Alves",
        descricao: "Castro Alves foi um importante poeta brasileiro do século XIX, conhecido por seus poemas abolicionistas e por seu talento literário.",
        obras: [
            { titulo: "O Navio Negreiro", link: "https://pt.wikipedia.org/wiki/O_Navio_Negreiro" },
            { titulo: "Espumas Flutuantes", link: "https://pt.wikipedia.org/wiki/Espumas_Flutuantes" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Castro_Alves",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/CastroAlves.jpg/200px-CastroAlves.jpg"
    },
    {
        poeta: "Machado de Assis",
        descricao: "Machado de Assis foi um dos maiores escritores brasileiros, conhecido por sua obra em prosa, mas também contribuiu significativamente para a poesia brasileira.",
        obras: [
            { titulo: "Memórias Póstumas de Brás Cubas", link: "https://pt.wikipedia.org/wiki/Memórias_Póstumas_de_Brás_Cubas" },
            { titulo: "Dom Casmurro", link: "https://pt.wikipedia.org/wiki/Dom_Casmurro" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Machado_de_Assis",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/4/40/Machado_de_Assis_aos_57_anos.jpg"
    },
    {
        poeta: "Cora Coralina",
        descricao: "Cora Coralina foi uma poetisa e contista brasileira, conhecida por sua visão lírica e a riqueza de sua obra, que retrata a vida simples do interior.",
        obras: [
            { titulo: "Poemas dos Becos de Goiás", link: "https://pt.wikipedia.org/wiki/Poemas_dos_Becos_de_Goiás" },
            { titulo: "Viva a Festa", link: "https://pt.wikipedia.org/wiki/Viva_a_Festa" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Cora_Coralina",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/db/Cora_Coralina.jpg"
    },
    {
        poeta: "Hilda Hilst",
        descricao: "Hilda Hilst foi uma das poetas mais inovadoras da literatura brasileira, conhecida por sua escrita ousada e temas desafiadores.",
        obras: [
            { titulo: "A Obscena Senhora D", link: "https://pt.wikipedia.org/wiki/A_Obscena_Senhora_D" },
            { titulo: "O Caderno Rosa de Laura", link: "https://pt.wikipedia.org/wiki/O_Caderno_Rosa_de_Laura" }
        ],
        wikipedia: "https://pt.wikipedia.org/wiki/Hilda_Hilst",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hilda_Hilst%2C_1970_%28cropped%29.tif/lossy-page1-829px-Hilda_Hilst%2C_1970_%28cropped%29.tif.jpg"
    }
];
