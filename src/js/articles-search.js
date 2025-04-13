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
    let author = "";
    let date = "";
    let text = "";
    let link = "";
    let tags = "";

    for (let article of articles) {
        title = article.title.toLowerCase()
        image = article.image.toLowerCase()
        imageAlt = article.imageAlt.toLowerCase()
        imageTitle = article.imageTitle.toLocaleLowerCase()
        author = article.author.toLowerCase()
        date = article.date.toLowerCase()
        text = article.text.toLowerCase()
        link = article.link.toLowerCase()
        tags = article.tags.toLowerCase()

        if (title.includes(searchField) || image.includes(searchField) || imageAlt.includes(searchField) || imageTitle.includes(searchField) || date.includes(searchField) || author.includes(searchField) || text.includes(searchField) || link.includes(searchField) || tags.includes(searchField)) {

            results += `
            <div class="item-result">
                <h2>${article.title}</h2>
                <p class="article-author">${article.author}</p> 
                <p class="article-date">${article.date}</p> 
                <img class="news-image" src="${article.image}" alt="${article.imageAlt}">
                <p id="img-title">${article.imageTitle}</p> 
                <p class="article-text">${article.text}</p> 
                <p class="article-link">${article.link}</p> 
            </div>
            `;

        }

    }

    if (!results) {
        results = "<p>Nenhum resultado foi encontrado</p>"
    }

    section.innerHTML = results;
}