let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')

// evento

let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', contar)

// função 

function contar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = '<p> Atenção! Por favor preencha os dados acima para mostrar o resultado e tente novamente </p>'
        res.style.display = 'block'
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.style.display = 'block'
        if (i < f) {
            // ordem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            // ordem descrecente
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}