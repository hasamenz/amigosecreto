// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Function to clear the textbox
function limpiarTextbox() {
    document.getElementById("amigo").value = "";
}

// Function to add a friend to the list
function agregarAmigo() {
    // Obtener el valor del textbox
    let texto = document.getElementById("amigo").value;

    // Verificar que no esté vacío
    if (texto.trim() !== "") {
        // Crear un nuevo elemento de lista <li>
        let li = document.createElement("li");

        // Asignar el texto del textbox al <li>
        li.textContent = texto;

        // Agregar el <li> a la lista de amigos
        document.getElementById("listaAmigos").appendChild(li);

        // Limpiar el campo de texto
        document.getElementById("amigo").value = "";
    } else {
        alert("Por favor ingresa un texto.");
    }
}

// Function to allow only letters in the input
function soloLetras(event) {
    // Obtener el valor ingresado
    let valor = event.target.value;
    
    // Eliminar cualquier carácter no alfabético
    event.target.value = valor.replace(/[^a-zA-Z]/g, '');
}

// Function to randomly pick a friend from the list
function sortearAmigo() {
    // Obtener todos los elementos <li> dentro de la lista de amigos
    let lista = document.getElementById("listaAmigos");
    let items = Array.from(lista.getElementsByTagName("li")); // Convertir la colección a un arreglo

    // Verificar si hay elementos en la lista
    if (items.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    // Elegir un índice aleatorio entre 0 y la cantidad de elementos en la lista
    let indiceAleatorio = Math.floor(Math.random() * items.length);

    // Obtener el nombre seleccionado aleatoriamente
    let nombreSeleccionado = items[indiceAleatorio].textContent;

    // Mostrar el nombre en la consola (o en otro lugar si lo prefieres)
    console.log("Nombre seleccionado aleatoriamente: " + nombreSeleccionado);
    
    // Mostrar el nombre en un párrafo o un lugar específico en HTML
    document.getElementById("resultado").textContent = "Nombre seleccionado: " + nombreSeleccionado;
}