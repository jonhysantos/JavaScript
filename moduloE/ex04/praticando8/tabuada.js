let numero = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let divhidden = document.getElementsByTagName('div')[1]
divhidden.style.display = 'none'
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verTabuada)
function verTabuada(){
    if(numero.value.length == 0){
        numero.style.border = '3px solid red'
    }else{
        let n = Number(numero.value)
        divhidden.style.display = 'block'
        tab.style.padding = '15px'
        tab.style.textAlign = 'center'
        tab.style.width = '250px'
        tab.style.fontSize = '1.4em'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}