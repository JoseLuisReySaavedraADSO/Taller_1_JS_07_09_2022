addEventListener("DOMContentLoaded", ()=>{
    // Tenemos que calcular el volumen de una esfera

    let radio = Number(prompt("Ingrese el radio de la circunferencia", 5));
    let volumen = (4/3)*Math.PI*Math.pow(radio, 3)
    document.body.insertAdjacentHTML("beforeend", ` <div class="myStyle">El volumen de la circunferencia es ${volumen}</div> `);
})