addEventListener("DOMContentLoaded", ()=>{
    // Calcular una ecuacion

    let a = Number(prompt("Ingrese el valor de A", 5));
    let b = Number(prompt("Ingrese el valor de B", 8));
    let c = Number(prompt("Ingrese el valor de C", 3));
    let ecuacion = (a+7*c)/(b+2-a)+2*b
    document.body.insertAdjacentHTML("beforeend", ` <div class="myStyle">El valor de la ecuacion es ${ecuacion}</div> `);
})