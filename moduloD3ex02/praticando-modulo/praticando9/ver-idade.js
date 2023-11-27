let date = new Date()
let anoAtual = date.getFullYear()
let nascimento = document.querySelector('#txtano')
let res = document.querySelector('#res')
let out = document.querySelector('#out')
out.addEventListener('click', see)
function see(){
    if(hide.style.display == 'none'){
        hide.style.display = 'block'
    }else{
        hide.style.display = 'none'
    }
}
let hide = document.querySelector('#hide')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
let sexo = document.getElementsByName('radsex')
function verificar(){
    if(nascimento.value.length == 0){
        nascimento.style.border = '3px solid red'
    }else{
        let idade = anoAtual - Number(nascimento.value)
        let Gênero = ''
        res.style.display = 'block'
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.display = 'block'
        img.style.margin =  'auto'
        if(sexo[0].checked){
            Gênero = 'mulher'
            if(idade > 0 && idade < 12){
                img.setAttribute('src', './imagens/menina-f.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Homem'
        }else{
            Gênero = 'biba'
        }
     res.innerHTML = `${idade } ${Gênero}` 
     res.appendChild(img)  
    }
    
}