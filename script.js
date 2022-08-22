let inputTexto = document.querySelector(".mensaje-encriptar");
let outputTexto = document.querySelector(".mensaje-encriptado");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

//ENCRIPTAR

function botonEncriptar(){

    let textoEncriptado = encriptar(inputTexto.value); //.value toma el valor ingresado en inpurTexto
    outputTexto.value = textoEncriptado;

    outputTexto.style.backgroundImage = "none";
    inputTexto.value = "";

    document.getElementById("ningun-mensaje").style.display = "none";
    document.getElementById("ingrese-texto").style.display = "none";

    document.getElementById("boton-copiar").style.visibility = "visible";
}

function encriptar(stringEncriptar){

    let matrizCodigo = [["e", "enter"],     // [0, 1]
                        ["i", "imes"],      // [0, 1]
                        ["a", "ai"],        // [0, 1]
                        ["o", "ober"],      // [0, 1]
                        ["u", "ufat"]];     // [0, 1]

    stringEncriptar = stringEncriptar.toLowerCase(); //convierte el string en minuscula

    for(let i=0; i < matrizCodigo.length; i++){ //.length muestra la longitud de array

        if(stringEncriptar.includes(matrizCodigo[i][0])){ //.includes determina si incluye cierto valor "i" posicion [0]

            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); //.replaceAll remplaza lo que coincida en el valor "i" pasarlo a posicion [1]
        }
    }
    return stringEncriptar; //Muestra el mensaje encriptado
}

function botonDesencriptar(){

    let textoEncriptado = desencriptar(inputTexto.value); //.value toma el valor ingresado en inpurTexto
    outputTexto.value = textoEncriptado;

    inputTexto.value = "";

    document.getElementById("ningun-mensaje").style.display = "none";
    document.getElementById("ingrese-texto").style.display = "none";
}

//DESENCRIPTAR

function desencriptar(stringDesencriptar){

    let matrizCodigo = [["e", "enter"],     // [0, 1]
                        ["i", "imes"],      // [0, 1]
                        ["a", "ai"],        // [0, 1]
                        ["o", "ober"],      // [0, 1]
                        ["u", "ufat"]];     // [0, 1]

    stringDesencriptar = stringDesencriptar.toLowerCase(); //convierte el string en minuscula

    for(let i=0; i < matrizCodigo.length; i++){ //.length muestra la longitud de array

        if(stringDesencriptar.includes(matrizCodigo[i][0])){ //.includes determina si incluye cierto valor "i" posicion [0]

            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); //.replaceAll remplaza lo que coincida en el valor "i" pasarlo a posicion [0]
        }
    }
    return stringDesencriptar; //Muestra el mensaje encriptado
}

//COPIAR

function botonCopiar(){

    outputTexto.select(); //.select selecciona el texto
    navigator.clipboard.writeText(outputTexto.value);
}