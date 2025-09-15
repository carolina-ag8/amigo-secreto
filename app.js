// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    mostrarAmigos();
    
    // Limpiar resultado anterior si existe
    limpiarResultado();
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${amigo} 
            <button onclick="eliminarAmigo(${index})" style="margin-left: 10px; padding: 2px 8px; background-color: #ff4757; color: white; border: none; border-radius: 3px; cursor: pointer;">
                ✕
            </button>
        `;
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    mostrarAmigos();
    limpiarResultado();
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert('Agrega al menos un amigo antes de realizar el sorteo.');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong> 🎉</li>`;
}

// Función para limpiar el resultado
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

// Permitir agregar amigos presionando Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Enfocar el campo de entrada al cargar la página
    inputAmigo.focus();
});
