
const ciudadesPorDepartamento = {
  amazonas: ['Leticia', 'Puerto Nariño', 'La Chorrera'],
  antioquia: ['Medellín', 'Bello', 'Envigado', 'Itagüí'],
  arauca: ['Arauca', 'Saravena', 'Tame'],
  atlantico: ['Barranquilla', 'Soledad', 'Malambo'],
  bolivar: ['Cartagena', 'Magangué', 'Turbaná'],
  boyaca: ['Tunja', 'Duitama', 'Sogamoso', 'Chiquinquirá'],
  caldas: ['Manizales', 'La Dorada', 'Chinchiná'],
  caqueta: ['Florencia', 'San Vicente del Caguán'],
  casanare: ['Yopal', 'Aguazul', 'Villanueva'],
  cauca: ['Popayán', 'Santander de Quilichao', 'Puerto Tejada'],
  cesar: ['Valledupar', 'Aguachica', 'San Alberto'],
  choco: ['Quibdó', 'Istmina', 'Tadó'],
  cordoba: ['Montería', 'Cereté', 'Sahagún'],
  cundinamarca: ['Bogotá', 'Soacha', 'Zipaquirá', 'Fusagasugá'],
  guainia: ['Inírida', 'Barranco Minas', 'Puerto Colombia'],
  guaviare: ['San José del Guaviare'],
  huila: ['Neiva', 'Pitalito', 'Garzón'],
  la_guajira: ['Riohacha', 'Maicao', 'Fonseca'],
  magdalena: ['Santa Marta', 'Ciénaga', 'Aracataca'],
  meta: ['Villavicencio', 'Acacías', 'Puerto López'],
  nariño: ['Pasto', 'Ipiales', 'Tumaco'],
  norte_de_santander: ['Cúcuta', 'Ocaña', 'Pamplona'],
  putumayo: ['Mocoa', 'Puerto Asís', 'Sibundoy'],
  quindio: ['Armenia', 'Calarcá', 'Circasia'],
  risaralda: ['Pereira', 'Dosquebradas', 'La Virginia', 'Santa Rosa de Cabal'],
  san_andres_y_providencia: ['San Andrés', 'Providencia', 'Santa Catalina'],
  santander: ['Bucaramanga', 'Floridablanca', 'Girón'],
  sucre: ['Sincelejo', 'Corozal', 'San Onofre'],
  tolima: ['Ibagué', 'Espinal', 'Melgar'],
  valle_del_cauca: ['Cali', 'Palmira', 'Tuluá'],
  vaupes: ['Mitú', 'Carurú', 'Taraira'],
  vichada: ['Puerto Carreño', 'La Primavera']
};

// Obtener elementos del DOM
const departamento = document.getElementById("departamento");
const ciudadSelect = document.getElementById("ciudad");

// Escuchar evento "change" del primer select
departamento.addEventListener("change", (event) => {
  // Obtener valor seleccionado del primer select
  const departamento = event.target.value;

  // Limpiar opciones anteriores del segundo select
  ciudadSelect.innerHTML = "";

  // Si se seleccionó un departamento válido, generar opciones en el segundo select
  if (departamento in ciudadesPorDepartamento) {
      for (let i = 0; i < ciudadesPorDepartamento[departamento].length; i++) {
        const option = document.createElement("option");
        option.value = ciudadesPorDepartamento[departamento][i];
        option.textContent = ciudadesPorDepartamento[departamento][i];
        ciudadSelect.add(option);
      }
    // otra forma de hacer el mismo for
    //ciudadesPorDepartamento[departamento].forEach((ciudad) => {
      //const option = document.createElement("option");
      //option.value = ciudad;
      //option.textContent = ciudad;
      //ciudadSelect.appendChild(option);
    //});
  }
});


//validar contraceñas
function validarContraseña(){
  var contraseña = document.getElementById('contraseña');
  var validacion_contraseña = document.getElementById('validacion_contraseña');

  var errorDiv = document.getElementById('error_contraseña');
  if (contraseña.value != validacion_contraseña.value) {
    validacion_contraseña.setCustomValidity('Las contraseñas no coinciden.');
    errorDiv.textContent = 'Las contraseñas no coinciden.';
  } else {
    validacion_contraseña.setCustomValidity('');
    errorDiv.textContent = '';
  }
};

//validar contraseña
contraseña.addEventListener('input', function (event) {
  var contraseña = document.getElementById('contraseña');
  var validacion_contraseña = document.getElementById('validacion_contraseña');

  var min_max_contraseña = document.getElementById('min_max_contraseña');
  var num_contraseña = document.getElementById('num_contraseña');
  var mayus_contraseña = document.getElementById('mayus_contraseña');

  if (contraseña.value.length < 8) {
    min_max_contraseña.classList.remove("text-success");
    min_max_contraseña.classList.add("text-danger");
  } else {
    min_max_contraseña.classList.remove("text-danger");
    min_max_contraseña.classList.add("text-success");
  }
  if (contraseña.value.match(/[0-9]/)) {
    num_contraseña.classList.remove("text-danger");
    num_contraseña.classList.add("text-success");
  } else {
    num_contraseña.classList.remove("text-success");
    num_contraseña.classList.add("text-danger");
  }
  if (contraseña.value.match(/[A-Z]/)) {
    mayus_contraseña.classList.remove("text-danger");
    mayus_contraseña.classList.add("text-success");
  }else {
    mayus_contraseña.classList.remove("text-success");
    mayus_contraseña.classList.add("text-danger");
  }
});

// validar campos obligatorios
function validar() { 
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var correo = document.getElementById("correo");
  var sintomas = document.getElementById("sintomas"); 

  if (nombre.value.trim() === "" ){
    //alert("Ingrese todos los campos requeridos");
    nombre.setCustomValidity('Ingrese el nombre.');
  }else{
    nombre.setCustomValidity('');
  } 
  if (apellido.value.trim() === ""){
    //alert("Ingrese todos los campos requeridos");
    apellido.setCustomValidity('Ingrese el apellido.');
  }else{
    apellido.setCustomValidity('');
  }
  if (correo.value.trim() === ""){
    //alert("Ingrese todos los campos requeridos");
    correo.setCustomValidity('Ingrese el correo');
  }else {
    correo.setCustomValidity('');
  }
  if (sintomas.value.trim() == ""){
    //alert("Ingrese todos los campos requeridos");
    sintomas.setCustomValidity('Ingrese los sintomas');
  }else {
    sintomas.setCustomValidity('');
  }
  if (contraseña.value.trim() == ""){
    //alert("Ingrese todos los campos requeridos");
    contraseña.setCustomValidity('Ingrese la contraseña');
  }else{
    contraseña.setCustomValidity('');
  }
  if (validacion_contraseña.value.trim() == ""){
    //alert("Ingrese todos los campos requeridos");
    validacion_contraseña.setCustomValidity('Confirme la contraseña');
  }else{
      alert("Registro exitoso");
  }

}

validacion_contraseña.addEventListener('input', validarContraseña );
contraseña.addEventListener('input',validarContraseña);