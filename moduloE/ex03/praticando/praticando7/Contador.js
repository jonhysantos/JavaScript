let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let button =  document.getElementsByTagName('button')[0]
let res = document.querySelector('#res')
button.addEventListener('click', contar)
function contar(){
    if(inicio.value.length == 0){
        inicio.style.border = '3px solid red'
    }else if(fim.value.length == 0){
        inicio.style.border = 'none'
        fim.style.border = '3px solid red'
    }else if(passo.value.length == 0){
        fim.style.border = 'none'
        passo.style.border = '3px solid red'
    }else{
        passo.style.border = 'none'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = ''
        res.style.display = 'block' // escondido pelo Hidden na tag <div hidden >
        if(i < f){
            //Ordem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            // Ordem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1} `
    }
}