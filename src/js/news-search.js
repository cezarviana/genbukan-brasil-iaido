function newsSearch() {
    let section = document.getElementById("search-results");

    let searchField = document.getElementById("search-field").value;

    if (searchField == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar um termo, como: iaido, exame, campeonato, data, ano.</p>"
        return
    }

    searchField = searchField.toLowerCase()

    let results = "";
    let number = "";
    let title = "";
    let image = "";
    let imageAlt = "";
    let imageTitle = "";
    let date = "";
    let text = "";
    let link = "";
    let tags = "";

    newsS = newsS.reverse()

    for (let news of newsS) {
        number = news.number.toLowerCase()
        title = news.title.toLowerCase()
        image = news.image.toLowerCase()
        imageAlt = news.imageAlt.toLowerCase()
        imageTitle = news.imageTitle.toLocaleLowerCase()
        date = news.date.toLowerCase()
        text = news.text.toLowerCase()
        link = news.link.toLowerCase()
        tags = news.tags.toLowerCase()

        if (number.includes(searchField) || title.includes(searchField) || image.includes(searchField) || imageAlt.includes(searchField) || imageTitle.includes(searchField) || date.includes(searchField) || text.includes(searchField) || link.includes(searchField) || tags.includes(searchField)) {

            results += `
            <div class="item-result">
                <img class="news-image" src="${news.image}" alt="${news.imageAlt}">
                <p id="img-title">${news.imageTitle}</p> 
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

// function latestNews() {
//     let section = document.getElementById("latest-news");
//     // 1- pegar as 3 ultimas

//     let size = newsS.length

//     fetch("new.js"){
//         .then(response => response.js())
//             .then(data => {
//                 const last3 = data.slice(-3);

//                 let html = "";
//                 last3.forEach(item => {
//                     html +=
//                         ` 
//                             <div class="item-result">
//                             <img class="news-image" src="${news.image}" alt="${news.imageAlt}">
//                             <p class="img-title">${news.imageTitle}</p> 
//                             <h2>${news.title}</h2>
//                             <p class="news-date">${news.date}</p> 
//                             <p class="news-text">${news.text}</p> 
//                             <p class="news-link">${news.link}</p> 
//                             </div>
//                         `
//                 });

//                 document.getElementById('latest-news    ').innerHTML = html;
//             });

//     }
//     // 2- diposnibilizadas no site

// }