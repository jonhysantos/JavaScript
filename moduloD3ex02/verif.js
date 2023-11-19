let button = document.getElementsByTagName('button')[0]
button.addEventListener('click',verificar )
function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        fano.style.border = '2px solid red'
    }else  {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
              // criança  
              img.setAttribute('src', './imagens/criança-m.png')
            }else if(idade >= 10 && idade < 21){
                // jovem
                img.setAttribute('src','./imagens/jovem-m.png')
            }else if (idade < 50 ){
                // Adulto
                img.setAttribute('src', './imagens/adulto-m.png')
            }else {
                // Idoso
                img.setAttribute('src', './imagens/idoso-m.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                // Criança
            }else if(idade < 21){
                // Jovem
            }else if (idade < 50){
                // Adulto
            }else{
                // Idoso
            }
        }else if(fsex[2].checked){
            gênero = 'Outro'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}