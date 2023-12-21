let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#txtano')
let sexo = document.getElementsByName('radsex')
let button = document.getElementsByTagName('button')[0]
let res = document.querySelector('#res')

button.addEventListener('click',verIdade)

function verIdade(){
    if(nasc.value.length == 0 || nasc.value > anoAtual){
        nasc.style.border = '3px solid red'
    }else{
        let idade = anoAtual - Number(nasc.value)
        let Gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            // Homem
            Gênero = 'Homem'
            if(idade > 0 && idade < 12){
                Gênero = 'Menino'
                img.setAttribute('src', './imagens/criança-m.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                img.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sexo[1].checked){
            // Mulher
            Gênero = 'Mulher'
            if(idade > 0 && idade < 12){
                Gênero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if(idade < 50){
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else{
            // outro
        }
        res.innerHTML = `Dectamos ${Gênero} que nasceu em ${anoAtual}`
        res.appendChild(img)
    }
    
}