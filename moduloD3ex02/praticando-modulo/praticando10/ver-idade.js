let date = new Date()
let anoAtual = date.getFullYear()
let nas = document.querySelector('#txtano')
let res = document.querySelector('#res')
let sexo = document.getElementsByName('radsex')
let out = document.querySelector('#out')
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
function verificar(){
    if(nas.value.length == 0 || nas.value > anoAtual){
        nas.style.border = '3px solid red'
    }else{
        let idade = anoAtual - Number(nas.value)
        let Gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.display = 'block'
        img.style.margin = 'auto'
        if(sexo[0].checked){
            // Homem
            Gênero = 'Homem'
            if(idade > 0 && idade < 12){
                Gênero = 'menino'
                img.setAttribute('src',' ./imagens/criança-m.png')
            }else if(idade < 21 ){
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if (idade < 50){
                // Adulto
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                //Idoso
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        }else if (sexo[1].checked){
            // Mulher
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if (idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src', './imagens/adulta-f.png')
            }else{
                img.setAttribute('src', './imagens/idosa-f.png')
            }
        }else{
            // escolha do usuário
            Gênero = hide.value
            
        }
        res.style.display = 'block'
        res.innerHTML = `<p>Detectamos ${Gênero} que irá ou já completou ${idade} anos</p>`
        res.appendChild(img)
    }
    

}