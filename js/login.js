/* creamos las variables con los mismos nombres que pusimos en el formulario */
const form = document.getElementById('form-login')

const login =() => {
    let user = document.getElementById('user').value
    let password = document.getElementById('password').value
    let form = document.getElementById('form-login')

    
    let usuario = 'admin@gmail.com'
    let contra = '123'

    if (user == '' || password == ''){
        alert('Introduzca el dato faltante')
    }
    else{
        if (user == usuario && password == contra){
            localStorage.setItem('Admin', JSON.stringify(usuario))
            location.href = 'menuAdmin.html'  /* si es correcto, se redirecicona a la pagina menuAdmin */
        }
        else{ location.href = 'error.html' } /* si es incorrecto se va a la pagina de error */  
    }

    form.reset /* para q se borre lo escrito del campo cuando aprete login */

}

function redireccionLogin(){
    window.location.href = './pages/login.html';
}

function redireccionaInicio(){
    window.location.href = '../index.html'
}