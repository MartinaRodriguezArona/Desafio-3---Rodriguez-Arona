const nombreProducto = "PC" 

const precioUnitario = 3684920

let E = parseInt(prompt('ingrese la cantidad deseada: '));

let y = alert("Costo total de su compra: $"+precioUnitario*E )

let PrecioSinDescuento = precioUnitario * E

let PrecioConDescuento = PrecioSinDescuento - (PrecioSinDescuento * 10/100) 

if(E >= 5) {
    alert("costo total: $"+ PrecioConDescuento)
} else{
    alert("Costo total de su compra: $"+PrecioSinDescuento )
}