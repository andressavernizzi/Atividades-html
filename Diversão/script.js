var nome = document.getElementById('nome')
var nomeOk = false
var email = document.querySelector('#email')
var emailOK = false
var text = document.querySelector('#text')
var textOK = false

//function validarNome(){
 //   if(nome.value.lenght < 3){
   //     alert("O nome deve conter acima de 3 caracteres");
 //   }
//};

function validarNome2(){
    let txtNome = document.querySelector("#TXTNome")
    if(nome.value.length < 5){
        txtNome.innerHTML = "Nome inválido!"
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true

    }
};

function validarEmail(){
    let txtEmail = document.querySelector('#TXTEmail')

    if(email.value.indexOf('@')== -1 || email.value.indexOf('.com') == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = 'red'
        emailOK = false
    }else{
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = 'green'
        emailOK = true
    }
}

function validarText(){
    let txtText = document.querySelector('#TXTtext')
    
    if(text.value.length >= 30){
        txtText.innerHTML = "O texto é muito grande, digite no máximo 30 caracteres!"
        txtText.style.color = 'red'
        txtText.style.display = 'block'
        textOK = false
    }else{
        txtText.style.display = 'none'
        textOK = true
    }

}

//enviar no input se tiver correto
function Enviar(){
    if(nomeOk == true && emailOK == true && textOK == true){
        alert("Formulário enviado com sucesso! Obrigado " + nome.value)
    }else{
        alert("Preencha o formulário corretamente...")
    }
};