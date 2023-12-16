
let numero = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res = document.querySelector('#res')

// evento 
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verTabuada)

// funcão

function verTabuada() {
    if (numero.value.length == 0 || numero.value >= 11) {
        numero.style.border = '3px solid red'
    } else {
        tab.innerHTML = ''
        let n = Number(numero.value)
        res.style.display = 'block'
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')

            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }

    }
}
