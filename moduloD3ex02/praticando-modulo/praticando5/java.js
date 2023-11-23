let date = new Date()
let anoAtual = date.getFullYear()
let nasc = document.querySelector('#txtano')
let button = document.getElementsByTagName('button')[0]
let res = document.querySelector('#res')
let sexo = document.getElementsByName('radsex')
let txtsex = document.querySelector('#txtsex')
let out = document.querySelector('#out')
out.addEventListener('click', txtaparecer)
button.addEventListener('click', verificar)
function txtaparecer(){
    if(txtsex.style.display == 'none'){
        txtsex.style.display = 'block'
    }else{
        txtsex.style.display = 'none'
    }
}
function verificar(){
    if(nasc.value.length == 0 || nasc.value > anoAtual){
        nasc.style.border = '2px solid red'
    }else{
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.display = 'block'
        img.style.margin = 'auto'
        let idade = anoAtual - Number(nasc.value)
        let genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade > 0 && idade < 12){
                // Criança
                genero = 'Menino'
                img.setAttribute('src','./imagens/criança-m.png')
            }else if (idade < 21 ){
                // Jovem
                img.setAttribute('src','./imagens/jovem-m.png')

            }else if (idade < 50 ){
                // Adulto
                img.setAttribute('src','./imagens/adulto-m.png')
            }else{
                // Idoso
                img.setAttribute('src','./imagens/idoso-m.png')
            }
        }else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade > 0 && idade < 12){
                // Menina
                img.setAttribute('src','./imagens/menina-f.png')
                genero = 'Menina'
            }else if(idade < 21 ){
                // Jovem
                img.setAttribute('src','./imagens/jovem-f.png')
            }else if (idade < 50){
                // Adulta
                img.setAttribute('src','./imagens/adulta-f.png')
            }else{
                // Idosa
                img.setAttribute('src','./imagens/idosa-f.png')
            }
        }else if (sexo[2].checked){
            genero = txtsex.value
        }res.innerHTML = `<p>Detectamos ${genero} de ${idade} anos</p>`
        img.style.textAlign = 'center'
        res.style.display = 'block'
        res.appendChild(img)
        
        
    }
    
}