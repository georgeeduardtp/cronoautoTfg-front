import Swal from "sweetalert2";

export const confirmationAlert = (title: string, text: string) => {
  return Swal.fire({ // Retorna la Promesa para manejar la respuesta
    title: title,
    text: text,
    //icon: 'warning',
    imageUrl: '/escudo.svg', // Ruta personalizada del icono de advertencia
    imageWidth: 200, // **Reducido para hacerla menos alta**
    imageHeight: 200, // **Reducido para hacerla menos alta**

    background: '#000000ff', // Fondo azul claro
    showCancelButton: true,
    confirmButtonText: 'Sí, continuar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#e40000ff', // Botón morado
    cancelButtonColor: '#5f5f5fff', // Botón gris
    iconColor: '#fc0000ff', // Color del icono de advertencia
    padding: '1em', // **Reducido para hacerla menos alta**

    width: '500px', // **Aumentado para hacerla más ancha**
    willOpen: (popup) => {
      // popup es el elemento DOM de la alerta
      popup.style.border = '3px solid #b31717ff';
      popup.style.color = '#ffffffff';
    }
  });
}

export const mostrarAlertaEliminar = () => {
    Swal.fire({
        title: 'Eliminado',
        text: 'Tu información ha sido eliminada con éxito.',
        icon: 'success',
        // 💡 Opciones de estilo
        iconColor: '#fc0000ff', // Color del icono de éxito
        background: '#000000ff', // Fondo azul claro
        confirmButtonColor: '#e40000ff', // Botón morado
        padding: '1.5em',
        width: '500px',
        willOpen: (popup) => {
            // popup es el elemento DOM de la alerta
            popup.style.border = '3px solid #b31717ff';
            popup.style.color = '#ffffffff';
        }
});
};