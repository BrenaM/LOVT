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


// regras para o form
// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); //cancelando o envio temporariamente

//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);
//     //validação dos campos
//     //exibição de msg de erro
//     //envio do form

// });

let formContact = document.querySelector("#form_contact");
formContact.addEventListener("submit", (evento) => {
    //interrrompo o envio do formulario
    evento.preventDefault();

        let nomeValue = document.querySelector("#input_nome").value;
        let emailValue = document.querySelector("#input_email").value;
        let telefoneValue = document.querySelector("#input_telefone").value;
        let mensagemValue = document.querySelector("#input_mensagem").value;
        let divMensagemErro = document.querySelector(".mensagem-erro");
        
        // validar todos os campos estão preenchido
        //validar se nome tem 2 ou mais caracteres
        //validar se telegone tem no minimo 8 caracteres
        //verificar se o campo email tem @ (google - validação c/ regex)
        if (nomeValue.length < 2 || emailValue.length < 1 || telefoneValue.length < 1 || mensagemValue.length < 1) {
            divMensagemErro.innerHTML += "Preencha todos os campos. <br>";
            // alert("Preencha todos os campos")
            return;
        }else if (telefoneValue.length < 8) {
            divMensagemErro.innerHTML += "Telefone deve conter pelo menos 8 digitos. <br>";
        }else if (emailValue.indexOf("@") < 0) {
            divMensagemErro.innerHTML = "Insira um email válida. <br>";
        } else {
            formContact.submit();
        }
         
        // const validateEmail = (email) => {
        //     const re = /\S+@\S+\.\S+/;
        //     return re.test(email);
        //   };
    
});