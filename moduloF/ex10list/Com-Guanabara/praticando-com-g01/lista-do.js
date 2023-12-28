let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

// Evento do click
let button = document.querySelector('#button')
button.addEventListener('click', adicionar)

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

// função de adicionar o número
// so vai adicionar se for valido os 2 
function adicionar(){ 
    if(isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value)) // push adicona
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()

}

// evento de click
let buttonFinalizar = document.querySelector('#finalizar')
buttonFinalizar.addEventListener('click', finalizar)

// função do evento
function finalizar(){
    if(valores.length == 0 ){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            if(menor[pos] < menor)
                    menor = valores[pos]
            
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${total} números cadastrados`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `A média é ${media}`

    }
}