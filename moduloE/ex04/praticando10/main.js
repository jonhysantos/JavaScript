let numero = document.querySelector('#txtn')
let res = document.querySelector('#res')
let tab = document.querySelector('#seltab')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click',verTabuada)
function verTabuada(){
    if(numero.value.length == 0 || numero.value >= 30){
        numero.style.border = '3px solid red'
        window.alert('Número inválido ou faltando')
    }else{
        tab.innerHTML = ''
        n = Number(numero.value)
        tab.style.padding = '20px'
        tab.style.fontSize = '1.6em'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        tab.style.textAlign = 'center'
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c * n}`
            tab.appendChild(item)
        }
    }
}