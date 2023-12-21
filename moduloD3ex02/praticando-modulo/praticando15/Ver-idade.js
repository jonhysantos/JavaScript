let date = new Date()
let AnoAtual = date.getFullYear()
let nas = document.querySelector('#txtano')
let sexo = document.getElementsByName('radsex')
let hidden = document.querySelector('#hidden')
let out = document.querySelector('#out')
let button = document.getElementsByTagName('button')[0]
let res = document.querySelector('#res')
button.addEventListener('click', Verificar)
function Verificar() {
    if (nas.value.length == 0 || nas.value > AnoAtual) {
        nas.style.border = '3px solid red'
    } else {
        let Gênero = ''
        let idade = Number(nas.value) - anoAtual
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            Gênero = 'Homem'
            hidden.style.display = 'none'
            if (idade > 0 && idade < 12) {
                Gênero = 'Menino'
                img.setAttribute('src', './imagens/criança-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/adulto-m.png')
            } else {
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        } else if (sexo[1].checked) {
            Gênero = 'Mulher'
            if (idade > 0 && idade < 12) {
                Gênero = 'Menina'
                img.setAttribute('src', './imagens/menina-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/adulta-f.png')
            } else {
                img.setAttribute('src', './imagens/idosa-f.png')
            }
        } else if (hidden.value.length == 0) {
            hidden.style.border = '3px solid red'

        } else {
            Gênero = hidden.value
            res.innerHTML = `<p>Detectamos ${Gênero} que em ${AnoAtual} completará ou já completou ${idade} anos</p>`
            res.appendChild(img)
            res.style.display = 'block'
        }


    }
}