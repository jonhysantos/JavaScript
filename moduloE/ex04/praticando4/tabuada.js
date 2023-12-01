let numero = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let button = document.getElementsByTagName('button')[0]
let div = document.getElementsByTagName('div')[1]
div.style.display = 'none'
button.addEventListener('click', verTabuada)
function verTabuada() {
    if (numero.value.length == 0) {
        numero.style.border = '3px solid red'
    } else {
        let n = Number(numero.value)
        tab.style.width = '250px'
        tab.style.padding = '15px'
        tab.style.fontSize = '1.3em'
        tab.style.textAlign = 'center'
        div.style.display = 'block'
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }

}