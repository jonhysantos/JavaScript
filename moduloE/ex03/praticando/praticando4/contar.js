let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector("#txtp")
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', contar)
function contar(){
    if(inicio.value.length == 0 ){
        inicio.style.border = '2px solid red'
    }else if(fim.value.length == 0){
        inicio.style.border = 'none'
        fim.style.border = '2px solid red'
    }else if(passo.value.length == 0){
        fim.style.border = 'none'
        passo.style.border = '2px solid red'
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f){
            // Ordem crescente
            for(let c = i; c <= f; c += p ){
                res.innerHTML += `${c}\u{1f449}`
            }
        }else{
            // Ordem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c}\u{1f449}`
            }
        }
        res.style.display = 'block'
    }
}