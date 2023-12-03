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
        tab.style.padding = '15px'
        tab.style.fontSize = '1.4em'
        tab.style.width = '250px'
        tab.style.border = '6px solid blue'
        tab.style.textAlign = 'center'
        tab.innerHTML = ''
        let n = Number(numero.value)
        for(let c = 1; c <= 10; c ++){
            divhidden.style.display = 'block'
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n *c}`
            tab.appendChild(item)
        }
    }
}