

/* con document.getElementById capturamos el elemento al que daremos un evento */ 
let enviarDatos = document.getElementById('enviarDatos')

let listaEmpleados = []

/* le asignamos el evento q debe realizar */
enviarDatos.addEventListener('click', (e)=>{

    let miFormulario = document.getElementById('miFormulario')
    let legajo = document.getElementById('legajo').value
    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value
    let DNI = document.getElementById('DNI').value
    
    if (legajo== ' ' || nombre== ' ' || apellido== ' ' || DNI == ' ') {
        alert('Por favor, ingrese todos los datos correspondientes.')
        return 
    }
    else {
        cargarDatos(legajo, nombre, apellido, DNI)
    }

    /* limpiamos el contenido de los campos luego de cargar los empleados*/
    miFormulario.reset()

})

/* CARGA DE EMPLEADOS */
const cargarDatos = (legajo, nombre, apellido, DNI) => {
    
    /* se ve en la consola del inspeccionar */
    console.log('hiciste click en eviar datos')
    console.log('el empleado que se cargó en la BD es: ' + legajo +'-'+ nombre +'-'+ apellido+'-'+ DNI)
    
    /* así crea un objeto producto !!*/
    let empleado = {
        legajo: legajo,
        nombre: nombre,
        apellido: apellido,
        DNI: DNI
    }

    console.log('\EMPLEADO CARGADO:  ')
    console.log(empleado)

    listaEmpleados.push(empleado) /* agrega el empleado cargado a la lista */
    localStorage.setItem('Empleados', JSON.stringify(listaEmpleados) ) /*  JSON.stringgify convierte un valor de javascript a un json(string), JSON.parse hace al reves*/
    console.log('\nLISTADO')
    console.log(listaEmpleados)

}


function redireccionaMenu(){
    window.location.href = '../pages/menuAdmin.html'
}

function redireccionaListado(){
    window.location.href = '../pages/listadoEmpleados.html'
}