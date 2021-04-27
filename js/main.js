//console.log('JS externo funcionol!');
//console.log(document);
//console.log(window);

//alert('Seja bem vindo!') //msg para usuário

//let adult = confirm('Você tem mais de 18 anos?');  //retorna booleano

//let nomeUsuario = prompt('Qual o seu nome?'); //retorna texto inserio pelo user
let nomeUsuario = 'Brena';
let elementHeader = document.querySelector('.olaUsuario'); //seleciona o elemneto html

console.log(elementHeader);
//elementHeader.innerText = `Olá, ${nomeUsuario}`; //atribui conteudo ao elemento selecionado

elementHeader.innerHTML += `<strong> Olá, ${nomeUsuario}</strong>`;

// let logo = document.getElementById('logo');
// console.log(logo);

//logo.style.color = "orange";

/* Dark mode setup */
const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}

setTimeout( () => {
    document.querySelector('.modal').style.display = "flex";
} , 3000)

const btnClose = () => {
    document.querySelector('.modal').style.display = "none";
}
