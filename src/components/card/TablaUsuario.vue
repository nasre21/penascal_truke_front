<template>
    <div class="user-table todo">
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
          <tr v-for="(user, index) in users" :key="index">
            <td><img :src="user.foto" alt="Foto del usuario"></td>
            <td>{{ user.id }}</td>
            <td>{{ user.nombre }}</td>
            <td>{{ user.apellido }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.telefono }}</td>
            <td>{{ user.sector }}</td>
            <td>
              <span @click="editarUsuario(index)"><i class="fas fa-edit"></i></span>
              <span @click="borrarUsuario(index)"><i class="fas fa-trash"></i></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const users = ref([
    {
      foto: 'ruta/a/foto1.jpg',
      id: 1,
      nombre: 'Nombre 1',
      apellido: 'Apellido 1',
      email: 'correo1@example.com',
      telefono: '123456789',
      sector: 'Peñascales 1'
    },
    {
      foto: 'ruta/a/foto2.jpg',
      id: 2,
      nombre: 'Nombre 2',
      apellido: 'Apellido 2',
      email: 'correo2@example.com',
      telefono: '987654321',
      sector: 'Peñascales 2'
    },
    // Agrega más usuarios aquí
  ]);
  
  function editarUsuario(index) {
    // Lógica para editar el usuario seleccionado
  }
  
  function borrarUsuario(index) {
    // Lógica para borrar el usuario seleccionado
  }
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