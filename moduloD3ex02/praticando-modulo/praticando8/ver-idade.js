let date = new Date()
let anoAtual = date.getFullYear()
let nascimento = document.querySelector('#txtano')
let sexo = document.getElementsByName('radsex')
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
let hide = document.querySelector('#hide')
let out = document.querySelector('#out')
out.addEventListener('click', see)
function see(){
    if(hide.style.display == 'none'){
        hide.style.display = 'block'
    }else{
        hide.style.display = 'none'
    }
}
function verificar(){
    if(nascimento.value.length == 0 || nascimento.value > anoAtual){
        nascimento.style.border = '2px solid red'
    }else{
        let idade = anoAtual - Number(nascimento.value)
        let choice = document.querySelector('#hide')
        let Gênero = ''
        let img = document.createElement('img')
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Homem'
            // Homem
            if(idade > 0 && idade < 12){
                Gênero = 'menino'
                img.setAttribute('src', './imagens/criança-m.png')
            }else if(idade < 21){
                Gênero = 'Jovem'
                img.setAttribute('src', './imagens/jovem-m.png')
            }else if(idade < 50 ){
                Gênero = 'Adulto'
                img.setAttribute('src', './imagens/adulto-m.png')
            }else{
                Gênero = 'Idoso'
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Mulher'
            // Mulher
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src', './imagens/menina-f.png')
            }else if(idade < 21){
                Gênero = 'Jovem'
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                Gênero = 'Adulta'
                img.setAttribute('src','./imagens/adulta-f.png')
            }
        }else{
            Gênero = choice.value
            // A ver
        }
        res.style.display = 'block'
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nascimento.value} e atualmente em ${anoAtual} completará ou já completou ${idade} anos</p>`
        res.appendChild(img)
    }
}