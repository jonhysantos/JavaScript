let date = new Date()
let anoAtual = date.getFullYear()
let nas = document.querySelector('#txtano')
let sexo = document.getElementsByName('radsex')
let textArea = document.querySelector('#msg')
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
let hidden = document.querySelector('#hidden')
hidden.style.display = 'none'
let inputOut = document.querySelector('#out')


// Ação do click no botão
inputOut.addEventListener('click', see)

// Chamando a função do click
function see(){
    if(hidden.style.display == 'none'){
        hidden.style.display = 'block'
    }else{
        hidden.style.display = 'none'
    }
}

// Ação do click no botão
button.addEventListener('click', verificar)

// Chamando a função do click
function verificar(){
    if(nas.value.length == 0 || nas.value > anoAtual){
        nas.style.border = '3px solid red'
    }else if(textArea.value.length == 0){
        nas.style.border = 'none'
        textArea.style.border = '3px solid red'
    }else{
        res.style.display = 'block'
        let idade = anoAtual - Number(nas.value)
        let Gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            // Homem
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                img.setAttribute('src', './imagens/idoso-m.png')
            }
            Gênero = 'Homem'
        }else if(sexo[1].checked){
            // Mulher
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src', './imagens/menina-f.png')
            }else if(idade < 21 ){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else{
            Gênero = hidden.value
        }
        hidden.style.display = 'none'
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nas.value} e em ${anoAtual} completará ou já completou ${idade} anos</p>`
        res.appendChild(img)
        
    }
}