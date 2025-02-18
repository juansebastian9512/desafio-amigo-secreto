// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
  const nombreInput = document.getElementById('amigo');
  const nombre = nombreInput.value.trim();
  
  if (nombre) {
    listaAmigos.push(nombre);
    actualizarListaAmigos();
    nombreInput.value = ''; // Limpiar el campo de entrada después de agregar el nombre
  } else {
    alert('Por favor, escribe un nombre antes de añadir.');
  }
}

function actualizarListaAmigos() {
  const listaElementos = document.getElementById('listaAmigos');
  listaElementos.innerHTML = ''; // Limpiar la lista antes de actualizarla

  listaAmigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaElementos.appendChild(li);
  });
}

function sortearAmigo() {
  const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
  const resultadoElemento = document.getElementById('resultado');
  resultadoElemento.textContent = amigoSorteado;
}