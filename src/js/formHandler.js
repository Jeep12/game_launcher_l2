export function initFormHandler() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const loginButton = document.getElementById('loginButton'); // Asegúrate de agregar un id al botón
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que se recargue la página
            
            // Obtener los valores de los campos
            const emailValue = email.value;
            const passwordValue = password.value;

            console.log('Email:', emailValue);
            console.log('Contraseña:', passwordValue);

            // Aquí puedes hacer una llamada a la API o hacer lo que sea necesario con los datos
        });
    }
}
