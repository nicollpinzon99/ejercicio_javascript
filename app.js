//Ejercicio 1

// let nomproducto = "Reloj Rolex Submariner";
// let precioproducto = 35000;
// let disproducto = true;

// console.log(nomproducto,precioproducto,disproducto);
// console.log(typeof(nomproducto,precioproducto,disproducto));

//Ejercicio 2

// let comensales = 5;
// comensales = comensales + 2;
// comensales = comensales + 4;
// comensales++;
// comensales = comensales + 4;

// console.log(comensales)


//Ejercicio 3

// let producto = " cuaderno";
// let cantidad = 3;
// let precio = 2500;
// let total;
// let dinero_cliente = 10000;
// let cambio;

// total = precio * cantidad;
// cambio = dinero_cliente - total;

// console.log("El cliente ha comprado " + cantidad + producto + " a un precio total de " + total + "€.")
// console.log("El cliente paga " + dinero_cliente + "€. El cliente recibe " + cambio + "€ de cambio." )


//Ejercicio 4

// let producto = " bolsa de tierra";
// let cantidad = 2;
// let precio = 4200;
// let dinero_cliente = 15000;
// let cambio;
// subtotal = precio * cantidad;
// //console.log(subtotal);
// cantidad++;
// subtotal = precio * cantidad;
// //cambio = dinero_cliente - subtotal;

// //console.log("Cantidad: " + cantidad);
// //console.log("Producto: " + producto);
// //console.log("Subtotal: " + subtotal);
// //console.log("Cambio: " + cambio);


// //Ejercicio 5
// let cantidad2 = 1;
// let precio2 = 8500;
// dinero_cliente = 25000;
// let total;
// subtotal2 = cantidad2 * precio2;
// total = subtotal + subtotal2;
// cambio = dinero_cliente - total;
// console.log("Subtotal tierra: " + subtotal);
// console.log("Subtotal regadera: " + subtotal2);
// console.log("Total compra: " + total);
// console.log("Cambio: " + cambio);


//Ejercicio 6

// let cantidad_amigos = 3;
// let importe_total = 28500;
// let parte_individual;

// parte_individual = importe_total/cantidad_amigos;
// console.log("La parte que pagarán por " + importe_total + " entre " + cantidad_amigos + " es de: " + parte_individual)
// cantidad_amigos = cantidad_amigos + 2;
// parte_individual = importe_total/cantidad_amigos;
// console.log("La parte que se paga esta vez por " + importe_total + " entre " + cantidad_amigos + " es de: " + parte_individual)



//Ejercicio 7

// const subtotalTierra = "12600";
// const subtotalRegadera = 8500;
// const total = subtotalTierra + subtotalRegadera;
// console.log(total);

//Está mal porque la primera variable es tipo cadena y la segunda es de tipo numérica, para solucionarlo la primera también debe ser número.

//Solución:

// const subtotalTierra = 12600;
// const subtotalRegadera = 8500;
// const total = subtotalTierra + subtotalRegadera;
// console.log(total);

// //Ejercicio 8

// // const producto = "Maceta";
// // const precio = 3500;
// // const cantidad = 2;
// // cantidad += 1;
// // const subtotal = precio * cantida;
// // const recibido = 15000;
// // const cambio = subtotal - recibido;
// // console.log("Producto: " + producto);
// // console.log("Subtotal: " + subtotal);
// // console.log("Cambio: " + cambio);

// //Los errores están: no se puede cambiar el valor de una constante, una vez dado no cambia. Hay que declararla con let.
// //La variable cantidad en la operación subtotal está mal escrita
// //El cambio está mal calculado porque, al ser recibido una cantidad superior, nos mostrará el cambio en negativo.
// //hay que invertir el orden
// //Solución:

// const producto = "Maceta";
// const precio = 3500;
// let cantidad = 2;
// cantidad++;
// const subtotal = precio * cantidad;
// const recibido = 15000;
// const cambio = recibido - subtotal;
// console.log("Producto: " + producto);
// console.log("Subtotal: " + subtotal);
// console.log("Cambio: " + cambio);

// //Ejercicio 9

// const producto1 = "maquillaje";
// const producto2 = "barra de labios";
// const producto3 = "rimmel";
// let cantidad1 = 1;
// let precio1 = 100;
// let cantidad2 = 2;
// let precio2 = 200;
// let cantidad3 = 3;
// let precio3 = 500;
// let dinero_cliente = 3000;
// let subtotal1 = precio1 * cantidad1;
// let subtotal2 = precio2 * cantidad2;
// let subtotal3 = precio3 * cantidad3;
// let total = subtotal1 + subtotal2 + subtotal3;
// let cambio = dinero_cliente - total;
// console.log("El cliente compra " + cantidad1 + " unidades de " + producto1 + ", " + cantidad2 + " unidades de " + producto2 + " y " + cantidad3 + " unidades de " + producto3)
// console.log("El total a pagar es de: " + total)
// console.log("El cliente entrega " + dinero_cliente)
// console.log("El cambio que recibe el cliente es de: " + cambio)