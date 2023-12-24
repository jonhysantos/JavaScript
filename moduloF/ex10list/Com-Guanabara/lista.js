let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

// verificando se é um número
// Ocasião 1
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else {
        return false
    }
}

// verificando se já está em lista
// Ocasião 2
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }

}

function adicionar(){
    // Acontece se as dua ocasiões for verdade 
    if(isNumero(num.value) && ! inLista(num.value,valores)){
        valores.push(Number(num.value))
        // Adiciona na lista como último
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' // ele limpa antes de finalizar
    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){<p></p>
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            valores[pos] > maior
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        média = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} Números cadastrados </p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p> O menor valor foi ${menor} </p>`
        res.innerHTML += `<p> A soma é de ${soma} `
        res.innerHTML += `<p> A Média é ${média.toFixed(2)}`
    }
}

