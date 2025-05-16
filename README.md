# ⚡ Genbukan Brasil

## 📝 Descrição do Projeto
É um site que representa, no Brasil, uma escola de Iaido (esgrima tradicional japonesa) que tem suas origens no séc. XIV do Japão. O site tem como objetivo ser referência no meio da arte marcial Iaido, com a disponibilização de pesquisas sobre notícias e artigos, além de links para diversos outros meios de comunicação de artes marciais.

Acesse o site aqui: [Gebukan Brasil](https://genbukan-brasil.vercel.app/index.html)

## 🔎 Funcionalidades
- Responsivo para todos os dispositivos
- Menu hamburguer para versões mobile
- Links para redes sociais: 
- - Permitindo o usuário entrar em contato direto com os orientadores.
- - Outros sites de artes marciais.
- - Para lojas indicadas para a compra do material para a prática da arte marcial.
- Função `pesquisar()` para notícias em `app.js`:
- - Filtro por `termos`
- - Filtro por `datas`
- - Lista de `resultados-pesquisa`exibida em seção
- Função `pesquisar()` para artigos em `app.js`:
- - Filtro por `termos`
- - Filtro por `autores`
- - Lista de `resultados-pesquisa`exibida em seção
- Iterar sobre o array de artigos e notícias.
- Verificar se o valor digitado está contido em algum dos campos do objeto `articles` ou `newsS`.
- Se houver correspondência, os artigos ou notícias é adicionado à lista de resultados.
- A lista de resultados é exibida na seção `resultados-pesquisa`.


## 🛠️ Ferramentas utilizadas
- **HTML:** Estruturação do projeto
- **CSS:** Estilização do projeto, responsivo e menu hamburguer
- **JavaScript:** Campos de busca, procura e entrega dos itens buscados em tela
- **Git:** Ferramenta de versionamento
- **Fontawesome:** Utiliza ícones de um banco de ícones externo


## 🎨 Imagens do projeto

<div align="center">
<img src="./src/images/others/genbukan-brasil.gif"  style="height: 300px; text-align: center;"> 
<br><br>
<img src="./src/images/others/genbukan-brasil-mobile.gif"  style="height: 300px; text-align: center;"> <br>
</div>

## 💡 Decisões do projeto
1. **Header e Footer padrões**
- Tanto o Header quanto o Footer iriam se repitir por todas as páginas do projeto, portanto, para que não houvesse duplicidade foi separado, construído um único e inserido com o "`fetch`" do JavaScript:
   ```javascript
   `fetch`('../header/header.html')
   .then(response => response.text())
   .then(html => {
    document.getElementById('content-header').innerHTML = html;
    });
   ```
2. **Notícias**
- Como as últimas notícias seriam apresentadas tanto na Home como na página Notícias, foi feito como nos casos do Header e Footer.

3. **Fontes**
- Para este projeto foi escolhida a fonte [Lato](https://fonts.google.com/specimen/Lato?query=lato), pois possui uma excelente legibilidade. Como o projeto tem artigos e notícia, uma fonte legível é fundamental.

## 💦 Dificuldades do projeto
- Utilizar o `fetch` para reduzir duplicidades: Como é algo que eu nunca havia feito, não tinha ideia nem de como começar, mas, com pesquisas no Stack Overflow, Documentação e utilização de IA para apresentar possíveis soluções. Consegui implementar o que eu queria.
- Criar um banco de artigos e notícias: Como é algo que eu não havia feito sozinho (guardar informações do site no LocalStorage), tinha ideia superficial de como começar.Utilizando outros projetos como base, consegui ter uma ideia. Mas ainda quero melhorar nessa parte.
- Campos de pesquisas: a partir do conhecimento de outros projetos consegui, fazer dois campos de pesquisa para artigos e notícias. A parte inicial de entender o funcionamento do código foi um pouco complexa, mas tentando enteder o que cada bloco de código estava fazendo ajudou demais.
- Menu hamburguer: Apesar de já ter utilizado em outro projeto, havia sido com auxílio dos intrutores do Curso. Estudei o código, li com calma e atenção e consegui replicar para esse projeto.

## 🔓 O que eu aprendi
- Uma das funções do `fetch`, que permitiu reduzir duplicações e vai facilitar a manutenção e atualização do código do projeto.
- Como fazer um local storage (Melhorar, colocar em JSON).
- Fazer um campo de pesquisa para o local storage.
- Consegui compreender melhor como funciona este menu hamburguer.


## 💭 Possíveis atualizações futuras
- Finalizar o README ✅
- Adicionar Artigos
- Finalizar Notícias 
- Criar uma página que apresente as Notícias, ao clicar no título
- Pesquisa de Notícias apresentar Títulos clicáveis
- Carrossel para as Últimas Notícias na Home e na página Notícias
- Campo de pesquisa para todo o site
- Melhorar o sistema de local storage (mudar para JSON)
- Botões para alterar a língua ES, EN
- Função de alterar o tema do site (Dark/Light)

## 🚀 Como rodar o projeto
Siga os passos abaixo para executar o projeto na sua máquina:

### Pré requisitos

- <strong><i>Git</i></strong>: Para clonar o repositório.


1. Abra o git, e execute os seguintes comandos
2. **Clonar o repositório:**
   ```bash
   git clone https://github.com/cezarviana/genbukan-brasil-iaido.git
   ```
3. npm install
4. npm run dev
5. **Abrir o arquivo index.html:** Abra o arquivo `index.html` em um navegador web.