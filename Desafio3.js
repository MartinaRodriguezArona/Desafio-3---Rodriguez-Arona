const nombreProducto = "PC" 

const precioUnitario = 3684920

let E = parseInt(prompt('ingrese la cantidad deseada: '));

let PrecioSinDescuento = precioUnitario * E

let PrecioConDescuento = PrecioSinDescuento - (PrecioSinDescuento * 10/100) 

if(E >= 5) {
    alert(`costo total con un descuento del 10%:  \n  ${"$" + PrecioConDescuento}`)
} else{
    alert(`Costo total de su compra:  \n ${"$" + PrecioSinDescuento}` ) 
}