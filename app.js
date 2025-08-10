// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
    alert("Por favor, escribe un amigo.");
    return;
    }
    if (listaAmigos.includes(nombre)) {
    alert("Este amigo ya está en la lista.");
    return; 
    }

    listaAmigos.push(nombre);     
    mostrarLista();
    input.value = "";
}

// Mostrar la lista actual de amigos
function mostrarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaElement.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 5) {
    alert("Debes ingresar como minimo (5) cinco amigos para realizar el sorteo de amigo secreto.");
    return;
    }

  // Crear una copia de la lista para asignaciones
    let asignaciones = [];
    let intentos = 0;
    const maxIntentos = 100; // Limitar intentos para evitar bucles infinitos


    while (intentos < maxIntentos) {
    const copiaAmigos = [...listaAmigos];
    copiaAmigos.sort(() => Math.random() - 0.5); // Mezclar la lista de amigos

    let valido = true;
    for (let i = 0; i < listaAmigos.length; i++) {
    if (copiaAmigos[i] === listaAmigos[i]) {    
        valido = false; // Si alguien se asigna a sí mismo, no es válido
        break;
        }  
    } 
        
    if (valido){
        asignaciones = copiaAmigos;
        break;  
    }   
    intentos++;
}

    if(asignaciones.length ===0) {
        return; // Si no se encontró una asignación válida, salir del bucle
    }

    const resultado = listaAmigos.map((amigo, i) => `${amigo} → ${asignaciones[i]}`);
    mostrarResultado(resultado);
}

// Mostrar el resultado del sorteo
function mostrarResultado(lista) {
    resultadoElement.innerHTML = "";
    lista.forEach((texto) => {
        const li = document.createElement("li");
        li.textContent = texto;
        resultadoElement.appendChild(li);
    });
}