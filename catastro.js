function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }

  function resetFormContacto() {
    // Resetear el formulario de contacto
    document.forms['contacto'].reset();
    // Mostrar un mensaje de agradecimiento
    //alert('Gracias. En breve nos pondremos en contacto contigo');
}

function resetFormSugerencias() {
    // Resetear el formulario de sugerencias
    document.forms['sugerencias'].reset();
    // Mostrar un mensaje de agradecimiento
    //alert('Gracias por tus sugerencias. Las revisaremos pronto.');
}
  