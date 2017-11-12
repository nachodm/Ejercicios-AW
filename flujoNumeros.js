class FlujoNumeros {
    constructor() {
        this.numeros = [6, 1, 4, 3, 10, 9, 8];
    }
    
    siguienteNumero(f) {
        setTimeout(() => {
          let result = this.numeros.shift();
          f(result);
        }, 100);
    }
}

/**
 * Imprime la suma de los dos primeros números del flujo pasado como parámetro.
 */
function sumaDosLog(flujo) {
    flujo.siguienteNumero(num1 => {
	flujo.siguienteNumero(num2 => {
		console.log(num1+num2);
	});
    });
}

/**
 * Llama a la función f con la suma de los dos primeros números del flujo pasado como parámetro.
 */
function sumaDos(flujo, f) {
    flujo.siguienteNumero(num1 => {
	flujo.siguienteNumero(num2 => {
		f(num1+num2);
	});
    });
}

/**
 * Llama a la función f con la suma de todos los números del flujo pasado como parámetro
 */
function sumaTodo(flujo, f) {
    recursive (0, flujo, f);  
}

function recursive(sum, flujo, f) {
    flujo.siguienteNumero(num => {
	if (num !== undefined) {
		sum += num;
		recursive (sum, flujo, f);
	}
	else {
		f(sum);
	}
    });
}

/* NO MODIFICAR A PARTIR DE AQUÍ */

module.exports = {
    FlujoNumeros: FlujoNumeros,
    sumaDosLog: sumaDosLog,
    sumaDos: sumaDos,
    sumaTodo: sumaTodo
}