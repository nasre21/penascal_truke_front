<!-- <template> -->
  <!-- Product table Start-->
    <!-- <div class="product-table todo">
      <table >
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody v-for="data in dataInfo.data" :key="data.id">
          <tr>
            <td><img src="" alt="Foto del producto"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.description }}</td>
            <td>{{ data.price }}</td>
            <td>
              <span @click="editTask(data.id,)"><i class="fas fa-edit"></i></span>
              <span @click="deleteTask(data.id)"><i class="fas fa-trash"></i></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div> -->
     <!-- Product table End-->
  <!-- </template> -->
  
  <!-- <script setup>
 
import {defineProps, ref} from 'vue'
import axios from 'axios';


const idUser = ref("")

defineProps({
    dataInfo: Object
  })

  const editarProducto = (index) => {
    console.log(index)
  }
  const borrarProducto = (index) => {
    console.log(index)
  }

  /* DELETE FORM */
async function deleteTask(id) {
    idUser.value = id
    

        try {
           await axios.delete(`http://127.0.0.1:5000/users/${id}`)
            location.reload()
            
        }catch(error){

            isError = true

        }return {

            isError
        }}

        /* EDIT FORM */

function editTask(id, mail, who) {
   idUser.value = id
   mailTask.value = mail
   whoTask.value = who
   hiddenEdit.value = true   
    /*  PARA ENVIAR EMITS */
    // emit("idEditTask", id)
    // emit("mailEditTask", mail)
}



async function editTaskForm(){
    try {
      await  axios.put(`http://127.0.0.1:5000/users/${idUser.value}`,{
            title: editFormTitle.value,
            description: editFormDescription.value,
            who: whoTask.value 
        })
        location.reload()
    }catch(error){
        isError = true 
    }return {
        isError
    }
}

</script> -->
<template>
  <!-- Product table Start-->
  <div class="product-table todo">
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataInfo.data" :key="data.id">
          <td><img :src="data.photo" alt="Foto del producto"></td>
          <td>{{ data.name }}</td>
          <td>{{ data.description }}</td>
          <td>{{ data.price }}</td>
          <td>
            <span @click="editTask(data.id, data.mail, data.who)"><i class="fas fa-edit"></i></span>
            <span @click="deleteTask(data.id)"><i class="fas fa-trash"></i></span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Product table End-->
</template>

<script setup>
import { defineProps, ref } from 'vue'
import axios from 'axios'

const idUser = ref('')
const editFormTitle = ref('')
const editFormDescription = ref('')
const mailTask = ref('')
const whoTask = ref('')
const hiddenEdit = ref(false)
let isError = false

defineProps({
  dataInfo: Object
})

const deleteTask = async (id) => {
  idUser.value = id
  console.log("esto es user",idUser.value)

  try {
    await axios.delete(`http://127.0.0.1:5000/users/${id}`)
    location.reload()
  } catch (error) {
    isError = true
  }
}

const editTask = (id, mail, who) => {
  idUser.value = id
  mailTask.value = mail
  whoTask.value = who
  hiddenEdit.value = true
}

const editTaskForm = async () => {
  try {
    await axios.put(`http://127.0.0.1:5000/users/${idUser.value}`, {
      title: editFormTitle.value,
      description: editFormDescription.value,
      who: whoTask.value
    })
    location.reload()
  } catch (error) {
    isError = true
  }
}
</script>

  <style>
  .todo {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  .product-table {
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