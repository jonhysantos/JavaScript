let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
let txtano = document.querySelector('#txtano')
let ano = new Date()
let anoAtual = ano.getFullYear()
let res = document.querySelector('#res')
let mostrar = document.querySelector('input#mostrar')
function clicar(){
    if(mostrar.style.display == 'block'){
        mostrar.style.display = 'none'
    }else{
        mostrar.style.display ='block'
    }   
}

function verificar(){
    let idade = anoAtual - Number(txtano.value)
    if(txtano.value == anoAtual || txtano.value.length == 0){
        txtano.style.border = '2px solid red'
    }else{
     let sexo = document.getElementsByName('radsex')
     let = gênero = ''
     let img = document.createElement('img')
     img.setAttribute('id','foto')
     if(sexo[0].checked){
        gênero = 'Homen'
        if(idade >0 && idade < 10){
            // Criança
            gênero = 'menino'
            img.setAttribute('src','./imagens/criança-m.png')
        }else if (idade < 21){
            // Jovem
            img.setAttribute('src','./imagens/jovem-m.png')
        }else if(idade <= 50){
            // Adulto
            img.setAttribute('src','./imagens/adulto-m.png')
        }else if(idade > 50){
            // Idoso
            img.setAttribute('src','./imagens/idoso-m.png')
        }
    }else if (sexo[1].checked){
        gênero = 'Mulher'
        if(idade > 0 && idade < 10){
            // Criança
            gênero = 'menina'
            img.setAttribute('src','./imagens/menina-f.png')
        }else if (idade < 21){
            // Jovem
            img.setAttribute('src','./imagens/jovem-f.png')
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src','./imagens/adulta-f.png')
        }else if(idade > 50){
            // idosa
            img.setAttribute('src','./imagens/idosa-f.png')
        }
    }else if (sexo[2]){
        gênero = `${mostrar.value}`
    }
    res.style.boxShadow = '5px 5px 5px #00000088'
     res.style.background = 'blue'
     res.innerHTML = `<p>Detectamos ${gênero} que completará ${idade} anos em ${anoAtual}</p>`
     res.appendChild(img)
    
    }
}
