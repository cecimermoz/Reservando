var expect = chai.expect;

describe('Tests de la función reservarHorario(horario)', () => {

    it("Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.", () => {
        
        let prueba = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        prueba.reservarHorario("13:00");
        expect(prueba.horarios).to.have.lengthOf(2);
    });

    it("Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.", () => {
        let prueba = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        prueba.reservarHorario("12:00");
        expect(prueba.horarios).to.have.lengthOf(3);

    });

    it("Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.", () => {
        let prueba = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        prueba.reservarHorario(null);
        expect(prueba.horarios).to.have.lengthOf(3);
    });
    
});

describe('Testeá la función obtenerPuntuación()', () => {

    it("La calificación promedio se calcula correctamente", () => {
        let prueba2 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [2,4,6,8]);
        expect(prueba2.obtenerPuntuacion()).to.equal(5);
    });
    it("La calificación de un restaurant sin calificacion es igual a 0", () => {
        let prueba2 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        expect(prueba2.obtenerPuntuacion()).to.equal(0);
    });
    
});


describe('Testeá la función calificar()', () => {

    it("Se agrega correctamente la primer calificación a un array vacío", () => {
        let prueba3 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", []);
        expect(prueba3.calificar(5) === [5]);
    });
    it("Se agrega correctamente el siguien número a la calificación", () => {
        let prueba3 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5,8,8]);
        expect(prueba3.calificar(9) === [5,8,8,9]);
    });
    it("Si el número es mayor a cero, no se modifica el array", () => {
        let prueba3 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5,8,8]);
        prueba3.calificar(11);
        expect(prueba3.calificaciones).to.have.lengthOf(3);
    });
    it("Si el número es mayor a cero, no se modifica el array", () => {
        let prueba3 = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5,8,8]);
        prueba3.calificar(-11);
        expect(prueba3.calificaciones).to.have.lengthOf(3);
    });

});

describe('Testea la función buscarRestaurant()', () => {

    it("Devuelve correctamente el restaurant buscado", () => {
        let prueba = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
        let listado = new Listado(listadoDeRestaurantes);
        expect(listado.buscarRestaurante(1)).to.be.eql(prueba);
    });

    it("Devuelve correctamente el error si la búsqueda falla", () => {
        let prueba = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [5,8,8]);
        let listado = new Listado(prueba);
        expect(listado.buscarRestaurante(1)).to.be.equal("No se ha encontrado ningún restaurant");
    });

});

describe('Testea la función Restaurantes()', () => {

    it("Testea filtroRubros", () => {
        let lista = new Listado(listadoDeRestaurantes).obtenerRestaurantes("Asiática", null, null);
        expect(lista).to.have.lengthOf(3);
    })
    it("Testea filtroCiudad", () => {
        let lista = new Listado(listadoDeRestaurantes).obtenerRestaurantes(null, "Londres", null);
        expect(lista).to.have.lengthOf(4);
    })
    it("Testea filtroHorarios", () => {
        let lista = new Listado(listadoDeRestaurantes).obtenerRestaurantes(null, null, "18:00");
        expect(lista).to.have.lengthOf(4);
    })

});



/*

//Función que recibe los filtros que llegan desde el HTML y filtra el arreglo de restaurantes.
//Solo se filtra si el valor recibido es distinto de null.

Listado.prototype.obtenerRestaurantes = function(filtroRubro, filtroCiudad, filtroHorario) {
    var restaurantesFiltrados = this.restaurantes;
    if (filtroRubro !== null) {
        restaurantesFiltrados = restaurantesFiltrados.filter(restaurant => restaurant.rubro == filtroRubro);
    }

    if (filtroCiudad !== null) {
        restaurantesFiltrados = restaurantesFiltrados.filter(restaurant => restaurant.ubicacion == filtroCiudad);
    }

    if (filtroHorario !== null) {
        restaurantesFiltrados = restaurantesFiltrados.filter(function(res) {
            return res.horarios.some(horario => horario == filtroHorario);
        });
    }
    return restaurantesFiltrados;
}
*/