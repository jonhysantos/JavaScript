let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#fano')
let res = document.querySelector('#res')
let sexo = document.getElementsByName('radsex')
let choice = document.querySelector('#hidden')
let out = document.querySelector('#out')
out.addEventListener('click',see)
choice.style.display = 'none'
function see(){
    if(choice.style.display == 'none'){
        choice.style.display = 'block'
    }else{
        choice.style.display = 'none'
    }
}
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
function verificar() {
    if (nasc.value.length == 0 || nasc.value > anoAtual || nasc.value <= 1900) {
        nasc.style.border = '3px solid red '
    } else {
        res.style.display = 'block'
        let idade = anoAtual - Number(nasc.value)
        let Gênero = ''
        let img = document.createElement('img')
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            Gênero = 'Homem'
            if (idade > 0 && idade < 12) {
                Gênero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                img.setAttribute('src','./imagens/idoso-m.png')
            }
        } else if (sexo[1].checked) {
            Gênero = 'Muller'
            if(idade > 0 && idade < 12){
                img.setAttribute('src','./imagens/menina-f.png')
            }else if (idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        } else {
            Gênero = choice.value
        }
        res.innerHTML = `<p> Detectamos ${Gênero} que nasceu em ${nasc.value} e em ${anoAtual} completará ou já completou ${idade}</p>`
        res.appendChild(img)
    }

}