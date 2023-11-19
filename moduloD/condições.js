let button = document.querySelector('input#button')
button.addEventListener('click', calcular)
function calcular(){
let vel = document.querySelector('input#vel')
let res = document.querySelector('div#res')
let velocidade = Number(vel.value)
res.innerHTML = `Sua velocidade atual é de ${velocidade}km/h <br>`
if(velocidade > 60) {
    res.innerHTML = `MULTADO!,Sua velocidade atual é de ${velocidade}km/h <br>`
   
}
 res.innerHTML += 'Dirija sempre com o sinto de segurança'
}


