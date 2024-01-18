function redireccionaMenu(){
    window.location.href = '../pages/menuAdmin.html'
}

/* API */

let contenedorTarjetas = document.getElementById('contenedorTarjetas')

fetch('https://fakestoreapi.com/users')
    .then( response => response.json())
    .then(data => {

        /* guardo la data q solicito en una variable */
        const usuarios = data; 

        /* recorremos con un bucle los datos */
        usuarios.forEach(us => {
            
            /* 1- por cada usuario, crear la tarjeta  */
            let card = document.createElement('div')
            card.classList.add("card")
            card.style.width = "18rem"
            card.style.background = 'rgb(250,250,250)'
            card.style.padding = '10px'
            card.style.margin = '10px'

            /* 2- agregamos la imagen a la tarjeta (el contenedor padre agrega siempre al hijo) */
            let direc = document.createElement('direc')
            direc.classList.add("card-img-top")
            direc.src = us.address
            direc.alt = 'Producto para la compra'

            card.appendChild(direc)

            /* hacemos eso para cada elemento de la tarjeta */
            let cardBody = document.createElement('div')     /* cardbody es la parte de la tarjeta que contiene el titulo, el parrafo y el boton */
            cardBody.classList.add("card-body")           

            /* agrego nombre de usuario */
            let user = document.createElement('h3')
            user.classList.add("card-title")
            user.innerText = us.username
            user.style.color = 'rgb(0, 128, 96)'

            cardBody.appendChild(user)
            
            /* agrego nombre completo */
            let nombre = document.createElement('p')
            nombre.classList.add("card-text")
            let nombreCompleto = us.name.firstname + ' ' + us.name.lastname
            nombre.innerText = nombreCompleto
            nombre.style.color = 'rgb(102, 102, 102)'
            
            cardBody.appendChild(nombre)

            /* agrego email */
            let email = document.createElement('p')
            email.classList.add("card-text")
            email.innerText = us.email
            email.style.color = 'rgb(102, 102, 102)'

            cardBody.appendChild(email)

            /* agrego nro telefono */
            let nro = document.createElement('p')
            nro.classList.add("card-text")
            nro.innerText = us.phone
            nro.style.color = 'rgb(102, 102, 102)'
            
            cardBody.appendChild(nro)

            /* agregamos el boton para ver mas (no tiene funcionalidad, es a modo decorativo)*/
            let botonComprar = document.createElement('button')
            botonComprar.classList.add("btn", "btn-success")
            botonComprar.innerText = 'Ver más'

            cardBody.appendChild(botonComprar)

            /* 3- agregamos cardBody a la card principal */
            card.appendChild(cardBody)

            /* 4- agregar la tarjeta al div */
            contenedorTarjetas.appendChild(card)
            contenedorTarjetas.style.background = 'transparent'
            contenedorTarjetas.style.width = '1500px'

        });

    })

    

