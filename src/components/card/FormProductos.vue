<template>
    <div class="product-form justify-content-around shadow-box">
      <form @submit="submitForm" class="d-flex">
        <div class="form-column">
          <div class="form-group">
            <!-- <label for="nombre">Nombre</label> -->
            <input type="text" id="nombre" v-model="nombre" placeholder="Nombre" required>
          </div>
          <div class="form-group">
            <!-- <label for="descripcion">Descripción:</label> -->
            <textarea id="descripcion" v-model="descripcion" placeholder="Descripcion" required></textarea>
          </div>
          <div class="form-group">
            <!-- <label for="foto">Foto:</label> -->
            <input type="file" id="foto" accept="image/*" @change="handleFileUpload" required>
          </div>
        </div>
        <div class="form-column">
          <div class="form-group">
            <!-- <label for="vendedor">Vendedor:</label> -->
            <input type="text" id="vendedor" v-model="vendedor" placeholder="Vendedor" required>
          </div>
          <div class="form-group">
            <!-- <label for="precio">Precio:</label> -->
            <input type="number" id="precio" v-model="precio" placeholder="Precio" required>
          </div>
          <div class="form-actions">
            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const nombre = ref('');
  const descripcion = ref('');
  const foto = ref(null);
  const vendedor = ref('');
  const precio = ref('');
  
  function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
    foto.value = e.target.result; // Obtener los datos de la imagen como base64

        // Enviar los datos de la imagen al servidor
        axios.post('/guardar-imagen', { foto })
          .then(response => {
            // Manejar la respuesta del servidor
            console.log(response.data);
          })
          .catch(error => {
            // Manejar errores
            console.error(error);
          });
      };
        }
}
  function submitForm(event) {
    event.preventDefault();
  
    // Aquí puedes agregar la lógica para enviar el formulario
  }
  </script>
  
  <style>
  .product-form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .form-column {
    width: 100%;
    max-width: 400px;
    padding: 0 16px;
    box-sizing: border-box;
  }
  
  .form-group {
    margin-bottom: 16px;
  }
  
  /* label {
    display: block;
    margin-bottom: 4px;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 8px;
    border: none;
    border-radius: 0.8rem;
  } */

  /* label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease;
  -webkit-backface-visibility: hidden;
  pointer-events: none;
  font-size: 22px;
} */

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

input, textarea {
  font-size:medium;
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
  color: #000000;
  border-radius: 0;
  transition: all 0.5s ease;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #1ab188;
}
  
  .form-actions {
    width: 100%;
    text-align: center;
    margin-top: 16px;
  }
  
  button {
    padding: 8px 16px;
    background-color: #005858;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 0.8rem;
  }
  
  button:hover {
    background-color: #5FC74B;
  }
  
  </style>