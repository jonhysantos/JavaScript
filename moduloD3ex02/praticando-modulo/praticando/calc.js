let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
let date = new Date()
let ano = date.getFullYear()
let fano = document.querySelector('#txtano')
let res = document.querySelector('#res')
let mostrar = document.querySelector('#outro')
function outro(){
  mostrar.style.display = 'block'
}
function verificar(){
  let idade = ano - Number(fano.value) 
  if(fano.value.length == 0 || fano.value > ano){
    fano.style.border = '3px solid red'
  }else{
    let fsex = document.getElementsByName('radsex')
    let gênero = ''
    if(fsex[0].checked ){
      gênero = 'Mulher'
    }else if(fsex[1].checked){
      gênero = 'Homem'
    }else if(fsex[2].checked){
    let outro = document.querySelector('#outro')  
     gênero = outro
     
    }
    res.innerHTML = `Detectamos ${mostrar.value} com ${idade} anos `
  }
}


