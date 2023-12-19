
function openModal(title, description) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    modal.style.display = 'block';
    modalTitle.textContent = title;
    modalDescription.textContent = description;
  }

  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };















const filtroSelect = document.getElementById('filtro');
const cardContainer = document.querySelector('.card-container');

const lancamentos = [
    {
        titulo: 'Napoleon',
        genero: 'drama',
        descricao: 'Longa-metragem épico de drama histórico britânico-estadunidense dirigido e produzido por Ridley Scott e escrito por David Scarpa a ser lançado em 2023. Estrelado por Joaquin Phoenix como Napoleão Bonaparte, é baseado na história real de sua ascensão a liderança do povo francês, assim como seu relacionamento com a Imperatriz Josefina, interpretada por Vanessa Kirby. Sinopse: O filme retrata a ascensão de Napoleão ao poder através das lentes de seu relacionamento viciante e volátil com a Imperatriz Josefina.',
        img: 'imgs/a.jpg',
        faixaEtaria: '16+'

    },
    {
        titulo: 'Guardians of the Galaxy Vol. 3',
        genero: 'comedia',
        descricao: 'Guardians of the Galaxy Vol. 3 é um filme estadunidense de super-herói de 2023 baseado na equipe ficcional de mesmo nome, da Marvel Comics, produzido pela Marvel Studios e distribuído pela Walt Disney Studios Motion Pictures. É a sequência de Guardians of the Galaxy e Guardians of the Galaxy Vol. 2, e o trigésimo segundo filme do Universo Cinematográfico Marvel. O filme é escrito e dirigido por James Gunn e estrelado por Chris Pratt, Zoë Saldaña e Dave Bautista.',
        img: 'imgs/b.jpg',
        faixaEtaria: '14+'

    },
    {
        titulo: 'Five Nights at Freddys: O Pesadelo Sem Fim',
        genero: 'acao',
        descricao: 'Filme de terror estadunidense dirigido por Emma Tammi, que coescreveu o roteiro com Scott Cawthon e Seth Cuddeback. Produzido pela Blumhouse Productions e Striker Entertainment, é baseado na série de jogos eletrônicos de mesmo nome criada por Cawthon, que também serve como produtor com Jason Blum. Estrelado por Josh Hutcherson, Piper Rubio, Kat Conner Sterling, Elizabeth Lail, Mary Stuart Masterson e Matthew Lillard.',
        img: 'imgs/c.jpg',
        faixaEtaria: '14+'
    },
    {
        titulo: 'Pravednik',
        genero: 'drama',
        descricao: 'Filme de drama histórico-militar russo dirigido por Sergei Ursuliak. É estrelado por Alexander Yatsenko, Sergei Makovetsky, Mark Eidelstein, Lyubov Konstantinova, Yevgeny Tkachuk. O filme foi lançado em 15 de fevereiro de 2023 na cidade de São Petersburgo no cinema Lenfilm. Sua estreia mundial foi em 16 de fevereiro de 2023. Sinopse: O filme se passa em 1942, durante a Grande Guerra Patriótica.',
        img: 'imgs/d.jpg',
        faixaEtaria: '18+'
    },
    {
        titulo: 'Athena ',
        genero: 'acao',
        descricao: 'Longa-metragem francês épico de ação dramática lançado em 2022 dirigido por Romain Gavras, com roteiro de Gavras, Ladj Ly e Elias Belkeddar. O filme é estrelado por Dali Benssalah, Sami Slimane, Anthony Bajon, Ouassini Embarek e Alexis Manenti. Sua estreia ocorreu no 79º Festival Internacional de Cinema de Veneza em 9 de setembro de 2022, onde concorreu ao Leão de Ouro, foi lançado em 23 de setembro de 2022 pela Netflix.',
        img: 'imgs/e.jpg',
        faixaEtaria: '18+'
    },
    {
        titulo: 'Creed III',
        genero: 'acao',
        descricao: 'Longa-metragem dramático esportivo estadunidense lançado em 2023, estrelado e dirigido por Michael B. Jordan (em sua estréia na direção), a partir de um roteiro de Keenan Coogler e Zach Baylin, e baseado em um esboço de história escrita por Ryan Coogler. O filme é uma sequência de Creed (2015) e Creed II (2018) e o nono filme da franquia Rocky, contando no elenco com Tessa Thompson, Phylicia Rashad e Jonathan Majors.',
        img: 'imgs/f.jpg',
        faixaEtaria: '16+'
    },
    {
        titulo: 'Oppenheimer ',
        genero: 'drama',
        descricao: 'Longa-metragem biográfico estadunidense escrito e dirigido por Christopher Nolan. É baseado no livro American Prometheus, biografia de J. Robert Oppenheimer escrita por Kai Bird e Martin J. Sherwin. É uma co-produção entre Syncopy Inc. e Atlas Entertainment; Nolan produziu o filme ao lado de Emma Thomas e Charles Roven. Cillian Murphy estrela o filme como Oppenheimer, o pai da bomba atômica por seu papel no Projeto Manhattan.',
        img: 'imgs/g.jpg',
        faixaEtaria: '18+'

    },
    {
        titulo: 'Barbie',
        genero: 'comedia',
        descricao: 'Filme estadunidense dos gêneros comédia e fantasia dirigido por Greta Gerwig, com o roteiro co-escrito com Noah Baumbach. O filme é baseado na franquia de bonecas Barbie, produzida pela empresa multinacional Mattel, sendo o primeiro filme da franquia em formato de live-action depois de uma série de filmes em animação diretos para digital video disc e séries de televisão. Estrelado por Margot Robbie e Ryan Gosling como Barbie e Ken, respectivamente, o filme ainda apresenta um elenco diverso.',
        img: 'imgs/h.jpg',
        faixaEtaria: '10+'
    },
    {
        titulo: 'Avatar: O Caminho da Água',
        genero: 'drama',
        descricao: 'Filme americano de 2022, do gênero épico de ficção científica, co-escrito, co-editado, co-produzido e dirigido por James Cameron, e produzido pela 20th Century Studios, sendo a sequência do filme Avatar (2009) e o segundo filme da franquia de mesmo nome. O enredo segue a luta pela sobrevivência de Jake Sully e sua família durante o retorno da corporativa RDA ao planeta para elimina-lo, buscando outro abrigo nos oceanos de Pandora com o clã Metkayina.',
        img: 'imgs/i.jpg',
        faixaEtaria: '10+'

    },
    {
        titulo: 'Peter Pan & Wendy',
        genero: 'comedia',
        descricao: 'Filme americano de aventura e fantasia dirigido por David Lowery e escrito por Lowery e Toby Halbrooks, com Jim Whitaker e Joe Roth atuando como produtores. Produzido pela Walt Disney Pictures, o filme é uma adaptação live-action do filme de animação de 1953 da Disney, Peter Pan, baseado na peça Peter Pan, ou O Menino Que Não Queria Crescer, de JM Barrie. O filme é estrelado por Alexander Molony e Ever Anderson nos papéis principais.',
        img: 'imgs/j.jpg',
        faixaEtaria: '10+'

    },
    {
        titulo: 'Dungeons & Dragons: Honor Among Thieves',
        genero: 'comedia',
        descricao: 'Longa-metragem canadense-estadunidense de aventura e fantasia escrito e dirigido por Jonathan Goldstein e John Francis Daley, baseado no jogo de RPG de mesmo nome e na série de animação homônima. É estrelado por Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith, Sophia Lillis e Hugh Grant. A estreia do longa ocorreu na South by Southwest em 10 de março de 2023.',
        img: 'imgs/k.jpg',
        faixaEtaria: '10+'

    },
    {
        titulo: 'John Wick: Chapter 4',
        genero: 'acao',
        descricao: 'Filme de suspense, ação, neo-noir americano que é uma sequência direta de John Wick: Chapter 3 – Parabellum (2019), sendo o quarto filme da franquia John Wick. Dirigido por Chad Stahelski, com roteiro co-escrito por Shay Hatten e Michael Finch, e baseado em personagens criados por Derek Kolstad, é produzido por Stahelski, Basil Iwanyk e Erica Lee. Estrelando Keanu Reeves retornando como John Wick.',
        img: 'imgs/l.jpg',
        faixaEtaria: '18+'

    },
    {
        titulo: 'Spider-Man: Into the Spider-Verse',
        genero: 'comedia',
        descricao: 'filme de animação norte-americano de super-herói lançado em 2018 e estrelado pelo personagem Miles Morales da Marvel Comics. Ele foi produzido pela Columbia Pictures e Sony Pictures Animation em associação com a Marvel Entertainment. O filme foi distribuído pela Sony Pictures Releasing sendo o primeiro longa-metragem animado da franquia Homem-Aranha.',
        img: 'imgs/m.jpg',
        faixaEtaria: '10+'

    },
    {
        titulo: 'Matrix Resurrections ',
        genero: 'acao',
        descricao: 'Filme de ação e ficção científica norte-americano de 2021 da franquia Matrix, sendo o quarto filme da série. Esta sequência de Matrix Revolutions (2003) tem no elenco Keanu Reeves, Carrie-Anne Moss, Jada Pinkett Smith e Lambert Wilson retornando a seus papéis nos filmes anteriores da série. Produzido, coescrito e dirigido por Lana Wachowski, que codirigiu e coescreveu os filmes anteriores com sua irmã Lilly Wachowski.',
        img: 'imgs/n.jpg',
        faixaEtaria: '16+'

    },
    {
        titulo: 'Mission: Impossible – Dead Reckoning Part One',
        genero: 'acao',
        descricao: 'Filme estadunidense de ação e espionagem de 2023 escrito e dirigido por Christopher McQuarrie, e estrelado por Tom Cruise, que repete seu papel como Ethan Hunt. É o sétimo longa-metragem da série de filmes Mission: Impossible e o terceiro filme da série a ser dirigido por McQuarrie, após Rogue Nation e Fallout.',
        img: 'imgs/o.jpg',
        faixaEtaria: '16+'

    },
    {
        titulo: 'Wonka',
        genero: 'comedia',
        descricao: 'Filme de fantasia musical britano-americano dirigido por Paul King e escrito por Simon Farnaby e King. Ele serve como uma prequela do romance de 1964, Charlie and the Chocolate Factory de Roald Dahl. O filme está programado para ser lançado pela Warner Bros. em 15 de dezembro de 2023 nos Estados Unidos, é estrelado por Timothée Chalamet como Willy Wonka.',
        img: 'imgs/p.jpg',
        faixaEtaria: '14+'

    },
    {
        titulo: 'The Flash',
        genero: 'comedia',
        descricao: 'Filme de super-heróis americano baseado no personagem da DC Comics de mesmo nome. Produzido pela DC Films, The Disco Factory e Double Dream, distribuido pela Warner Bros. Pictures, ele é o décimo terceiro filme do Universo Estendido DC. O filme é dirigido por Andy Muschietti a partir de um roteiro de Christina Hodson, e estrelado por Ezra Miller como Barry Allen / Flash ao lado de Ben Affleck, Michael Keaton, Sasha Calle, Kiersey Clemons, Maribel Verdú e Ron Livingston.',
        img: 'imgs/q.jpg',
        faixaEtaria: '14+'

    },
    {
        titulo: 'Fast X',
        genero: 'acao',
        descricao: 'Filme de ação americano dirigido por Louis Leterrier e escrito por Justin Lin e Dan Mazeau. É a sequência de F9 (2021), servindo como o décimo primeiro longa-metragem da série The Fast and the Furious. O filme é estrelado por Vin Diesel, Michelle Rodriguez, Jason Statham, Tyrese Gibson, Chris Bridges, Jordana Brewster, Nathalie Emmanuel, Sung Kang, Michael Rooker, Charlize Theron, Jason Momoa, Daniela Melchior, Brie Larson e Alan Ritchson.',
        img: 'imgs/r.jpg',
        faixaEtaria: '16+'

    },
    {
        titulo: 'Big George Foreman',
        genero: 'drama',
        descricao: 'Filme biográfico americano de drama esportivo dirigido por George Tillman Jr. George Foreman, interpretado por Khris Davis . Também é estrelado por Jasmine Mathews, John Magaro, Sullivan Jones, Lawrence Gilliard Jr., Sonja Sohn e Forest Whitaker.',
        img: 'imgs/s.jpg',
        faixaEtaria: '18+'

    },
    {
        titulo: 'A Man Called Otto',
        genero: 'drama',
        descricao: 'filme americano de comédia dramática dirigido por Marc Forster a partir de um roteiro de David Magee. É a segunda adaptação cinematográfica do romance A Man Called Ove, de Fredrik Backman, após o filme sueco de 2015, A Man Called Ove, dirigido por Hannes Holm. O filme será estrelado por Tom Hanks no papel-título, com Mariana Treviño, Rachel Keller, Manuel Garcia-Rulfo, Cameron Britton e Mike Birbiglia coestrelando.',
        img: 'imgs/t.jpg',
        faixaEtaria: '14+'

    },
    {
        titulo: 'Aquaman and the Lost Kingdom',
        genero: 'acao',
        descricao: 'Próximo filme de super-herói americano baseado no personagem Aquaman da DC Comics. Produzido pela DC Films, The Safran Company e Atomic Monster Productions, e distribuído pela Warner Bros. Pictures, pretende ser a sequência de Aquaman (2018) e o décimo quinto filme do Universo Estendido DC (DCEU). O filme é dirigido por James Wan a partir de um roteiro escrito por David Leslie Johnson-McGoldrick.',
        img: 'imgs/u.jpg',
        faixaEtaria: '14+'

    },
    {
        titulo: 'Blue Beetle',
        genero: 'comedia',
        descricao: 'Filme de super-herói americano baseado no personagem da DC Comics Jaime Reyes / Besouro Azul. Produzido pela DC Films e distribuído pela Warner Bros. Pictures, o filme faz parte do Universo Estendido DC (DCEU). É dirigido por Angel Manuel Soto, a partir de um roteiro de Gareth Dunnet-Alcocer, e estrelado por Xolo Maridueña como Jaime Reyes ao lado de Adriana Barraza, Damián Alcázar, Raoul Trujillo, Susan Sarandon e George Lopez.',
        img: 'imgs/v.jpg',
        faixaEtaria: '10+'

    },
    {
        titulo: 'Os Fabelmans',
        genero: 'drama',
        descricao: 'Longa-metragem estadunidense dramático semi-autobiográfico dirigido por Steven Spielberg a partir de um roteiro que ele coescreveu com Tony Kushner. É estrelado por Michelle Williams, Paul Dano, Seth Rogen e Gabriel LaBelle, o último dos quais interpreta o papel principal de Sammy Fabelman, um jovem aspirante a cineasta baseado no próprio Spielberg. O resto do elenco inclui Jeannie Berlin, Julia Butters, Robin Bartlett, Keely Karsten e Judd Hirsch.',
        img: 'imgs/w.jpg',
        faixaEtaria: '18+'

    },
    {
        titulo: 'Tár',
        genero: 'drama',
        descricao: 'Filme de drama psicológico de 2022, escrito e dirigido por Todd Field e estrelado por Cate Blanchett como uma renomada maestrina e compositora de música erudita chamada Lydia Tár. O elenco também inclui Noémie Merlant, Nina Hoss, Sophie Kauer, Julian Glover, Allan Corduner e Mark Strong. A trama gira em torno do cancelamento da personagem título após o surgimento de acusações de supostos abusos sexuais e morais. Tár estreou no 79º Festival Internacional de Cinema de Veneza, em 1º de setembro de 2022.',
        img: 'imgs/x.jpg',
        faixaEtaria: '16+'

    },
];

function atualizarCards(filtro) {
    cardContainer.innerHTML = '';

    if (filtro === 'todos') {
        lancamentos.forEach((filme) => {
            criarCard(filme.titulo, filme.descricao, filme.img);
        });
    } else {
        const lancamentosFiltrados = lancamentos.filter((filme) => filme.genero === filtro);
        lancamentosFiltrados.forEach((filme) => {
            criarCard(filme.titulo, filme.descricao, filme.img);
        });
    }
}

function criarCard(titulo, descricao, img) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="layer">
            <button onclick="openModal('${titulo}', '${descricao}')">
                <img src="${img}" alt="${titulo}">
            </button>
        </div>
    `;
    cardContainer.appendChild(card);
}


function filtrarLancamentos() {
    const filtroSelecionado = filtroSelect.value;
    atualizarCards(filtroSelecionado);
}




window.onload = () => {
    atualizarCards('todos');
};














function filtrarPorFaixaEtaria() {
    const faixaEtariaSelect = document.getElementById('faixa-etaria');
    const filtroFaixaEtaria = faixaEtariaSelect.value;

    const generoSelect = document.getElementById('filtro');
    const filtroGenero = generoSelect.value;

    if (filtroFaixaEtaria === 'todos') {
        if (filtroGenero === 'todos') {
            atualizarCards('todos');
        } else {
            atualizarCards(filtroGenero);
        }
    } else {
        const filmesFiltrados = lancamentos.filter(filme => filme.faixaEtaria === filtroFaixaEtaria);

        if (filtroGenero !== 'todos') {
            const filmesFiltradosPorGenero = filmesFiltrados.filter(filme => filme.genero === filtroGenero);
            cardContainer.innerHTML = '';

            filmesFiltradosPorGenero.forEach(filme => {
                criarCard(filme.titulo, filme.descricao, filme.img);
            });
        } else {
            cardContainer.innerHTML = '';

            filmesFiltrados.forEach(filme => {
                criarCard(filme.titulo, filme.descricao, filme.img);
            });
        }
    }
}












function createCountdown(title, releaseDate) {
    const countdownTimers = document.getElementById('countdown-timers');

    const timer = document.createElement('div');
    timer.className = 'countdown-timer';

    const titleElement = document.createElement('h3');
    titleElement.innerText = title;

    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown-clock';

    timer.appendChild(titleElement);
    timer.appendChild(countdownElement);
    countdownTimers.appendChild(timer);

    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = new Date(releaseDate) - now;

        if (timeRemaining <= 0) {
            countdownElement.innerHTML = '<p>Lançado!</p>';
            clearInterval(countdownInterval);
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `<p>${days}d ${hours}:${minutes}:${seconds}</p>`;
        }
    }, 1000);
}

const filmesAltamenteAntecipados = [
    { title: 'Napoleon', releaseDate: new Date('2023-11-20') },
    { title: 'Dune 2', releaseDate: new Date('2023-11-03') },
    { title: 'Wonka', releaseDate: new Date('2023-12-14') },
];

filmesAltamenteAntecipados.forEach(filme => {
    createCountdown(filme.title, filme.releaseDate);
});
