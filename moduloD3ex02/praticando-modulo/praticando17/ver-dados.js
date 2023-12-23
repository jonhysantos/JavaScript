const nome = document.querySelector('#name')
const sobrenome = document.querySelector('#last-name')
const eMail = document.querySelector('#e-mail')
const nas = document.querySelector('#txtano')
let date = new Date()
let anoAtual = date.getFullYear()
const res = document.querySelector('#res')
let sexo = document.getElementsByName('radsex')
let msg = document.querySelector('#msg')
const button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verDados)
function verDados(){
    if(nome.value.length == 0 ){
        nome.style.border = '3px solid red'
    }else if(sobrenome.value.length == 0){
        nome.style.border = 'none'
        sobrenome.style.border = '3px solid red'
    }else if(eMail.value.length == 0){
        eMail.style.border = '3px solid red'
        sobrenome.style.border = 'none'
    }else if(nas.value.length == 0){
        nas.style.border = '3px solid red'
        eMail.style.border = 'none'
    }else if(msg.value.length == 0){
        msg.style.border = '3px solid red'
    }else{
        nas.style.border = 'none'
        msg.style.border = 'none'
        let Gênero = ''
        let idade =  anoAtual - Number(nas.value)
        let img = document.createElement('img')
        if(sexo[0].checked){
            // Homem
            Gênero = 'Homem'
        }else if(sexo[1].checked){
            // Mulher
            Gênero = 'Mulher'
        }else{
            // Outro
        }
        img.setAttribute('id','foto')
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu ${nas.value} e em ${anoAtual} completará ou ja completou ${idade} anos <br> </p> `
        res.innerHTML += `<p>Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> E-mail: ${eMail.value} <br> Sua mensagem ${msg.value}</p>`
        res.appendChild(img)
    }
}