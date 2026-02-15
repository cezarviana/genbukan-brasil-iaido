import { newsRender } from './news-render.js';
import { articlesRender } from './articles-render.js';


const btnSearch = document.getElementById("btn-search");
const searchField = document.getElementById("search-field");

async function inputSearch() {
    
    const searchTerm = searchField.value;
    

    const currentPage = window.location.pathname.toLowerCase();
    const isArticlesPage = currentPage.includes('article');
    const isNewsPage = currentPage.includes('news') && !currentPage.includes('article');


    if (isArticlesPage) {
        try {
            const articlesResponse = await fetch('../src/data/articles.json');
            const articlesJSON = await articlesResponse.json();
            const articlesData = articlesJSON.articles;
    
            await articlesRender(searchTerm, articlesData);
    
        } catch (error) {
            console.error('Erro ao buscar dados (articles):', error);
        }
    } 

    else if (isNewsPage) {
        try {
            const newsResponse = await fetch('../src/data/news.json');
            const newsJSON = await newsResponse.json();
            const newsData = newsJSON.news
    
            await newsRender(searchTerm, newsData);      
    
        } catch (error) {
            console.error('Erro ao buscar dados (news):', error);
        }
    }
    
};

btnSearch.addEventListener('click', inputSearch);


searchField.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        inputSearch();
    }
});