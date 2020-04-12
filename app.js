const cargarPosts = document.querySelector('#cargar').addEventListener('click', cargarAPI);

function cargarAPI() {
    //CREAMOS OBJETO
    const xhr = new XMLHttpRequest();

    //ABRIR CONEXION
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    //CARGA Y LEE DATOS
    xhr.onload = function() {
        if(this.status === 200) {
            const respuesta = JSON.parse(this.responseText);

            let contenido = '';
            respuesta.forEach(function(post) {
                contenido += `
                    <h3>TITULO: ${post.title}</h3>
                    <p>${post.body}</p>
                `;
            });
            document.getElementById('listado').innerHTML = contenido;
        }
    }
    //ENVIAR LA CONEXION
    xhr.send();
}