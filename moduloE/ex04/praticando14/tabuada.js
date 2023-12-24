let num = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click',verTabuada)
function verTabuada(){
    if(num.value.length == 0){
        num.style.border = '3px solid red'
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c ++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}