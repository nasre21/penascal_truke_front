<template>
    <div class="formularioInicioSesion" >
        <!-- Formularios -->
    <div class="contenedor-formularios">
        <!-- Links de los formularios -->
        <ul class="contenedor-tabs">
            <li class="tab tab-segunda active">
                <button class="botonesInicioFormulario" data-target="#iniciar-sesion" @click="volverFormularioAnterior">Iniciar Sesión</button>

            </li>
            <li class="tab tab-primera">
            <button class="botonesInicioFormulario" data-target="#registrarse" @click="changeForm('#registrarse')">Registrarse</button>
            </li>
      </ul>

        <!-- Contenido de los Formularios -->
        <div class="contenido-tab">
            <!-- Iniciar Sesion -->
            <div id="iniciar-sesion">
                <h1>Iniciar Sesión</h1>
                <form @submit.prevent="iniciarSesion" action="#" method="post">
                    <div class="contenedor-input">
                        
                        <input v-model="user_email" type="text" required placeholder="Escribe tu correo electrónico aquí*">
                    </div>

                    <div class="contenedor-input">
                       
                        <input v-model="user_password" type="password" required placeholder="Escribe tu contraseña aquí*">
                    </div>
                    <!-- <p class="forgot"><a href="#">Se te olvidó la contraseña?</a></p> -->
                    <input type="submit" class="button button-block" value="Iniciar Sesión">
                </form>
            </div>

            <!-- Registrarse -->
            <div id="registrarse">
                <h1>Registrarse</h1>
                <form @submit.prevent="createUsuario" action="#" method="post" >
                    <div class="fila-arriba">
                        <div class="contenedor-input">
                            
                            <input type="text" v-model="nombre" required placeholder="Escribe tu nombre aquí*" >
                        </div>

                        <div class="contenedor-input">
                           
                            <input type="text" v-model="apellido" required placeholder="Escribe tu apellido aquí*">
                        </div>
                    </div>
                    
                    <div class="contenedor-input">
                      <label class="seleccionaSector" >Selecciona tu sector</label>
                      <select v-model="sector" id="category">
                        
                        <option value="Moda y Comercio" selected>Moda/Comercio</option>
                        <option value="Hosteleria">Hosteleria</option>
                        <option value="Carpinteria">Carpinteria</option>
                        <option value="Electricidad y Fontaneria">Electricidad y Fontaneria</option>
                        <option value="Metal">Metal</option>
                      </select>
                    </div>
                    <div class="contenedor-input">
                            
                        <input type="email" v-model="email" required placeholder="Escribe tu correo electrónico aquí*">
                    </div>
                    <div class="contenedor-input">
                           
                        <input type="text" v-model="phone" required placeholder="Escribe tu numero de telefono aquí*">
                    </div>
                    <div class="contenedor-input">
                       
                        <input type="password" v-model="password" required placeholder="Escribe tu contraseña aquí*">
                    </div>


                    <input type="submit" class="button button-block" value="Registrarse">
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import axios from 'axios';  
import { useRouter } from 'vue-router';

const router = useRouter();

// Log In
const user_email = ref('');
const user_password =ref('');


const iniciarSesion = async () => {
  if (user_email.value == "admin@grupopenascal.com"){
    try {
      const responseAdmin = await axios.post('http://127.0.0.1:5000/admin', {
        email: user_email.value,
        password: user_password.value,
      });

    const data = responseAdmin.data;

      if (data === 'Login successful') {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        // Resto del código para realizar acciones adicionales después del inicio de sesión exitoso
      } else if (data === 'Login failed') {
        // Credenciales inválidas
        console.log('Credenciales inválidas. Inténtalo de nuevo.');
      } else if (data === 'Admin not found') {
        // Admininstrador no encontrado
        console.log('Admininstrador no encontrado.');
      }
    } catch (error) {
      console.error(error);
    }
    router.push('/admin');
      } 
    else {
      
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email: user_email.value,
        password: user_password.value,
      });
  
      const data = response.data;
  
      if (data === 'Login successful') {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        // Resto del código para realizar acciones adicionales después del inicio de sesión exitoso
      } else if (data === 'Login failed') {
        // Credenciales inválidas
        console.log('Credenciales inválidas. Inténtalo de nuevo.');
      } else if (data === 'User not found') {
        // Usuario no encontrado
        console.log('Usuario no encontrado.');
      }
    } catch (error) {
      console.error(error);
    }
    router.push('/user');
  }
};

const nombre = ref('');
const apellido = ref('');
const sector = ref('');
const email = ref('');
const phone = ref('');
const password = ref('');


const createUsuario = async () => {

try {
 await axios.post("http://127.0.0.1:5000/register", {
    firstname: nombre.value,
    lastname: apellido.value,
    sector: sector.value,
    email: email.value,
    password: password.value,
    phone: phone.value,
    penascales: 10
  });
  // console.log('name', nombre.value);
  router.push({ name: 'User' });
} catch (error) {
  console.log(error);
}
router.push('/user');
}

const changeForm = (target) => {
  const tabContents = document.querySelectorAll('.contenido-tab > div');
  tabContents.forEach((content) => {
    content.style.display = 'none';
  });
  document.querySelector(target).style.display = 'block';
};

const volverFormularioAnterior = () => {
  const tabContents = document.querySelectorAll('.contenido-tab > div');
  tabContents.forEach((content) => {
    content.style.display = 'none';
  });
  document.querySelector('#iniciar-sesion').style.display = 'block';
};

const intercambiarColores = () => {
  const btnIniciarSesion = document.querySelector('.tab-segunda button');
  const btnRegistrarse = document.querySelector('.tab-primera button');

  // Agregar evento clic para el botón "Iniciar Sesión"
  btnIniciarSesion.addEventListener('click', () => {
    btnIniciarSesion.style.backgroundColor = '#1ab188';
    btnRegistrarse.style.backgroundColor = 'gray';
  });

  // Agregar evento clic para el botón "Registrarse"
  btnRegistrarse.addEventListener('click', () => {
    btnRegistrarse.style.backgroundColor = '#1ab188';
    btnIniciarSesion.style.backgroundColor = 'gray';
  });
};

onMounted(intercambiarColores);

</script>

<style scoped >

.seleccionaSector{
  margin: 1rem;  
}
/* Estilos para el encabezado */

body {
  
  font-family: "Ubuntu", helvetica;
}


.contenedor-formularios {
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}

.contenedor-tabs {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
  display: flex;
  justify-content: center;
}

.contenedor-tabs:after {
  content: "";
  display: table;
  clear: both;
}

.contenedor-tabs li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
}

.contenedor-tabs li a:hover {
  background: #1ab188;
  color: #fff;
}

.contenedor-tabs .active a {
  background: #1ab188;
  color: #fff;
}

.contenido-tab > div:last-child {
  display: none;
}

h1 {
  text-align: center;
  color: #fff;
  font-weight: 300;
  margin: 0 0 40px;
}

label {
 
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
}

label .req {
  margin: 2px;
  color: #1ab188;
}

label.active {
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}

label.active .req {
  opacity: 0;
}

label.highlight {
  color: #fff;
}

input {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #ddd;
  border-top: none;
  border-left: none;
  border-right: none;
  color: #fff;
  border-radius: 0;
  transition: all 0.5s ease;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #1ab188;
}

.contenedor-input {
  position: relative;
  margin-bottom: 40px;
}

.fila-arriba:after {
  content: "";
  display: table;
  clear: both;
}

.fila-arriba div {
  float: left;
  width: 48%;
  margin-right: 4%;
}

.fila-arriba div:last-child {
  margin: 0;
}

.button {
  border: 0;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 0;
  font-size: 2rem;
  background: #1ab188;
  color: #fff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}

.button:hover, .button:focus {
  background: #159f80;
}

.button-block {
  display: block;
  width: 100%;
}

.forgot {
  margin-top: -20px;
  text-align: right;
  margin-bottom: 20px;
}

.botonesInicioFormulario{
    width: 12rem;
    height: 5rem;
    background-color:#1ab188;
    color: white;
    border-radius: 6px;
    font-size: 1.5rem;
    
}
.tab-primera button {
    background-color: gray;
}

/* Mediaqueries */
@media screen and (max-width: 500px) {
  .fila-arriba div {
    width: 100%;
  }

  .fila-arriba div:last-child {
    margin-bottom: 40px;
  }
}

@media screen and (max-width: 400px) {
  .contenedor-tabs li a {
    width: 100%;
  }
}



</style>



