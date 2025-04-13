/*HEADER INSERT*/
fetch('../header/header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('content-header').innerHTML = html;
});


/*BREAKING NEWS INSERT */
fetch('../news/breaking-news.html')
.then(response => response.text())
.then(html => {
    document.getElementById('content-breaking-news').innerHTML = html;
});


/*FOOTER INSERT */
fetch('../footer/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('content-footer').innerHTML = html;
});

/* footer email*/

function sendEmailGenbukanBrasilDf() {
    window.open('mailto:genbukanbrasildf@gmail.com')
}

/*GROUPS emails*/

function sendEmailGouveia() {
    window.open('mailto:kendorecife@gmail.com')
}

function sendEmailMeira() {
    window.open('mailto:meira.reis@gmail.com')
}

function sendEmailAnchieta() {
    window.open('mailto:josear@ufscar.br')
}

function sendEmailAlcantara() {
    window.open('mailto:alcantaracqc@gmail.com')
}

function sendEmailBorges() {
    window.open('mailto:aleborges007@hotmail.com')
}