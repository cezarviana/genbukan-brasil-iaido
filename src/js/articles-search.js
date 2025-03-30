function articlesSearch() {
    let section = document.getElementById("search-results");

    let searchField = document.getElementById("search-field").value;

    if (searchField == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar um termo, como: iaido, espada, katana, técnica, kata.</p>"
        return
    }

    searchField = searchField.toLowerCase()

    let results = "";
    let title = "";
    let image = "";
    let imageAlt = "";
    let imageTitle = "";
    let date = "";
    let text = "";
    let link = "";
    let tags = "";

    articles = articles.reverse()

    for (let article of articles) {
        title = article.title.toLowerCase()
        image = article.image.toLowerCase()
        imageAlt = article.imageAlt.toLowerCase()
        imageTitle = article.imageTitle.toLocaleLowerCase()
        date = article.date.toLowerCase()
        text = article.text.toLowerCase()
        link = article.link.toLowerCase()
        tags = article.tags.toLowerCase()

        if (title.includes(searchField) || image.includes(searchField) || imageAlt.includes(searchField) || imageTitle.includes(searchField) || date.includes(searchField) || text.includes(searchField) || link.includes(searchField) || tags.includes(searchField)) {

            results += `
            <div class="item-result">
                <img class="news-image" src="${article.image}" alt="${article.imageAlt}">
                <p id="img-title">${article.imageTitle}</p> 
                <h2>${article.title}</h2>
                <p class="news-date">${article.date}</p> 
                <p class="news-text">${article.text}</p> 
                <p class="news-link">${article.link}</p> 
            </div>
            `;

        }

    }

    if (!results) {
        results = "<p>Nenhum resultado foi encontrado</p>"
    }

    section.innerHTML = results;
}