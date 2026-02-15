export async function newsRender(searchTerm, newsData) {

    const section = document.getElementById("search-results");

    
    if (!searchTerm) {
        section.innerHTML = "<p class='error'>Nenhum resultado foi encontrado. </br> </br> Você precisa digitar um termo, como: iaido, espada, katana, técnica, kata, exame, campeonato, data, ano.</p>";
        return;
    }

    searchTerm = searchTerm.toLowerCase();

    let results = "";
    let title = "";
    let image = "";
    let imageAlt = "";
    let imageTitle = "";
    let date = "";
    let text = "";
    let link = "";
    let tags = "";

    newsData = newsData.reverse()

    for (let news of newsData) {
        title = news.title.toLowerCase()
        image = news.image.toLowerCase()
        imageAlt = news.imageAlt.toLowerCase()
        imageTitle = news.imageTitle.toLowerCase()
        date = news.date.toLowerCase()
        text = news.text.toLowerCase()
        link = news.link.toLowerCase()
        tags = news.tags.toLowerCase()


        if (title.includes(searchTerm) || image.includes(searchTerm) || imageAlt.includes(searchTerm) || imageTitle.includes(searchTerm) || date.includes(searchTerm) || text.includes(searchTerm) || link.includes(searchTerm) || tags.includes(searchTerm)) {

            results += `
            <div class="item-result">
                <h2>${news.title}</h2>
                <img class="news-image" src="${news.image}" alt="${news.imageAlt}">
                <p id="img-title">${news.imageTitle}</p> 
                <p class="news-date">${news.date}</p> 
                <p class="news-text">${news.text}</p> 
                <p class="news-link">${news.link}</p> 
            </div>
            `;

        }

    }

    if (!results) {
        results = "<p>Nenhum resultado foi encontrado</p>";
    }

    section.innerHTML = results;
}


