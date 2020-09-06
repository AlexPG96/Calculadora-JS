
var botones = document.querySelectorAll('.botonera button');
var display = document.querySelector('#display');
let numero;
let resultado = 0;
let operacion = "";

botones.forEach(boton => {
    boton.addEventListener('click', calcular);
})

function calcular(event) {
    //debeis pulsar cualquier boton pero en el display solo se tiene que ver numeros.
    if (event.target.id == "") {
        //toco numero
        numero = event.target.innerText;
        // console.log(numero);
        display.value += numero;



    } else if (event.target.id == 'suma' || event.target.id == 'resta') {

        //estoy tocando operacion u otro boton, teneis que vaciar el display y permitir meter otrro numero sin perder el que habeis metido.
        operacion = event.target.id;
        switch(event.target.id){
            case 'suma':
                resultado += parseInt(display.value);
                break;

            case 'resta':
                resultado = (resultado == 0) ? resultado + parseInt(display.value) : resultado - parseInt(display.value);
                break;
        }
        display.value = "";

    }else if(event.target.id == 'igual'){
        switch(operacion){
            case 'suma':
                resultado += parseInt(display.value);
                break;

            case 'resta':
                resultado -= parseInt(display.value);
                break;
        }

        display.value = resultado;
    }else if(event.target.id == 'reset'){
        operacion = "";
        resultado = 0;
        display.value = "";
    }


}      
