//EJERCICIO 1
//let numero = prompt("Ingrese un número");
// if(Number.parseInt(numero)>0){
//     alert("Número positivo");
// }else if(Number.parseInt(numero)<0){
//     alert("Número negativo");
// }

//EJERCICIO 2
//let numero = prompt("Ingrese un número");
// if(Number.parseInt(numero) % 2 == 0){
//     alert("Número divisible entre dos");
// }else{
//     alert("Número no divisible entre dos");
// }

//EJERCICIO 3
// let numero1 = prompt("Ingrese número 1");
// let numero2 = prompt("Ingrese número 2");
// if(Number.parseInt(numero1) > Number.parseInt(numero2)){
//     alert("Número(1): " + numero1 + " es mayor al número(2): " + numero2);
// }else if(Number.parseInt(numero2) > Number.parseInt(numero1)){
//     alert("Número(2): " + numero2 + " es mayor al número(1): " + numero1);
// }

//EJERCICIO 4
// let numero = prompt("Ingrese un número");
// for (let i = 1; i <= numero; i++) {
//     if (Number.parseInt(i) % 5 == 0) {
//         alert("Multiplos de 5: " + i);
//     }
// }
//EJERCICIO 5
// let añoNacimiento = prompt("Ingrese su año de nacimiento");
// const añoActual = 2023;
// let edad = añoActual - Number.parseInt(añoNacimiento);
// if(edad >= 18 && edad <= 99){
//     alert("Hola, tu edad es: " + edad);
// }else{
//     alert("Hola, usted no puede trabajar");
// }
//EJERCICIO 6
// let numero1 = prompt("Ingrese número 1");
// let numero2 = prompt("Ingrese número 2");
// let numero3 = prompt("Ingrese número 3");
// if (Number.parseInt(numero1) > Number.parseInt(numero2) && Number.parseInt(numero1) > Number.parseInt(numero3)) {
//     alert("Número(1): " + numero1 + " es mayor al número(2): " + numero2 + " y que el número(3): " + numero3);
// } else if (Number.parseInt(numero1) === Number.parseInt(numero2) && Number.parseInt(numero1) > Number.parseInt(numero3)) {
//     alert("Número(1): " + numero1 + " es igual al número(2): " + numero2 + " y son mayores que el número(3) es: " + numero3);
// }
// else if (Number.parseInt(numero2) > Number.parseInt(numero1) && Number.parseInt(numero2) > Number.parseInt(numero3)) {
//     alert("Número(2): " + numero2 + " es mayor al número(1): " + numero1 + " y que el número(3): " + numero3);
// } else if (Number.parseInt(numero2) === Number.parseInt(numero3) && Number.parseInt(numero3) > Number.parseInt(numero1)) {
//     alert("Número(2): " + numero2 + " es igual al número(3): " + numero3 + " y son mayores que el número(1) es: " + numero1);
// }
// else if (Number.parseInt(numero3) > Number.parseInt(numero1) && Number.parseInt(numero3) > Number.parseInt(numero1)) {
//     alert("Número(3): " + numero3 + " es mayor al número(1): " + numero1 + " y que el número(2): " + numero2);
// } else if (Number.parseInt(numero3) === Number.parseInt(numero1) && Number.parseInt(numero3) > Number.parseInt(numero2)) {
//     alert("Número(3): " + numero3 + " es igual al número(1): " + numero1 + " y son mayores que el número(2) es: " + numero2);
// }
//EJERCICIO 7
// let dia = prompt("Ingrese el nombre de un día de la semana");
// if(dia.toLocaleLowerCase() === "lunes"){
//     alert("¡Hola, hoy se inicia la semana!");
// }else if(dia.toLocaleLowerCase() === "viernes"){
//     alert("¡Hola, ya es casi fin de semana!");
// }else if(dia.toLocaleLowerCase() === "sabado" || dia.toLocaleLowerCase() === "domingo"){
//     alert("¡Hola, ya es fin de semana, disfruta tus días libres!");
// }else if(dia.toLocaleLowerCase() === "martes" || dia.toLocaleLowerCase() === "miercoles" || dia.toLocaleLowerCase() === "jueves"){
//     alert("¡Hola, estamos a mitad de semana, tranquilo!");
// }else{
//     alert("Solo ingrese un dia de la semana");
// }
//EJERCICIO 8
// let calificacion = prompt("Ingrese una calificación del 1 al 10");
// if (Number.parseInt(calificacion) >= 1 && Number.parseInt(calificacion) <= 10) {
//   if (Number.parseInt(calificacion) < 6) {
//     alert("Usted está reprobado");
//   }else if (Number.parseInt(calificacion) >= 6 && Number.parseInt(calificacion) <= 8 ){
//     alert("Regular");
//   }else if (Number.parseInt(calificacion) === 9){
//     alert("Bien");
//   }else if (Number.parseInt(calificacion) === 10 ){
//     alert("Excelente");
//   }
// }else{
//     alert("Por favor, ingrese un número que esté dentro del rango");
// }
//EJERCICIO 9
// let edad = prompt("Ingrese su edad");
// if(Number.parseInt(edad) >= 18 && Number.parseInt(edad) <= 99){
//     alert("Hola, usted puede votar");
// }else{
//     alert("Hola, usted no puede votar");
// }
//EJERCICIO 10
// let numero1 = prompt("Ingrese número 1");
// let numero2 = prompt("Ingrese número 2");
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
//     if (Number.parseInt(numero1) === i) {
//         console.log("--- Número: " + i + " ¡Lotería! ---");
//     }
//     if (Number.parseInt(numero2) === i) {
//         console.log("--- Número: " + i + " ¡Lotería! ---");
//     }
// }
//EJERCICIO11
// let añoIngreso = prompt("Ingrese el año en que comenzó sus labores en la empresa");
// const añoActual = 2023;
// let totalAños = añoActual - Number.parseInt(añoIngreso);
// if(Number.parseInt(totalAños) === 1){
//     alert("Te corresponde un bono de $100");
// }else if(Number.parseInt(totalAños) === 2){
//     alert("Te corresponde un bono de $200");
// }if(Number.parseInt(totalAños) === 3){
//     alert("Te corresponde un bono de $300");
// }if(Number.parseInt(totalAños) === 4){
//     alert("Te corresponde un bono de $400");
// }if(Number.parseInt(totalAños) === 5){
//     alert("Te corresponde un bono de $500");
// }if(Number.parseInt(totalAños) > 5){
//     alert("Te corresponde un bono de $1000");
// }
//EJERCICIO12
// const salarioInicial = 1500;
// let salarioEn6Años;
// let bono;
// let acum = 0;
// for (let i = 1; i <= 6; i++) {
//     salarioEn6Años = salarioInicial * 0.10;
//     acum = acum + salarioEn6Años;
//     alert("Recibió en el año(" + i + "): " + salarioEn6Años);
// }
// alert("A cabo de los 6 años, recibió un total de: " + acum);
//EJERCICIO13
// let helado = prompt("Elija el sabor del helado");
// let precioHelado = 50;
// let topping = prompt("Topping a elegir");
// if (topping.toLocaleLowerCase() === "oreo"){
//     alert("Monto a pagar: " + (Number.parseInt(precioHelado) + 10) + " MXN");
// }else if (topping.toLocaleLowerCase() === "kitkat"){
//     alert("Monto a pagar: " + (Number.parseInt(precioHelado) + 15) + " MXN");
// }else if (topping.toLocaleLowerCase() === "brownie"){
//     alert("Monto a pagar: " + (Number.parseInt(precioHelado) + 20) + " MXN");
// }else{
//     alert("No tenemos disponible ese topping, monto a pagar: " + Number.parseInt(precioHelado) + " MXN");
// }
//EJERCICIO14
// let programa = prompt("Ingrese el programa a elegir: Course, Carrera o Master");
// let course = 4999;
// let carrera = 3999;
// let master = 2999;
// let precio_total;
// let precio_con_dscto;
// if (programa.toLocaleLowerCase() === "course") {
//     alert("Monto a pagar por mes: " + course + " MXN");
//     let beca = prompt("¿Cuenta con alguna beca?");
//     if (beca.toLocaleLowerCase() === "si") {
//         let nombreBeca = prompt("Ingrese nombre de beca");
//         if (nombreBeca.toLocaleLowerCase() === "facebook") {
//             alert("Cuenta con un 20% de descuento");
//             precio_total = course * 2;
//             precio_con_dscto = precio_totaltotal - (precio_totaltotal * 0.2);
//             alert("El programa Course dura 2 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         }else if (nombreBeca.toLocaleLowerCase() === "google") {
//             alert("Cuenta con un 15% de descuento");
//             precio_total = course * 2;
//             precio_con_dscto = precio_total - (precio_total * 0.15);
//             alert("El programa Course dura 2 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         } else if (nombreBeca.toLocaleLowerCase() === "jesua") {
//             alert("Cuenta con un 50% de descuento");
//             precio_total = course * 2;
//             precio_con_dscto = precio_total - (precio_total * 0.5);
//             alert("El programa Course dura 2 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         }
//     } else if (beca.toLocaleLowerCase() === "no") {
//         precio_total = course * 2;
//         alert("El programa Course dura 2 meses, sin descuento, el monto a pagar es: " + precio_total + " MXN");
//     }
// }else if (programa.toLocaleLowerCase() === "carrera") {
//     alert("Monto a pagar por mes: " + carrera + " MXN");
//     let beca = prompt("¿Cuenta con alguna beca?");
//     if (beca.toLocaleLowerCase() === "si") {
//         let nombreBeca = prompt("Ingrese nombre de beca");
//         if (nombreBeca.toLocaleLowerCase() === "facebook") {
//             alert("Cuenta con un 20% de descuento");
//             precio_total = carrera * 6;
//             precio_con_dscto = precio_totaltotal - (precio_totaltotal * 0.2);
//             alert("El programa Course dura 6 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         }else if (nombreBeca.toLocaleLowerCase() === "google") {
//             alert("Cuenta con un 15% de descuento");
//             precio_total = carrera * 6;
//             precio_con_dscto = precio_total - (precio_total * 0.15);
//             alert("El programa Course dura 6 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         } else if (nombreBeca.toLocaleLowerCase() === "jesua") {
//             alert("Cuenta con un 50% de descuento");
//             precio_total = carrera * 6;
//             precio_con_dscto = precio_total - (precio_total * 0.5);
//             alert("El programa Course dura 6 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         }
//     } else if (beca.toLocaleLowerCase() === "no") {
//         precio_total = carrera * 6;
//         alert("El programa Course dura 6 meses, sin descuento, el monto a pagar es: " + precio_total + " MXN");
//     }
// }else if (programa.toLocaleLowerCase() === "master") {
//     alert("Monto a pagar por mes: " + master + " MXN");
//     let beca = prompt("¿Cuenta con alguna beca?");
//     if (beca.toLocaleLowerCase() === "si") {
//         let nombreBeca = prompt("Ingrese nombre de beca");
//         if (nombreBeca.toLocaleLowerCase() === "facebook") {
//             alert("Cuenta con un 20% de descuento");
//             precio_total = master * 12;
//             precio_con_dscto = precio_totaltotal - (precio_totaltotal * 0.2);
//             alert("El programa Course dura 12 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         }else if (nombreBeca.toLocaleLowerCase() === "google") {
//             alert("Cuenta con un 15% de descuento");
//             precio_total = master * 12;
//             precio_con_dscto = precio_total - (precio_total * 0.15);
//             alert("El programa Course dura 12 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         } else if (nombreBeca.toLocaleLowerCase() === "jesua") {
//             alert("Cuenta con un 50% de descuento");
//             precio_total = master * 12;
//             precio_con_dscto = precio_total - (precio_total * 0.5);
//             alert("El programa Course dura 12 meses, por lo que con el descuento aplicado, el monto a pagar es: " + precio_con_dscto + " MXN");
//         }
//     } else if (beca.toLocaleLowerCase() === "no") {
//         precio_total = master * 12;
//         alert("El programa Course dura 12 meses, sin descuento, el monto a pagar es: " + precio_total + " MXN");
//     }
// }else{
//     alert("Por favor, escoga un programa disponible");
// }
//EJERCICIO15
let vehiculo = prompt("Ingrese tipo de vehiculo: Moto, Coche o Autobus");
const motoxkm = 0.10;
const cochexkm = 0.20;
const busxkm = 0.50;
let total_pagar;
if (vehiculo.toLocaleLowerCase() === "moto") {
    let distancia = prompt("Ingrese distancia recorrida");
    let litros = prompt("Ingrese litros consumidos");
    if (Number.parseInt(litros) >= 0 && Number.parseInt(litros) <= 100) {
        total_pagar = (Number.parseInt(distancia) * motoxkm) + 5;
    } if (Number.parseInt(litros) > 100) {
        total_pagar = (Number.parseInt(distancia) * motoxkm) + 10;
    }
    alert("Tipo de vehiculo: " + vehiculo + ", monto a pagar por KM: " + motoxkm + ", distancia recorrida : " + distancia + ", litros consumidos: " + litros + ", Total a pagar: " + total_pagar);
} else if (vehiculo.toLocaleLowerCase() === "coche") {
    let distancia = prompt("Ingrese distancia recorrida");
    let litros = prompt("Ingrese litros consumidos");
    if (Number.parseInt(litros) >= 0 && Number.parseInt(litros) <= 100) {
        total_pagar = (Number.parseInt(distancia) * cochexkm) + 5;
    } if (Number.parseInt(litros) > 100) {
        total_pagar = (Number.parseInt(distancia) * cochexkm) + 10;
    }
    alert("Tipo de vehiculo: " + vehiculo + ", monto a pagar por KM: " + cochexkm + ", distancia recorrida : " + distancia + ", litros consumidos: " + litros + ", Total a pagar: " + total_pagar);
} else if (vehiculo.toLocaleLowerCase() === "autobus") {
    let distancia = prompt("Ingrese distancia recorrida");
    let litros = prompt("Ingrese litros consumidos");
    if (Number.parseInt(litros) >= 0 && Number.parseInt(litros) <= 100) {
        total_pagar = (Number.parseInt(distancia) * busxkm) + 5;
    } if (Number.parseInt(litros) > 100) {
        total_pagar = (Number.parseInt(distancia) * busxkm) + 10;
    }
    alert("Tipo de vehiculo: " + vehiculo + ", monto a pagar por KM: " + busxkm + ", distancia recorrida : " + distancia + ", litros consumidos: " + litros + ", Total a pagar: " + total_pagar);
} else {
    alert("Ingrese un vehiculo disponible");
}
