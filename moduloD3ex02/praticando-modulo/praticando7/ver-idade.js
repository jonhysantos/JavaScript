let date = new Date()
let anoAtual = date.getFullYear()
let nas = document.querySelector('#txtano')
let sexo = document.getElementsByName('radsex')
let res = document.querySelector('#res')
let out = document.querySelector('#out')
let hide = document.querySelector('#hide')
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
function verificar() {
    if (nas.value.length == 0 || nas.value > anoAtual) {
        nas.style.border = '2px solid red'
    } else {
        let idade = anoAtual - Number(nas.value)
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        Gênero = ''
        img.style.display = 'block'
        img.style.margin = 'auto'
        if (sexo[0].checked) {
            // homem
            Gênero = 'Homem'
            if(idade > 0 && idade < 12){
                // Criança
                Gênero = 'menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                // idoso
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        }else if (sexo[1].checked) {
            // Mulher
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                // Menina
                Gênero = 'menina'
                img.setAttribute('src', './imagens/menina-f.png')
            }else if(idade < 21){
                // Jovem
                Gênero = 'Moça'
                img.setAttribute('src', './imagens/jovem-f.png')
            }else if(idade < 50){
                // Adulta
                Gênero = 'Mulher'
                img.setAttribute('src', './imagens/adulta-f.png')
            }else{
                //idosa
                Gênero = 'Idosa'
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if (sexo[2].checked){
            // escolha do usuário
            Gênero = hide.value
        }

        res.innerHTML = `<p>${idade} ${Gênero}</p>`
        res.appendChild(img)

    }
    
}