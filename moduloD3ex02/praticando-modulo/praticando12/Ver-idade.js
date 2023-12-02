let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#txtano')
let hidden = document.querySelector('#hidden')
let out = document.querySelector('#out')
out.addEventListener('click', see)
function see() {
    hidden.style.display = 'block'
}
hidden.style.display = 'none'
let sexo = document.getElementsByName('radsex')
let res = document.querySelector('#res')
res.style.display = 'none'
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
function verificar() {
    if (nasc.value.length == 0 || nasc.value > anoAtual || nasc.value < 1900) {
        nasc.style.border = '3px solid red'
    } else {
        nasc.style.border = 'none'
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.display = 'block'
        img.style.margin = 'auto'
        let idade = anoAtual - Number(nasc.value)
        let Gênero = ''
        res.style.display = 'block'
        if (sexo[0].checked) {
            // Homem
            Gênero = 'Homem'
            if (idade > 0 && idade < 12) {
                Gênero = 'Menino'
                img.setAttribute('src', './imagens/criança-m.png')
            } else if (idade < 22) {
                img.setAttribute('src', './imagens/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/adulto-m.png')
            } else {
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        } else if (sexo[1].checked) {
            // Mulher
            Gênero = 'Mulher'
            if (idade > 0 && idade < 12) {
                Gênero = 'Menina'
                img.setAttribute('src', './imagens/menina-f.png')
            } else if (idade < 22) {
                img.setAttribute('src', './imagens/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', './imagens/adulta-f.png')
            } else {
                img.setAttribute('src', './imagens/idosa-f.png')
            }
        } else {
            // Outro
            Gênero = hidden.value
        }
        res.innerHTML = `<p>Detectamos ${Gênero} que nasceu em ${nasc.value} e em ${anoAtual} completará ou já completou ${idade} anos </p>`
        res.appendChild(img)

    }
}