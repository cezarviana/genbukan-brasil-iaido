import { newsRender } from './news-render.js';
import { articlesRender } from './articles-render.js';


const btnSearch = document.getElementById("btn-search");
const searchField = document.getElementById("search-field");
// const sectionResults = document.getElementById("search-results");

async function inputSearch() {
    
    const searchTerm = searchField.value;
    let articleModule = null;
    let newsModule = null;

    try {
        articleModule = await articlesRender(searchTerm);
    } catch (error) {
        console.error('Erro ao buscar dados (articles):', error);
    }
    try {
        newsModule = await newsRender(searchTerm);
    } catch (error) {
        console.error('Erro ao buscar dados (news):', error);
    }
    
    renderModules(articleModule, newsModule);
};

btnSearch.addEventListener('click', inputSearch);
