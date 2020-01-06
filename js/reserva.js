class Reserva{
    constructor(fecha, cantidad, precio, descuento){
        this.fecha = fecha;
        this.personas = cantidad;
        this.precio = precio;
        this.descuento = descuento;
    }
    precioBase = () => this.precio * this.personas;
    precioFinal = () => {
        let precioBase = this.precioBase();
        let precioActualizado = precioBase;
        let descuentos = this.descuento;
        let personas = this.personas;
        let chequearDescCupon = () => {
            switch(descuentos){
            case "DES15":
                precioActualizado = precioBase * 0.85;
                break;
            case "DES200":
                precioActualizado = precioBase - 200;
                break;
            case "DES1":
                precioActualizado = precioBase - this.precio;
                break;
            case "":
                precioActualizado;
            }
        }
        let chequearDescCant = () => {
            if(personas >= 4 && personas <= 6){
                // se aplica 5% de descuento
                return precioActualizado * 0.95;
            } else if(personas >= 7 && personas <= 8){
                // se aplica 10% de descuento
                return precioActualizado * 0.90;
            } else if(personas > 8){
                // se aplica 15% de descuento
                return precioActualizado * 0.85;
            } else {
                return precioActualizado;
            }
        }
        let chequearAdicionales = () => {
            let fecha = this.fecha.getDay();
            let hora = this.fecha.getHours();
            if (13 <= hora <= 14 || 20 <= hora <= 21){
                return precioActualizado * 1.05;
            }
            if(fecha == 0 || fecha == 5 || fecha == 6){
                return precioActualizado * 1.10;
            }
        }
        chequearDescCupon();
        chequearDescCant();
        chequearAdicionales();
        return precioActualizado;
    }
}