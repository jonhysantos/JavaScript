let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')
res.style.display = 'none'
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', contar)
function contar(){
    if(inicio.value.length == 0){
        inicio.style.border = '3px solid red'
    }else if (fim.value.length == 0){
        inicio.style.border = 'none'
        fim.style.border = '3px solid red'
    }else if(passo.value.length == 0){
        fim.style.border = 'none'
        passo.style.border = '3px solid red'
    }else{
        res.style.display = 'block'
        passo.style.border = 'none'
        res.innerHTML = ''
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // Ordem crescente
            for(let c = i; c <= f; c +=p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}