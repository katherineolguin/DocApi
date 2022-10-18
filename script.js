function muestraPerrito() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) //Prometo que en algún momento voy a recibir una respuesta
        .then(data => {
            //data = {"message": "imagen.ext", "status": "success"} Recibimos el JSON
            //data.message -> Regresar el valor con la URL de la imagen
            console.log(data.message);
            var image_perrito = '<img src="'+data.message+ '" alt="perrito">'; // las ' detienen el tecto y lo abren '
            var contenedor_img = document.querySelector('.contenedor-img');
            //innerText -> Transforma en texto
            //innerHTML -> Nos respeta las etiquetas que nosotros pongamos
            contenedor_img.innerHTML = image_perrito;
        })

}


async function muestraPerritoAsync() {
    var response = await fetch('https://dog.ceo/api/breeds/image/random'); //Me va a esperar hasta que el fetch se ejecute y me regrese algo
    var data = await response.json();
    
    var image_perrito = '<img src="'+data.message+ '" alt="perrito">';
    var contenedor_img = document.querySelector('.contenedor-img');
    contenedor_img.innerHTML = image_perrito;
}
