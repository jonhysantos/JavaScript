let nas = document.querySelector('#txtano')
let date = new Date()
let anoAtual = date.getFullYear()
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
let hide = document.querySelector('#hide')
let click = document.querySelector('#out')
click.addEventListener('click', esconder)
function esconder(){
    if(hide.style.display == 'none'){
        hide.style.display = 'block'
    }else{
        hide.style.display = 'none'
    }
}
function verificar(){
    if(nas.value.length == 0 || nas.value > anoAtual){
        nas.style.border = '2px solid red'
    }else{
        let idade = anoAtual - Number(nas.value)
        let sexo = document.getElementsByName('radsex')
        let Gênero = ''
        let img = document.createElement('img')
        img.style.display = 'block'
        img.style.margin = 'auto'
        img.setAttribute('id','foto')
        if(sexo[0].checked){
            Gênero = 'Homem'
            if(idade > 0 && idade < 13){
                Gênero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
                // Criança
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if(idade < 50 ){
                // Adulto
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                // Idoso
                img.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if(sexo[1].checked){
            Gênero = 'Mulher'
            if(idade > 0 && idade < 13){
                Gênero = 'menina'
                // Crainça
                img.setAttribute('src','./imagens/menina-f.png')
            }else if(idade < 21){
                // Jovem
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if (idade < 50){
                // Adulta
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                //idosa
                img.setAttribute('src', './imagens/idosa-f.png')
            }
        }else{
            Gênero = hide.value
        }
        
        res.innerHTML = `<p>A pessoa do Gênero ${Gênero} que nasceu no ano de ${nas.value} e atulamente em ${anoAtual} ela ou ele completará ou já completou ${idade} anos</p>`
        res.appendChild(img)
    }
    
    
}