
var texto = "";
var textoEncriptado = "";
var textoDesencriptado = "";
const expresionRegularMayusculas = /[A-Z]/;
const expresionRegularEspeciales = /[^A-Za-z0-9\s]/;

function encriptar() {

    /*  debo tomar las palabras de la caja de texto*/

    texto = document.querySelector(".textoarea1").value;



    if (expresionRegularMayusculas.test(texto) || expresionRegularEspeciales.test(texto)) { //condicion para reglas

        document.querySelector(".textoarea2").value = "escribio  mayusculas o caracteres especiales";
        borrartexto1();
        mostrarSecciones();
    } else {

        borrartexto1();
        mostrarSecciones();
        textoEncriptado = texto.replaceAll("e", "enter");
        textoEncriptado = textoEncriptado.replaceAll("i", "imes");
        textoEncriptado = textoEncriptado.replaceAll("a", "ai");
        textoEncriptado = textoEncriptado.replaceAll("o", "ober");
        textoEncriptado = textoEncriptado.replaceAll("u", "ufat");

        document.querySelector(".textoarea2").value = textoEncriptado;

    }


}

function desencriptar() {

    textoEncriptado = document.querySelector(".textoarea1").value; // tomo el valor del texto encriptado

    if (expresionRegularMayusculas.test(textoEncriptado) || expresionRegularEspeciales.test(textoEncriptado)) { // comparo el valor del texto encriptado

        document.querySelector(".textoarea2").value = "escribio  mayusculas o caracteres especiales";
        borrartexto1();
        mostrarSecciones();
    } else {

        //console.log("esto es el texto"+Encriptado);

        textoDesencriptado = textoEncriptado.replaceAll("enter", "e");
        textoDesencriptado = textoDesencriptado.replaceAll("imes", "i");
        textoDesencriptado = textoDesencriptado.replaceAll("ai", "a");
        textoDesencriptado = textoDesencriptado.replaceAll("ober", "o");
        textoDesencriptado = textoDesencriptado.replaceAll("ufat", "u");

        document.querySelector(".textoarea2").value = textoDesencriptado;

        borrartexto1();
        mostrarSecciones();
    }
}


function borrartexto1() { // con esto borro el texto del texto 1 y lo paso
    document.querySelector(".textoarea1").value = "";
}

function mostrarSecciones() { // intercambio de secciones
    document.getElementById("seccion3").style.display = "none";
    document.getElementById("seccion2").style.display = "block";

}

function borrarTextoAreatexto2() { // borrar texto de la caja dos al hacer click en area texto 1 
    document.querySelector(".textoarea2").value = "";

}

function botonCopiar() {
    try{ 
    let copiarTexto = document.querySelector(".textoarea2").value;
    navigator.clipboard.writeText(copiarTexto);
    alert(" texto copiado");
    // console(copiarTexto);
   }catch(err){
    console.error("error al copiar",err);
    alert("problema al copiar, posiblemente con tu navegador")

   }
}

/*
para guiarme
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 