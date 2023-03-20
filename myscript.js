function encriptar(){
    var TextoEncriptar = document.getElementById("ingresar-texto").value;
    var TextoEncriptado=[]
    for (let i = 0; i < TextoEncriptar.length; i++) {
        if (TextoEncriptar[i]=="e") {
            TextoEncriptado[i]=TextoEncriptar[i].replace("e","enter");
        }
        else if (TextoEncriptar[i]=="i") {
            TextoEncriptado[i]=TextoEncriptar[i].replace("i","imes");
        }
        else if (TextoEncriptar[i]=="a") {
            TextoEncriptado[i]=TextoEncriptar[i].replace("a","ai");
        }
        else if (TextoEncriptar[i]=="o") {
            TextoEncriptado[i]=TextoEncriptar[i].replace("o","ober");
        }
        else if (TextoEncriptar[i]=="u") {
            TextoEncriptado[i]=TextoEncriptar[i].replace("u","ufat");
        }
        else{
            TextoEncriptado[i]=TextoEncriptar[i]
        }
    }
    TextoEncriptar=TextoEncriptado.join("");

    var imagen=document.getElementById("imagen")
    var CopiarTexto=document.getElementById("copiar-texto")
    var BotonCopiar=document.getElementById("boton-copiar")
    var TextoCopiado=document.querySelector(".copiar-texto")

    imagen.style.display="none";
    CopiarTexto.style.display="block";
    BotonCopiar.style.display="block";
    TextoCopiado.value=TextoEncriptar;
}


document.getElementById("boton-encriptar").onclick=encriptar;


function desencriptar(){
    var Texto = document.getElementById("ingresar-texto").value;
    var TextoDesencriptado
    TextoDesencriptado=Texto.replaceAll("enter","e");
    TextoDesencriptado=TextoDesencriptado.replaceAll("imes","i");
    TextoDesencriptado=TextoDesencriptado.replaceAll("ai","a");
    TextoDesencriptado=TextoDesencriptado.replaceAll("ober","o");
    TextoDesencriptado=TextoDesencriptado.replaceAll("ufat","u");

    var TextoCopiado=document.querySelector(".copiar-texto");

    TextoCopiado.value=TextoDesencriptado;
}


document.getElementById("boton-desencriptar").onclick=desencriptar;

function CopiarTexto() {
    var TextoCopiado = document.getElementById("copiar-texto").value;
    var ButtonCopiado = document.getElementById("boton-copiar");

    navigator.clipboard.writeText(TextoCopiado);
    ButtonCopiado.textContent="Copiado";

}

document.getElementById("boton-copiar").onclick=CopiarTexto;

