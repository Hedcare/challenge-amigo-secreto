let amigos=[];
let amigoRegistrado = "";

function agregarAmigo(){
     amigoRegistrado = document.getElementById('amigo').value;
    
    if (amigoRegistrado === ""){
        alert('Ingresa un nombre válido');
    } else {
        amigos.push(amigoRegistrado);
        actualizarLista();
        reiniciarCaja();
    }
    
}

function reiniciarCaja(){
    let valorCaja = document.querySelector('#amigo').value = '';  
}

function actualizarLista(){
    let listaNueva = document.querySelector('#listaAmigos');
    listaNueva.innerHTML ="";

    for(let i=0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent =amigos[i];
        listaNueva.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('No hay amigos registrados para el sorteo')
    }
    else{
        let amigoSorteado = document.getElementById('resultado');
        let alAzar =Math.floor(Math.random()*amigos.length);
        let elegido = amigos[alAzar];
        amigoSorteado.innerHTML = `El amigo sorteado es: ${elegido}`;
        eliminarSorteados(elegido);
    }
}

function eliminarSorteados(nombre){
    let index = amigos.indexOf(nombre);
    amigos.splice(index, 1);
    actualizarLista();
    if (amigos.length == 0){
        let mensajeFinal = document.getElementById('resultado');
        mensajeFinal.innerHTML = 'Fin del Sorteo';
    }
}