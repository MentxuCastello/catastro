function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }

// Función para manejar el submit de ambos formularios
function handleSubmit(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto

  var form = event.target; // Obtener el formulario que disparó el evento
  var formData = new FormData(form); // Recoger los datos del formulario

  // Enviar el formulario usando fetch
  fetch(form.action, {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
          form.reset(); // Resetear el formulario después de que se haya enviado correctamente
          alert('Formulario enviado correctamente');
          location.replace(window.location.href); // Recargar la página completamente
          
      } else {
          alert('Hubo un error al enviar el formulario');
      }
  })
  .catch(error => {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario');
  });
}
