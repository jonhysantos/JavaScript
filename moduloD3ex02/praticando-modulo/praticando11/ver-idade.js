let date = new Date()
let anoAtual = date.getFullYear()
let nas = document.querySelector('#txtano')
let res = document.querySelector('#res')
let hide = document.querySelector('#hide')
let sexo = document.getElementsByName('radsex')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
function see(){
    if(hide.style.display == 'none'){
        hide.style.display = 'block'
    }else{
        hide.style.display = 'block'
    }
}    
function verificar(){
    if(nas.value.length == 0){
        nas.style.border = '3px solid red'
    }else{
        let idade = anoAtual - Number(nas.value)
        let Gênero = ''
        let img = document.createElement('img')
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.setAttribute('id', 'foto')
        res.style.display = 'block'
        if(sexo[0].checked){
            Gênero = 'Homem'
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
        }else if(sexo[1].checked){
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if (idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if (idade < 50){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else{
            Gênero = hide.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que completará ou já completou ${idade} anos </p>`
        res.appendChild(img)
        
    }
    
}