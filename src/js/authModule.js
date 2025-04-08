//authModule.js
import { environment } from '../environments/enviroment.js';
let apiUrl = environment.apiUrl;
export async function register(email, password) {
    let endpoint = apiUrl + '/auth/register';

    const data = {
        email: email,
        password: password,
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

          // Si la respuesta no es exitosa, arroja un error con el mensaje de la API
          if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                message: errorData.message
            };
        }

        // Si la respuesta es exitosa, devuelve la respuesta como un JSON
        return await response.json();
    } catch (error) {
        return {
            status: 500,  // Puedes cambiar el código de estado según el tipo de error
            message: error.message || 'Error desconocido'  // Mensaje del error
        };
    }

}