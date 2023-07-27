function sendDataForm() {
  let nombre = document.getElementById("nameInput").value;
  let correo = document.getElementById("emailInput").value;
  let telefono = document.getElementById("phoneInput").value;
  let comentario = document.getElementById("commentsInput").value;

  let formData = {
    nombre,
    correo,
    telefono,
    comentario,
  };

  // Enviar los datos a través de una solicitud HTTP (por ejemplo, utilizando fetch)
  fetch("http://localhost:8080/api/v1/sendform", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Manejar la respuesta del servidor
      console.log(data);
    })
    .catch((error) => {
      // Manejar errores
      console.error(error);
    });
}
