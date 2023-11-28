let num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let button = document.getElementsByTagName('button')[0]
let hide = document.querySelector('#hide')
button.addEventListener('click', tabuada)
function tabuada(){
    if(num.value.length == 0){
        num.style.border = '3px solid red'
    }else{
        let n = Number(num.value)
        let c = 1
        hide.style.display = 'block'
        tab.innerHTML = ''
        tab.style.fontSize = '1em'
        tab.style.width = '250px'
        tab.style.padding = '10px'
        tab.style.borderRadius = '10px'
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}