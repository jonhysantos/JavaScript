
function somar() {
let n1 = document.querySelector('input#n1')
let n2 = document.querySelector('input#n2')
let res = document.querySelector('div#res')
let n = Number(n1.value)
let m = Number(n2.value)
    let s = n + m
    res.innerHTML = `O resultado é esse ${s}`

}

