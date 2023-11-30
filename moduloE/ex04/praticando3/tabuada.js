let numero = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let hide = document.querySelector('#hide')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', ver)
function ver(){
    if(numero.value.length == 0){
        numero.style.border = '3px solid red'
    }else{
        let n = Number(numero.value)
        hide.style.display = 'block'
        tab.style.width = '250px'
        tab.style.fontSize = '1.6em'
        tab.style.padding = '15px'
        tab.style.textAlign = 'center'
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`// não necessita
            tab.appendChild(item)
        }
        
    }

    
}
