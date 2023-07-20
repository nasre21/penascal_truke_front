<template>
    <div class="user-table todo">
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sector Peñascales</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in dataUser.data" :key="data">
            <td><img src="" alt="Foto del usuario"></td>
            <td>{{ data.lastname }}</td>
            <td>{{ data.firstname }}</td>
            <td>{{ data.phone }}</td>
            <td>{{ data.sector }}</td>
            <td>{{ data.penascales }}</td>
            <td>{{ data.email }}</td>
            <td>
              <span @click="editarUsuario(data.iduser)"><i class="fas fa-edit"></i></span>
              <span @click="deleteUser(data.iduser)"><i class="fas fa-trash"></i></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref,defineProps } from 'vue';
  import axios from 'axios';

  defineProps({
    dataUser: Object
  })

  const imageFiles = ref([]);
  const idUser = ref('')
  const editFormName = ref('')
  const editFormDescription = ref('')
  const editFormPrice = ref('')
  const hiddenEdit = ref(false)
  let isError = false


  const editarProducto = (index) => {

    console.log(index)
  }
  const deleteUser = async (id_user) => {
  idUser.value = id_user
  console.log("esto es producto", idUser.value)

  try {
    await axios.delete(`http://127.0.0.1:5000/users/delete/${idUser.value}`)
    location.reload()
  } catch (error) {
    isError = true
  }
}

  // const users = ref([
  //   {
  //     foto: 'ruta/a/foto1.jpg',
  //     id: 1,
  //     nombre: 'Nombre 1',
  //     apellido: 'Apellido 1',
  //     email: 'correo1@example.com',
  //     telefono: '123456789',
  //     sector: 'Peñascales 1'
  //   },
  //   {
  //     foto: 'ruta/a/foto2.jpg',
  //     id: 2,
  //     nombre: 'Nombre 2',
  //     apellido: 'Apellido 2',
  //     email: 'correo2@example.com',
  //     telefono: '987654321',
  //     sector: 'Peñascales 2'
  //   },
  //   // Agrega más usuarios aquí
  // ]);
  </script>
  
  <style>
  .todo {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
  
  .user-table {
    width: 100%;
  }
  
  table {
    width: 95%;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
  
  th {
    background-color: #005858;
    color: white;
  }
  
  tr {
    background-color: #1ab188;
    color: white
  }
  
  i {
    cursor: pointer;
    margin-left: 8px;
  }
  
  .fa-edit:hover {
    color: #5FC74B;
  }
  
  .fa-trash:hover {
    color: red;
  }
  </style>