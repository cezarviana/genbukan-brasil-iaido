/*HEADER INSERT*/
fetch('../header/header.html')
.then(response => response.text())
.then(html => {
    document.getElementById('content-header').innerHTML = html;
});


/*FOOTER INSERT */
fetch('../footer/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('content-footer').innerHTML = html;
});

/* footer email*/

function sendEmail() {
    window.open('mailto:genbukanbrasildf@gmail.com')
}