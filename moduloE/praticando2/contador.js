let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', contar)
function contar(){
    if(inicio.value.length == 0){
        inicio.style.border = '2px solid red'
    }else if(fim.style.length == 0){
        fim.style.border = '2px solid red'
        inicio.style.border = '2px solid white'
    }else if(passo.value.length == 0){
        passo.style.border = '2px solid red'
    }else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(i < f ){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c}\u{1f449}`
            }
        }else{
            // Contagem decrescente
            for(let c = i; c >= f ; c -= p){
                res.innerHTML += `${c}\u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
        passo.style.border = '2px solid white'
    }
}