<template>
    <div class="user-table todo">
      <h3>Usuarios</h3>
      <table>
        <thead>
          <tr>
            <th>Apellido</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Sector</th>
            <th>Peñascales</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody v-for="data in dataUser.data" :key="data.iduser">
  <tr >
    <!-- <td><img src="" alt="Foto del usuario"></td> -->
    <td>{{ data.lastname }}</td>
    <td>{{ data.firstname }}</td>
    <td>{{ data.phone }}</td>
    <td>{{ data.sector }}</td>
    <td>{{ data.penascales }}</td>
    <td>{{ data.email }}</td>
    <td>
      <span @click="editarUser(data.iduser)"><i class="fas fa-edit"></i></span>
      <span @click="deleteUser(data.iduser)"><i class="fas fa-trash"></i></span>
    </td>
  </tr>
  <tr v-show="hiddenEdit" v-if="data.iduser == idUser">
    <td><input v-model="editLastname" type="text"></td>
    <td><input v-model="editFirstName" type="text"></td>
    <td><input v-model="editPhone" type="number"></td>
    <td><input v-model="editSector" type="text"></td>
    <td><input v-model="editPenascales" type="text"></td>
    <td><input v-model="editEmail" type="text"></td>
    <td>
      <button @click="editarUserForm">Guardar</button>
      <button @click="cancelEditTask">Cancelar</button>
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

  // const imagenUser = ref([]);
  const idUser = ref('')
  const editLastname = ref('')
  const editFirstName = ref('')
  const editPhone = ref('')
  const editSector = ref('')
  const editPenascales = ref('')
  const editEmail = ref('')
  const hiddenEdit = ref(false)
  let isError = false


  const editarUser = (id_edit) => {
    idUser.value = id_edit
  hiddenEdit.value = true
    console.log(id_edit)
  }

   async function editarUserForm(){
    try{
      const patchResponse = await axios.patch(`http://127.0.0.1:5000/users/change/${idUser.value}`, {
      lastname: editLastname.value,
      firstname: editFirstName.value,
      phone: editPhone.value,
      sector: editSector.value,
      penascales: editPenascales.value,
      email: editEmail.value
    })
    console.log("esto es respuesta", patchResponse)
    location.reload()
    }catch(error){
      isError = true
    }

   }



  const cancelEditTask = () => {
  idUser.value = ''
  editFirstName.value = ''
  editlastname.value = ''
  editPhone.value = ''
  editSector.value = ''
  editPenascales.value = ''
  editEmail.value = '' 
  hiddenEdit.value = false
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