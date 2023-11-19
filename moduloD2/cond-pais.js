let País = document.querySelector('input#pais')
let res = document.querySelector('p#res')
let button = document.querySelector('input#button')
button.addEventListener('click', verificar)
function verificar(){
    if(País.value.length == ''){
        País.style.border = '2px solid red'
    }else if(País.value == 'Brasil'){
        res.innerHTML = `Seu País de origem é <strong>${País.value}</strong><br>`
        res.innerHTML += 'Você é Brasileiro'
    }else{
           res.innerHTML = `Seu País de origem é <strong>${País.value}</strong><br>`
        res.innerHTML += 'Você é estrangeiro'
     
    }
    
}