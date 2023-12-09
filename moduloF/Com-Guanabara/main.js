let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value,valores)){
        /*
        isNumero verifica se é um número
        !inlista verifica se não está na lista
        */ 

    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}