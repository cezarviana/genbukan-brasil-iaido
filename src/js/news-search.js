function newsSearch() {
    let section = document.getElementById("search-results");

    let searchField = document.getElementById("search-field").value;

    if (searchField == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar um termo, data, ano.</p>"
        return
    }

    searchField = searchField.toLowerCase()

    let results = "";
    let number = "";
    let title = "";
    let image = "";
    let imageAlt = "";
    let date = "";
    let text = "";
    let link = "";
    let tags = "";

    for (let news of newsS) {
        number = news.number.toLowerCase()
        title = news.title.toLowerCase()
        image = news.image.toLowerCase()
        imageAlt = news.imageAlt.toLowerCase()
        date = news.date.toLowerCase()
        text = news.text.toLowerCase()
        link = news.link.toLowerCase()
        tags = news.tags.toLowerCase()

        if (number.includes(searchField) || title.includes(searchField) || image.includes(searchField) || imageAlt.includes(searchField) || date.includes(searchField) || text.includes(searchField) || link.includes(searchField) || tags.includes(searchField)) {

            results += `
            <div class="item-result">
                <img class="news-image" src="${news.image}" alt="${news.imageAlt}">
                <h2>${news.title}</h2>
                <p class="news-date">${news.date}</p> 
                <p class="news-text">${news.text}</p> 
                <p class="news-link">${news.link}</p> 
            </div>
            `;

        }

    }

    if (!results) {
        results = "<p>Nenhum resultado foi encontrado</p>"
    }

    section.innerHTML = results;

}

function latestNews() {
    let section = document.getElementById("latest-news");

    fetch('.../src/js/news.js')
        .then(response => response.js())
        .then(data => {
            // Pega os 5 últimos itens
            const last5 = data.slice(-5);

            // Cria o HTML para apresentar os itens
            let html = '.../news/news.html';
            last5.forEach(item => {
                html += `
                <div class="item-result">
                    <p>aaaa</p>
                    <img class="news-image" src="${news.image}" alt="${news.imageAlt}">
                    <h2>${news.title}</h2>
                    <p class="news-date">${news.date}</p> 
                    <p class="news-text">${news.text}</p> 
                    <p class="news-link">${news.link}</p> 
                </div>
        `;
            });

            // Insere o HTML na página
            document.getElementById('latest-news').innerHTML = html;
        });
}