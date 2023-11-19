let anoD = document.querySelector('#txtano')
let date = new Date()
let anoAtual = date.getFullYear()
let res = document.querySelector('#res')
let sexo = document.getElementsByName('radsex')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
let out = document.querySelector('#out')
out.addEventListener('click', mostrar)
let choice = document.querySelector('#choice')
function mostrar(){
    if(choice.style.display == 'block'){
        choice.style.display = 'none'
    }else{
        choice.style.display = 'block'
    }
}
function verificar(){
    if(anoD.value.length == 0 || anoD.value > anoAtual){
        anoD.style.border = '2px solid red'
    }else{
        let idade = anoAtual- Number(anoD.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.display = 'block'
        img.style.margin = 'auto'
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade <= 12){
                // Criança
                genero = 'menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50){
                // Adulto
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                // Idade
                img.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade <= 12){
                // Criança
                genero = 'Menina'
                img.setAttribute('src','./imagens/menina-f.png')
            }else if (idade < 21 ){
                // Jovem
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if (idade < 50 ){
                // Adulta
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                // Idosa
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if(sexo[2].checked){
            genero = choice.value
        }
     res.innerHTML = `Ano de nascimento ${anoD.value}, em ${anoAtual} a pessoa do Gênero ${genero} completará ${idade} anos.`
     res.appendChild(img) 
     res.style.display = 'block'
    
    }
}