// 1. searchField entry
function newsSearch() {
    let section = document.getElementById("search-results");

    let searchField = document.getElementById("search-field").value;

    if (searchField == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Você precisa digitar um termo, como: iaido, exame, campeonato, data, ano.</p>"
        return
    }

// 2. searchField to lowerCase (because search is case sensitive)
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


// 3. Reverse news position (newest news first)
    newsS = newsS.reverse()

// 4. newsS to lowerCase (because search is case sensitive)
    for (let news of newsS) {
        title = news.title.toLowerCase()
        image = news.image.toLowerCase()
        imageAlt = news.imageAlt.toLowerCase()
        imageTitle = news.imageTitle.toLocaleLowerCase()
        date = news.date.toLowerCase()
        text = news.text.toLowerCase()
        link = news.link.toLowerCase()
        tags = news.tags.toLowerCase()

// 5. Search comparing searchField with news atribute

        if (title.includes(searchField) || image.includes(searchField) || imageAlt.includes(searchField) || imageTitle.includes(searchField) || date.includes(searchField) || text.includes(searchField) || link.includes(searchField) || tags.includes(searchField)) {

// 6. Display search's result 

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

// 7. if search do not find result

    if (!results) {
        results = "<p>Nenhum resultado foi encontrado</p>"
    }

    section.innerHTML = results;
}


// CARROSSEL
// fetch('../new.js')
// .then(response => response.text())
// .then(data => {
//     const last3 = data.slice(-3);
//     let html = "";
//     last3.forEach(item => {
//         html +=
//             `
//                 <div class="item-result">
//                 <img class="news-image" src="${news.image}" alt="${news.imageAlt}">
//                 <p class="img-title">${news.imageTitle}</p>
//                 <h2>${news.title}</h2>
//                 <p class="news-date">${news.date}</p>
//                 <p class="news-text">${news.text}</p>
//                 <p class="news-link">${news.link}</p>
//                 </div>
//             `
//     });
//     document.getElementById('carrossel').innerHTML = html;
// });