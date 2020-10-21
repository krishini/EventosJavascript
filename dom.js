

document.title = 'adsfads'

console.log(document.doctype)
console.log(document.head)
console.log(document.body)
//console.log(document.all)
console.log(document.all[10])

console.log(document.getElementById('main-header'))
console.log(document.getElementById('header-title'))

var encabezado = document.getElementById('header-title')

//textContent = 'Algo'

var edadJuan = 15
/*
if(edadJuan>18){
//muestra todo el contenido incluyendo si esta escondido: display none
encabezado.textContent = 'Juna podes entrar'
}else{
//puedo agregar etiquetas html
encabezado.innerHTML ='<h1>No podes</h1>'
alert('alerta intruso')
}
//solo el texto...que se muestra
//encabezado.innerText = 'Probando otro texto'
*/
var items = document.getElementsByClassName('list-group-item')

console.log(items)
console.log(items[2])

var dormidos = true

if(dormidos){

items[2].textContent = 'Sabrina Sampol'

}

items[2].style.fontWeight = 'bold'

items[2].style.backgroundColor = 'yellow'


for(var i= 0; i<items.length;i++){

    items[i].style.backgroundColor = 'yellow'

}


//por TagName
var header1 = document.getElementsByTagName('li')
var header2 = document.getElementsByTagName('li')
var header3 = document.getElementsByTagName('a')
var header = document.getElementsByTagName('list')

console.log(header)


//seleccionar por Query

var header = document.querySelector('#main-header')

var input = document.querySelector('input')

var clase1 = document.querySelector('.list-group')

var titulosVarios = document.querySelectorAll('title')

//



var probandoBoton = document.getElementById('button')

probandoBoton.addEventListener('click', funcionF)

function funcionF(){

document.getElementById('header-title').style.backgroundColor = 'red'
document.getElementById('header-title').textContent = 'Color rojo'

var valorBoton = document.getElementById('inputUnico')

console.log(valorBoton.value)
    
console.log('hola probando el click del mouse')

var textoAgregado = document.getElementById('output')

var numero = valorBoton.value * 2

textoAgregado.textContent = numero
 


}


var agregarOverlay = document.getElementById('agregarClase')

agregarOverlay.addEventListener('click',activarModal)


function activarModal() {
    
    document.getElementById('overlay').style.display = 'block'
    document.getElementById('modal').style.display = 'block'
    console.log('probando modal')
}



var tomarTexto = document.querySelector('input[type="text"]')

tomarTexto.addEventListener('keydown',duplicarTexto)

function duplicarTexto(e){

    console.log(e)
    console.log(e.target.value)

    var textoAgregado = document.getElementById('output')



textoAgregado.textContent = e.target.value

}







var miArray = [1,1,1]
var miArrayNombres = ['alberto','jaime','perez','juan']













