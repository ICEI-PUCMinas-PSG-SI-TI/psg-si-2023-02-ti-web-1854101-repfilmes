var navLinks = document.getElementById("navLinks")
function showMenu(){
    navLinks.style.left = "0";
}
function hideMenu(){
    navLinks.style.left = "-200px";
}





const apiKey = '8f1a4551f72287a06dfc7e64b9a19d14';
const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`;
const newsList = document.getElementById('news-list');
async function fetchCinemaNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const cinemaNews = data.results.slice(0, 6);
        cinemaNews.forEach(movie => {
            const truncatedTitle = truncateText(movie.title, 23);
            const newsItem = document.createElement('li');
            newsItem.classList.add('news-article');
            const newsLink = document.createElement('a');
            newsLink.href = `https://www.themoviedb.org/movie/${movie.id}`; 
            newsLink.target = '_blank';
            newsLink.textContent = truncatedTitle;
            const newsDescription = document.createElement('p');
            newsDescription.textContent = movie.overview;
            newsItem.appendChild(newsLink);
            newsItem.appendChild(newsDescription);
            newsList.appendChild(newsItem);
        });
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    } else {
        return text;
    }
}
fetchCinemaNews();












document.addEventListener("DOMContentLoaded", function() {
    const faqData = [
        { question: "Como faço para assistir a um filme?", answer: "Você pode clicar no título do filme desejado e, em seguida, pressionar o botão 'Assistir'." },
        { question: "Os filmes são gratuitos?", answer: "Sim, todos os filmes em nosso repositório são gratuitos para assistir." },
        { question: "Como posso relatar um problema com um filme?", answer: "Se você encontrar algum problema com um filme, por favor, use o formulário de suporte abaixo para nos informar." }
    ];
    const faqList = document.getElementById("faq-list");
    faqData.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.question}</strong><br>${item.answer}`;
        faqList.appendChild(listItem);
    });
    const supportForm = document.getElementById("support-form");
    const ticketList = document.getElementById("ticket-list");
    supportForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const issueDescription = document.getElementById("issue").value;
        if (issueDescription) {
            const ticketItem = document.createElement("li");
            ticketItem.classList.add("ticket");
            ticketItem.textContent = issueDescription;
            ticketList.appendChild(ticketItem);
            supportForm.reset();
        }
    });
});









document.addEventListener("DOMContentLoaded", function() {
    const moviesData = {
        "Ação": 2000,
        "Comédia": 2200,
        "Drama": 1000,
        "Ficção Científica": 1300,
        "Animação": 1800
    };
    const genres = Object.keys(moviesData);
    const views = Object.values(moviesData);
    const ctx = document.getElementById("movies-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: genres,
            datasets: [{
                label: "Visualizações",
                data: views,
                backgroundColor: "rgba(245, 193, 32, 1)",
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'black'
                    }
                }
            }
        }
    });
});












function openModal(modalId) {
    var modal = document.getElementById(modalId + "-modal");
    modal.style.display = "block";
}
function closeModal(modalId) {
    var modal = document.getElementById(modalId + "-modal");
    modal.style.display = "none";
}
window.onclick = function(event) {
    var modais = document.getElementsByClassName('modal');
    for (var i = 0; i < modais.length; i++) {
        if (event.target == modais[i]) {
            modais[i].style.display = "none";
        }
    }
}













document.addEventListener("DOMContentLoaded", function() {
    const claimBadgeButton = document.getElementById("claim-badge-button");
    claimBadgeButton.addEventListener("click", function() {
        alert("Parabéns! Você reivindicou o distintivo 'Crítico Amador'.");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const claimBadgeButton = document.getElementById("claim-badge-button2");
    claimBadgeButton.addEventListener("click", function() {
        alert("Parabéns! Você reivindicou o distintivo 'Cinéfilo'.");
    });
});















