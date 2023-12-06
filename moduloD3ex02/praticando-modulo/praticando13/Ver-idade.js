let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#txtano')
let sexo = document.getElementsByName('radsex')
let res = document.querySelector('#res')
res.style.display = 'none'
let hide = document.querySelector('#hide')
hide.style.display = 'none'
hide.style.width = '100px'
hide.style.margin = 'auto'
let out = document.querySelector('#out')
out.addEventListener('click', see)
function see(){
    if(hide.style.display == 'none'){
        hide.style.display = 'block'
    }else{
        hide.style.display = 'none'
    }
}
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
function verificar(){
    if(nasc.value.length == 0 || nasc.value > anoAtual || nasc.value < 1900){
        nasc.style.border = '3px solid red'
    }else{
        let idade = anoAtual - Number(nasc.value)
        let Gênero = ''
        res.style.display = 'block'
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.margin = '15px'
        if(sexo[0].checked){
            Gênero = 'Homem'
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                img.setAttribute('src', './imagens/jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                img.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', './imagens/adulta-f.png')
            }else{
                img.setAttribute('src', './imagens/idosa-f.png')
            }
        }else{
            Gênero = hide.value
        }
        res.innerHTML = `Detectamos ${Gênero} que em ${anoAtual} completará ou ja completou ${idade} anos`
        res.appendChild(img)
    }
    

}