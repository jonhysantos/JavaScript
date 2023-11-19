let n1 = Number(window.prompt('Digite o salário:'))
let n2 = Number(window.prompt('Bonús acrescentado:'))
let s = n1 + n2
let nome = window.prompt('Qual o seu nome ?')
document.write(`Olá, <strong>${nome}</strong>!. seu nome tem ${nome.length} letras`)
document.write(`<p>Seu nome em maiúscula é ${nome.toUpperCase()}</p>`)
document.write(`Seu nome em minúscula é ${nome.toLowerCase()}`)
document.write(`Seu salário é ${n1} com o acrescimo do bonús ${n2} Seu novo salário fica ${s.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
