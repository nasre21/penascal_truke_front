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
        <tbody v-for="data in dataInfo.data" :key="data.idproduct">
          <tr>
            <td><img src="" alt="Foto del producto"></td>
            <td>{{ data.name }}</td>
            <td>{{ data.description }}</td>
            <td>{{ data.price }}</td>
            <td>
              <span @click="editTask(data.id,)"><i class="fas fa-edit"></i></span>
              <span @click="deleteTask(data.id)"><i class="fas fa-trash"></i></span>
              <span @click="editarProducto()"><i class="fas fa-edit"></i></span>
              <span @click="borrarProducto(data.idproduct)"><i class="fas fa-trash"></i></span>
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


const idProducto = ref("")

defineProps({
    dataInfo: Object
  })




  const editarProducto = (id) => {
    console.log(id)
  }

  /* DELETE FORM */
async function deleteTask(id) {
    idProducto.value = id
    

        try {
           await axios.delete(`http://127.0.0.1:5000/users/${id}`)
const idProduct = ref("")
const files = ref("")
const name = ref("")
const description = ref("")
const price = ref("")
const category = ref("")

let isError = ref(false)



  // Delete Product
   const borrarProducto = async(idproduct) => {
    idProduct.value = idproduct
    console.log("idProduct", idProduct.value)
    try {
           await axios.delete(`http://127.0.0.1:5000/product/${idproduct}`)
            location.reload()
            
        }catch(error){

            isError = true

        }return {

            isError
        }}

        /* EDIT FORM */

function editTask(id, mail, who) {
   idProducto.value = id
   mailTask.value = mail
   whoTask.value = who
   hiddenEdit.value = true   
    /*  PARA ENVIAR EMITS */
    // emit("idEditTask", id)
    // emit("mailEditTask", mail)
}



async function editTaskForm(){
    try {
      await  axios.put(`http://127.0.0.1:5000/users/${idProducto.value}`,{
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
    <h3>Productos</h3>
    <table>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Categoria</th>

          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody v-for="data in dataInfo.data" :key="data.id">
        
        <tr>
          <td><img :src="data.photo" alt="Foto del producto"></td>
          <td>{{ data.name }}</td>
          <td>{{ data.description }}</td>
          <td>{{ data.category }}</td>
          <td>{{ data.price }}</td>
          <td>
            <span @click="editTask(data.idproduct)"><i class="fas fa-edit"></i></span>
            <span @click="deleteTask(data.idproduct)"><i class="fas fa-trash"></i></span>
          </td>
        </tr>
        
        <tr v-show="hiddenEdit" v-if="data.idproduct == idProducto">
          
          <td> <input type="file" id="foto" ref="fileInput" multiple @change="handleFiles($event)"></td>
          <td><input v-model="editFormName" type="text"></td>
          <td><input v-model="editFormDescription" type="text"></td>
          <td><input v-model="editFormPrice" type="number"></td>
          <td>
            <button @click="editTaskForm">Guardar</button>
            <button @click="cancelEditTask">Cancelar</button>
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
defineProps({
  dataInfo: Object
})

const imageFiles = ref([]);
const idProducto = ref('')
const editFormName = ref('')
const editFormDescription = ref('')
const editFormPrice = ref('')
const hiddenEdit = ref(false)
let isError = false

const handleFiles = (event) => {
  const files = event.target.files;
  imageFiles.value = Array.from(files);
  console.log('description', imageFiles.value);
};



const deleteTask = async (id) => {
  idProducto.value = id
  console.log("esto es producto", idProducto.value)

  try {
    await axios.delete(`http://127.0.0.1:5000/product/delete/${idProducto.value}`)
    location.reload()
  } catch (error) {
    isError = true
  }
}

const editTask = (idproduct) => {
  idProducto.value = idproduct
  hiddenEdit.value = true
}

const cancelEditTask = () => {
  idProducto.value = ''
  editFormName.value = ''
  editFormDescription.value = ''
  editFormPrice.value = ''
  hiddenEdit.value = false
}


async function editTaskForm(){
const filePromises = imageFiles.value.map(file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        // Obtener los datos del archivo leído
        const fileData = event.target.result;
        resolve(fileData);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file); // Leer el archivo como una URL de datos
    });
  });

  try {
    // Esperar a que todas las promesas de carga de archivos se resuelvan
    const filesData = await Promise.all(filePromises);

    console.log("esto es name", editFormName.value)
    console.log("esto es description", editFormDescription.value)
    console.log("esto es price", editFormPrice.value)
    console.log("esto es id", idProducto.value)
    console.log("esto es filesData", filesData)

    const patchResponse = await axios.patch(`http://127.0.0.1:5000/product/update/${idProducto.value}`, {
      name: editFormName.value,
      description: editFormDescription.value,
      price: editFormPrice.value,
      files: filesData
    })
    console.log("esto es respuesta", patchResponse)
    location.reload()
  } catch (error) {
    isError = true
  }
};


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
