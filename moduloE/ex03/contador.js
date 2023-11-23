let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', contar)
function contar(){
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossíve contar'
    }else{
        res.innerHTML = 'Contando'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(passo <= 0){
            res.innerHTML = 'Já que não preencheu o capmpo passo, considerei o passo 1'
            p = 1
        }
        if(i < f ){
            // Contagem cresecente
            for(let c = i;c <= f;c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            // Contagem decrescente
            for(let c = i; c >= f;c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}