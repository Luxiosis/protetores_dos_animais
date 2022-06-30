var logged = false;

document
    .querySelector('.popup .close-btn')
    .addEventListener('click', function () {
        document.querySelector('.popup').classList.remove('active');
    });

function autenticador() {
    if (logged == true) {
        window.location.href =
            'https://arcabrasil.org.br/sites-para-adotar-ou-doar-um-animal/';
    } else {
        document.querySelector('.popup').classList.add('active');
    }
}

function averiguador() {
    var age = document.getElementById('idade').value;
    if (age >= 18) {
        logged = true;
        document.querySelector('.popup').classList.remove('active');
        alert('Cadastrado!');
    } else {
        document.querySelector('.popup').classList.remove('active');
        alert('Você é menor de idade!');
    }
}
