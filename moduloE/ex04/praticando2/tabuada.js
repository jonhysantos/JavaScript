let nt = document.querySelector('#txtn')
let tab = document.querySelector('#seltab')
let button = document.getElementsByTagName('button')[0]
let hide = document.querySelector('#hide')
button.addEventListener('click', tabuada)
function tabuada(){
    if(nt.value.length == 0){
        nt.style.border = '3px solid red'
    }else{
        let n = Number(nt.value)
        hide.style.display = 'block'
        tab.style.fontSize = '1.4em'
        tab.style.borderRadius = '10px'
        tab.innerHTML = ''
        
        /*
        let c = 1
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        */
       for(let c = 1; c <= 10; c++){
        let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
       }
        
    }
}