let data = new Date()
let anoAtual = data.getFullYear()
let button = document.getElementsByTagName('button')[0]
let ano = document.querySelector('#txtano')
let res = document.querySelector('#res')
let outro = document.querySelector('#out')
let mostrar = document.querySelector('#mostrar')
outro.addEventListener('click', clicar)
function clicar(){
    if(mostrar.style.display == 'block'){
        mostrar.style.display = 'none'
    }else{
        mostrar.style.display = 'block'
    }
}

button.addEventListener('click', verificar)
function verificar() {
    idade = anoAtual - Number(ano.value)

    if (ano.value.length == 0 || ano.value > anoAtual) {
        ano.style.border = '2px solid red'
    } else {
        let sexo = document.getElementsByName('radsex')
        let Gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            // Homem
            Gênero = 'Homem'
            if(idade > 0 && idade < 10){
                // Criança
                Gênero = 'menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if (idade < 21 ) {
                // Jovem
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if (idade < 50 ){
                // Adulto
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                // Idoso
                img.setAttribute('src','./imagens/idoso-m.png')
            }

        }else if(sexo[1].checked) {
            // Mulher
            Gênero = 'Mulher'
            if(idade < 10 ){
                img.setAttribute('src','./imagens/menina-f.png')
                // Criança
                Gênero = 'menina'
            }else if(idade < 21 ){
                // Jovem
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50 ){
                // Adulto
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                // Idoso
                img.setAttribute('src','./imagens/idosa-f.png')
        }
        }else{
            Gênero = `${mostrar.value}`
        }
        res.innerHTML = `Detectamos ${Gênero} seu ano de nascimento é ${ano.value} e em ${anoAtual} essa pessoa completará ${idade}`
        res.appendChild(img)

    }
    
}
