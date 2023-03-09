

let contador1 = 0;
let resultado = 0;
let subtotal = 0;
let hamburguesaSimple = 2500;
let hamburguesaConCheddar = 3000;
let hamburguesaConCheddarYBacon = 3500;



while(resultado != 4){
resultado = parseInt(prompt("elija sus hamburguesas indicando el numero correspondiente 1- Hamburguesa simple 2- Hamburguesa con queso cheddar 3- Hamburguesa con queso cheddar y bacon 4- Siguiente"));
    switch(resultado){
        case 1 : console.log(contador1+= hamburguesaSimple);
                    alert("Usted eligio Hamburguesa Simple $" + hamburguesaSimple);
                    alert("Quisiera agregar otra hamburguesa? De haber finalizado su pedido marque el numero 4");
        break;
        case 2 : console.log(contador1+= hamburguesaConCheddar);
                    alert("Usted eligio Hamburguesa con queso cheddar $" + hamburguesaConCheddar);
                    alert("Quisiera agregar otra hamburguesa? De haber finalizado su pedido marque el numero 4");
        break;
        case 3 : console.log(contador1+= hamburguesaConCheddarYBacon);
                    alert("Usted eligio Hamburguesa con queso cheddar y bacon $" + hamburguesaConCheddarYBacon);
                    alert("Quisiera agregar otra hamburguesa? De haber finalizado su pedido marque el numero 4");
        break;
        case 4 : console.log("Siguiente");
                    alert("Muchas gracias, quisiera agregar acompañamientos a su hamburguesa?");
        break;
        default:
            alert("Seleccione una hamburguesa con su numero indicado o en su defecto el numero para continuar");
            break;
    }
}

subtotal = contador1;
alert("Su compra suma un total de $" + subtotal + " por el momento");
console.log(subtotal);

let contador2 = 0;
let papasFritas = 700;
let ensalada = 500;

while(resultado != 3){
    resultado = parseInt(prompt("elija el acompañamientos indicando el numero correspondiente 1- Papas Fritas 2- Ensalada 3- Siguiente"));
    switch(resultado){
        case 1 : console.log(contador2+= papasFritas);
                    alert("Usted eligio Papas Fritas $" + papasFritas);
                    alert("Quisiera agregar otro acompañamiento? De haber finalizado marque el 3");
        break;
        case 2 : console.log(contador2+= ensalada);
                    alert("Usted eligio Ensalada $" + ensalada);
                    alert("Quisiera agregar otro acompañamiento? De haber finalizado marque el 3");
        break;
        case 3 : console.log("Siguiente");
                    alert("Muchas gracias, quisiera agregar bebidas a su hamburguesa?");
        break;
        default : 
        alert("Seleccione un acompañamiento con su numero indicado o en su defecto el numero para continuar");
        break;
    }
}

subtotal = contador1 + contador2;
alert("Su compra suma un total de $" + subtotal + " por el momento");
console.log(subtotal);

let contador3 = 0;
let agua = 500;
let gaseosa = 700;
let cerveza = 1000;
let vino = 1500;

while(resultado != 5){
    resultado = parseInt(prompt("elija sus bebidas indicando el numero correspondiente 1- Agua 2- Gaseosa 3- Cerveza 4- Vino 5- Siguiente"));
    switch(resultado){
        case 1 : console.log(contador3+= agua);
                    alert("Usted eligio Agua $" + agua);
                    alert("Quisiera agregar otra bebida? De haber finalizado marque el 5");
        break;
        case 2 : console.log(contador3+= gaseosa);
        alert("Usted eligio Gaseosa $" + gaseosa);
        alert("Quisiera agregar otra bebida? De haber finalizado marque el 5");
        break;
        case 3 : console.log(contador3+= cerveza);
        alert("Usted eligio Cerveza $" + cerveza);
        alert("Quisiera agregar otra bebida? De haber finalizado marque el 5");
        break;
        case 4 : console.log(contador3+= vino);
        alert("Usted eligio Vino $" + vino);
        alert("Quisiera agregar otra bebida? De haber finalizado marque el 5");
        break;
        case 5 : console.log("Siguiente");
        alert("Muchas gracias por su compra, a continuacion ingrese metodo de pago y finalizara su compra");
        break;
        default:
            alert("Seleccione una bebida con su numero indicado o en su defecto el numero para continuar");
        break;
    }
}

subtotal = contador1 + contador2 + contador3;
alert("Su compra suma un total de $" + subtotal + " por el momento");
console.log(subtotal);



let pago = 0;
let domicilio = prompt("Ingrese el domicilio donde debe ser entregado su pedido, especifique por favor entre calles para hacer mas rapida y sencilla la entrega")
let metodoDePago = parseInt(prompt("Ingrese metodo de pago indicando el numero correspondiente 1- Efectivo 2- Transferencia 3- Debito"))

if (metodoDePago == 1){
    alert("Su pedido sera entregado dentro de los proximos 40 minutos en " + domicilio + " Muchas gracias");
    console.log("$" + subtotal + " Paga en el domicilio");
} else if(metodoDePago == 2){
    alert("trasnferir $" + subtotal + " al siguiente CBU 00112233445566778899 - Alias PreEntrega1 para finalizar la compra");
    pago = parseInt(prompt("ingrese su pago")); if(pago == subtotal){
        alert("Gracias por su compra su pedido sera entregado dentro de los proximos 40 minutos en " + domicilio);
        console.log(pago - subtotal);
    }else{
        alert("Error, Volver a realizar la compra")
        console.log("No realizo el pago");
    }
}else if(metodoDePago == 3){
    alert("Ingresar datos de tarjeta para finalizar la compra, debera abonar $" + subtotal);
    prompt("Ingrese Datos de tarjeta: Numero de tarjeta, Nombre del titular, Fecha de vincimiento y Codigo de seguridad")
    pago = parseInt(prompt("ingrese su pago")); if(pago == subtotal){
        alert("Gracias por su compra su pedido sera entregado dentro de los proximos 40 minutos en " + domicilio);
        console.log(pago - subtotal);
    }else{
        alert("Error, Volver a realizar la compra")
        console.log("No realizo el pago");
    }
}else{
    alert("Su compra a sido cancelada, Muchas gracias");
    console.log("Error, No realizo el pago");
}



