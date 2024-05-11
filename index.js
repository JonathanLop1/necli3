function init(){
    const actions = {
        "añadir" : añadir,
        "eliminar" : eliminar,
        "limpiar" : limpiar
    }
    Object.keys(actions).forEach(action => {
        document.getElementById(action).addEventListener("click", actions[action])
    });
}
function añadir(){
    const clave = document.getElementById("clave").value;
    const valor = document.getElementById("valor").value;
    if(clave){
        const message = localStorage.getItem(clave) ? "se edito el registro" : "se añadio el registro";
        localStorage.setItem(clave, valor);
    }else{
        document.getElementById("mensaje").innerHTML = "<p>La clave tiene que tener un valor</p>"
    }
}
function eliminar(){
    const clave = document.getElementById("clave").value;
    localStorage.removeItem(clave)
    limpiar()
}
function limpiar(){
    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";
}
window.onload = init;