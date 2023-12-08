let inicio = document.querySelector('#txti')
let fim = document.querySelector('#txtf')
let passo = document.querySelector('#txtp')
let res = document.querySelector('#res')
res.style.fontSize = '1.8em'
res.style.display = 'none'
let button = document.getElementsByTagName('button')[0]
button.addEventListener('click', verificar)
function verificar() {
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Faltam dados, Por favor preencha os dados corretamente')
    } else {
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.style.display = 'block'
        if (i < f) {
            // Ordem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            // Ordem descrecente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`

    }
}