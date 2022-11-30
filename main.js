


alert("Hola bienvenido a Pizza Nostra. Siga las intrucciones para hacer su pedido ");
let nombre = prompt("Ingrese su nombre")
while (nombre === "") {
    nombre = prompt("Ingrese su nombre");
}

let direccion = prompt("Ingrese su direccion de envio")
while (direccion === "") {
    direccion = prompt("Ingrese su direccion de envio");
}

function nombreInicial() {
    alert("Genial " +  nombre  + " comencemos con tu pedido")
}



function seleccionePedido() {
    let pedido;
    do {
        pedido = parseInt(prompt("seleccione su pedido. \n\n que tamaño de pizza te gustaria pedir.\n\n1- Pizza Grande\n2- Pizza Chica\n3- Pizza individual"));
    } while (pedido != 1 && pedido != 2 && pedido != 3 && pedido != 4);
    switch (pedido) {
        case 1:
            return "Pizza Grande";
        case 2:
            return "Pizza Chica";
        case 3:
            return "Pizza Individual";
       
    }
}

function pedidoPizza () {
    let pizza;
    do{
     pizza = parseInt(prompt("¿Qué tipo de pizza te gustaria llevar ? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- Muzzarella" + "\n" + "2.- Napolitana" + "\n" + "3.- Especial" + "\n" + "4.- Americana" + "\n"));
 } while (pizza != 1 && pizza != 2 && pizza != 3 && pizza != 4);

    switch (pizza) {
        case 1:
            return "Muzzarella";
        case 2:
            return "Napolitana";
        case 3:
            return "Especial";
        case 4:
            return "Americana";
        
    }
}

function elegirBebida() {
    let bebida;
    do {
        bebida = parseInt(prompt("Seleccione bebida.\n\n1- Coca-Cola 2.25 lt \n2- Fanta 2.25lt \n3- Sprite 2.25lt \n4- Cerveza Quilmes 1lt \n5- Patagonia 1lt\n6- Sin bebida"));
    } while (bebida !=1 && bebida !=2 && bebida !=3 && bebida !=4 && bebida !=5 && bebida !=6);
    switch(bebida){
        case 1:
            return "Coca-Cola";
        case 2:
            return "Fanta";
        case 3:
            return "Sprite";
        case 4:
            return "Quilmes";
        case 5:
            return "Patagonia";
            case 6:
            return "Sin Bebida";
    }
}

function preciosPedido (pedido, pizza, bebida) {

    if (pedido === "Pizza Grande" && pizza === "Muzzarella" && bebida === "Coca-Cola") {
                return 1200;
    } else if (pedido === "Pizza Grande" && pizza === "Muzzarella" && bebida === "Fanta") {
        return 1000;
    } else if (pedido === "Pizza Grande" && pizza === "Muzzarella" && bebida === "Sprite") {
        return 1000;
    } else if (pedido === "Pizza Grande" && pizza === "Muzzarella" && bebida === "Quilmes") {
        return 1300;
    } else if (pedido === "Pizza Grande" && pizza === "Muzzarella" && bebida === "Patagonia") {
        return 1350;
    } else if (pedido === "Pizza Grande" && pizza === "Muzzarella" && bebida === "Sin Bebida") {
        return 800;
    } else if (pedido === "Pizza Grande" && pizza === "Napolitana" && bebida === "Coca-Cola") {
        return 1500;
    } else if (pedido === "Pizza Grande" && pizza === "Napolitana" && bebida === "Fanta") {
        return 1400;
    } else if (pedido === "Pizza Grande" && pizza === "Napolitana" && bebida === "Sprite") {
        return 1300;
    } else if (pedido === "Pizza Grande" && pizza === "Napolitana" && bebida === "Quilmes") {
        return 1600;
    } else if (pedido === "Pizza Grande" && pizza === "Napolitana" && bebida === "Patagonia") {
        return 1650;
    } else if (pedido === "Pizza Grande" && pizza === "Napolitana" && bebida === "Sin Bebida") {
        return 1100;
    } else if (pedido === "Pizza Grande" && pizza === "Especial" && bebida === "Coca-Cola") {
        return 1800;
    } else if (pedido === "Pizza Grande" && pizza === "Especial" && bebida === "Fanta") {
        return 1600;
    } else if (pedido === "Pizza Grande" && pizza === "Especial" && bebida === "Sprite") {
        return 1500;
    } else if (pedido === "Pizza Grande" && pizza === "Especial" && bebida === "Quilmes") {
        return 1900;
    } else if (pedido === "Pizza Grande" && pizza === "Especial" && bebida === "Patagonia") {
        return 1950;
    } else if (pedido === "Pizza Grande" && pizza === "Especial" && bebida === "Sin Bebida") {
        return 1200;
    } else if (pedido === "Pizza Grande" && pizza === "Americana" && bebida === "Coca-Cola") {
        return 1850;
    } else if (pedido === "Pizza Grande" && pizza === "Americana" && bebida === "Fanta") {
        return 1650;
    } else if (pedido === "Pizza Grande" && pizza === "Americana" && bebida === "Sprite") {
        return 1550;
    } else if (pedido === "Pizza Grande" && pizza === "Americana" && bebida === "Quilmes") {
        return 1950;
    } else if (pedido === "Pizza Grande" && pizza === "Americana" && bebida === "Patagonia") {
        return 2000;
    } else if (pedido === "Pizza Grande" && pizza === "Americana" && bebida === "Sin Bebida") {
        return 1250;


    //jeans
    
    }if (pedido === "Pizza chica" && pizza === "Muzzarella" && bebida === "Coca-Cola") {
        return 1000;
} else if (pedido === "Pizza chica" && pizza === "Muzzarella" && bebida === "Fanta") {
return 800;
} else if (pedido === "Pizza chica" && pizza === "Muzzarella" && bebida === "Sprite") {
return 800;
} else if (pedido === "Pizza chica" && pizza === "Muzzarella" && bebida === "Quilmes") {
return 1100;
} else if (pedido === "Pizza chica" && pizza === "Muzzarella" && bebida === "Patagonia") {
return 1150;
} else if (pedido === "Pizza chica" && pizza === "Muzzarella" && bebida === "Sin Bebida") {
return 600;
} else if (pedido === "Pizza chica" && pizza === "Napolitana" && bebida === "Coca-Cola") {
return 1300;
} else if (pedido === "Pizza chica" && pizza === "Napolitana" && bebida === "Fanta") {
return 1200;
} else if (pedido === "Pizza chica" && pizza === "Napolitana" && bebida === "Sprite") {
return 1100;
} else if (pedido === "Pizza chica" && pizza === "Napolitana" && bebida === "Quilmes") {
return 1400;
} else if (pedido === "Pizza chica" && pizza === "Napolitana" && bebida === "Patagonia") {
return 1450;
} else if (pedido === "Pizza chica" && pizza === "Napolitana" && bebida === "Sin Bebida") {
return 900;
} else if (pedido === "Pizza chica" && pizza === "Especial" && bebida === "Coca-Cola") {
return 1600;
} else if (pedido === "Pizza chica" && pizza === "Especial" && bebida === "Fanta") {
return 1400;
} else if (pedido === "Pizza chica" && pizza === "Especial" && bebida === "Sprite") {
return 1300;
} else if (pedido === "Pizza chica" && pizza === "Especial" && bebida === "Quilmes") {
return 1700;
} else if (pedido === "Pizza chica" && pizza === "Especial" && bebida === "Patagonia") {
return 1750;
} else if (pedido === "Pizza chica" && pizza === "Especial" && bebida === "Sin Bebida") {
return 1000;
} else if (pedido === "Pizza chica" && pizza === "Americana" && bebida === "Coca-Cola") {
return 1650;
} else if (pedido === "Pizza chica" && pizza === "Americana" && bebida === "Fanta") {
return 1450;
} else if (pedido === "Pizza chica" && pizza === "Americana" && bebida === "Sprite") {
return 1350;
} else if (pedido === "Pizza chica" && pizza === "Americana" && bebida === "Quilmes") {
return 1750;
} else if (pedido === "Pizza chica" && pizza === "Americana" && bebida === "Patagonia") {
return 1800;
} else if (pedido === "Pizza chica" && pizza === "Americana" && bebida === "Sin Bebida") {
return 1050;

    //vestidos

}if (pedido === "Pizza Individual" && pizza === "Muzzarella" && bebida === "Coca-Cola") {
    return 1000;
} else if (pedido === "Pizza Individual" && pizza === "Muzzarella" && bebida === "Fanta") {
return 800;
} else if (pedido === "Pizza Individual" && pizza === "Muzzarella" && bebida === "Sprite") {
return 800;
} else if (pedido === "Pizza Individual" && pizza === "Muzzarella" && bebida === "Quilmes") {
return 1100;
} else if (pedido === "Pizza Individual" && pizza === "Muzzarella" && bebida === "Patagonia") {
return 1150;
} else if (pedido === "Pizza Individual" && pizza === "Muzzarella" && bebida === "Sin Bebida") {
return 600;
} else if (pedido === "Pizza Individual" && pizza === "Napolitana" && bebida === "Coca-Cola") {
return 1300;
} else if (pedido === "Pizza Individual" && pizza === "Napolitana" && bebida === "Fanta") {
return 1200;
} else if (pedido === "Pizza Individual" && pizza === "Napolitana" && bebida === "Sprite") {
return 1100;
} else if (pedido === "Pizza Individual" && pizza === "Napolitana" && bebida === "Quilmes") {
return 1400;
} else if (pedido === "Pizza Individual" && pizza === "Napolitana" && bebida === "Patagonia") {
return 1450;
} else if (pedido === "Pizza Individual" && pizza === "Napolitana" && bebida === "Sin Bebida") {
return 900;
} else if (pedido === "Pizza Individual" && pizza === "Especial" && bebida === "Coca-Cola") {
return 1600;
} else if (pedido === "Pizza Individual" && pizza === "Especial" && bebida === "Fanta") {
return 1400;
} else if (pedido === "Pizza Individual" && pizza === "Especial" && bebida === "Sprite") {
return 1300;
} else if (pedido === "Pizza Individual" && pizza === "Especial" && bebida === "Quilmes") {
return 1700;
} else if (pedido === "Pizza Individual" && pizza === "Especial" && bebida === "Patagonia") {
return 1750;
} else if (pedido === "Pizza Individual" && pizza === "Especial" && bebida === "Sin Bebida") {
return 1000;
} else if (pedido === "Pizza Individual" && pizza === "Americana" && bebida === "Coca-Cola") {
return 1650;
} else if (pedido === "Pizza Individual" && pizza === "Americana" && bebida === "Fanta") {
return 1450;
} else if (pedido === "Pizza Individual" && pizza === "Americana" && bebida === "Sprite") {
return 1350;
} else if (pedido === "Pizza Individual" && pizza === "Americana" && bebida === "Quilmes") {
return 1750;
} else if (pedido === "Pizza Individual" && pizza === "Americana" && bebida === "Patagonia") {
return 1800;
} else if (pedido === "Pizza Individual" && pizza === "Americana" && bebida === "Sin Bebida") {
return 1050;

}
}

function precioFinal (nNombre, pizza, bebida, precio){
    alert("El precio de " + nNombre + " " + pizza + " + la bebida " + bebida + "\nes de $" + precio)
}

function cobrar (nNombre, precio){
    let pago;
    do {
        pago = parseInt(prompt("Con cuanto queres pagas?. El total de " + nNombre + " es de $" + precio));
        while (isNaN(pago)) {
            alert("Monto con el que se abona ");
            pago = parseInt(prompt("Con cuanto pagas?.  " + nNombre + " es de $" + precio));
        }
    } while (pago < precio);
   alert("Gracias " + nombre + " su pedido fue tomado con exito, " + nNombre + pizzaN + "  Su vuelto es de $" + (pago - precio) + " La direccion de envio " + direccion)
}

function saludoFinal (){
    alert("Estaremos pronto entregando tu pedido. Atte: Pizza Nostra. " );{
    
}
}



nombreInicial ();
let pedidoN = seleccionePedido();
let pizzaN = pedidoPizza ()
let bebidaN = elegirBebida();
let precioPizzeria = preciosPedido(pedidoN, pizzaN, bebidaN);
precioFinal(pedidoN, pizzaN, bebidaN, precioPizzeria);
cobrar(pedidoN, precioPizzeria);
saludoFinal();