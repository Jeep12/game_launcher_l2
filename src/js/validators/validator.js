export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  export function validatePassword(password) {
    // Mínimo 8 caracteres, 1 mayúscula, 1 número, 1 carácter especial
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
  }