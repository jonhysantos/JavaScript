let num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', Tabuada)
function Tabuada(){
    if(num.value.length == 0){
        num.style.border = '3px solid red'
    }else{
        tab.style.width = '250px'
        tab.style.fontSize = '1.4em'
        tab.style.padding = '15px'
        tab.style.textAlign = 'center'
        tab.style.text = 'justify'
        let n = Number(num.value)
        let c = 1
        let hide = document.querySelector('#hide')
        hide.style.display = 'block'
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}