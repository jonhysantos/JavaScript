export let numero = document.querySelector('#txtn')
export let tab = document.querySelector('#seltab')
export let res = document.querySelector('#res')
export let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verTabuada)
export function verTabuada(){
    if(numero.value.length == 0){
        numero.style.border = '3px solid red'
    }else{
        
        tab.innerHTML = ''
        let n = Number(numero.value)
        tab.style.padding = '15px'
        tab.style.fontSize = '1.4em'
        tab.style.background = 'blue'
        tab.style.color = 'white'
        for(let c = 1; c <=10; c ++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
    
    
}