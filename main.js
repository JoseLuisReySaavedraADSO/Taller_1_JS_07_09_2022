addEventListener("DOMContentLoaded", ()=>{
    //     Escribir un programa que calcule la velocidad de un proyectil que recorre 2 Km en 5 minutos. Expresar
    // el resultado en metros/segundo. Velocidad = espacio/tiempo.


    let distancia = Number(prompt("Ingrese la distancia que recorre el proyectil", 5));
    let tiempo = Number(prompt("En cuantos minutos los recorre? ", 10));
    let minutos = tiempo * 60;
    let metros = distancia * 1000;
    let velocidad = metros / minutos
    document.body.insertAdjacentHTML("beforeend", ` <div class="myStyle">La velocidad de la bala es de ${velocidad}</div> `);
})