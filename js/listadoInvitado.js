
/* capturo el boton para darle una funcion*/
let boton = document.getElementById('mostrarDatos')

/* traemos los datos del local storage */
let empleados = localStorage.getItem('Empleados')
empleados = JSON.parse(empleados)  /* pasa datos de tipo string a tipo objeto */


boton.addEventListener('click', (e)=>{
    e.preventDefault()

    let tabla = document.getElementById('miTabla')

    /* recorremos el arreglo y para cada producto creamos una fila */
    for (let i=0; i<empleados.length; i++){
        
        /* crea la fila tr q esta en el html */
        let fila = document.createElement('tr') 

        /* creamos las celdas o columnas q esta en html*/
        let celdaLegajo = document.createElement('td')  
        let celdaNombre= document.createElement('td')  
        let celdaApellido = document.createElement('td')  
        let celdaDNI = document.createElement('td')  

        /* asignamos los datos */
        celdaLegajo.textContent = empleados[i].legajo
        celdaNombre.textContent = empleados[i].nombre
        celdaApellido.textContent = empleados[i].apellido
        celdaDNI.textContent = empleados[i].DNI

        /* agregamos las celdas a la fila */
        fila.appendChild(celdaLegajo)
        fila.appendChild(celdaNombre)
        fila.appendChild(celdaApellido)
        fila.appendChild(celdaDNI)

        /* agregamos la fila a la tabla */
        tabla.appendChild(fila)
    }

})


function redireccionaInicio(){
    window.location.href = '../index.html'
}