//agrega a la pantalla el valor del boton de la calculadora que clicleamos
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//vaciar pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//toma valor de la pantalla y lo ejecuta
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}