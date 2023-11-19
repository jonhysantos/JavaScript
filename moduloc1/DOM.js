let area = document.querySelector('div#area')
area.addEventListener('mouseenter', entrou)
area.addEventListener('mousemove', movendo)
area.addEventListener('mouseout', saiu)
function entrou()  {
    area.style.width = '400px'
    area.style.height = '400px'
    area.style.position = 'absolute'

}

function movendo()  {
    area.style.width = '400px'
    area.style.height = '400px'
    area.style.position = 'absolute'

}

function saiu() {
    area.style.width = '200px'
    area.style.height = '200px'
    area.style.position = 'relative'
}