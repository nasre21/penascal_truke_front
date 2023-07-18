<template>
  <!-- Product table Start-->
    <div class="product-table todo">
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
              <span @click="editarProducto()"><i class="fas fa-edit"></i></span>
              <span @click="borrarProducto(data.idproduct)"><i class="fas fa-trash"></i></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
     <!-- Product table End-->
  </template>
  
  <script setup>
 
import {defineProps, ref} from 'vue'


defineProps({
    dataInfo: Object
  })




  const editarProducto = (id) => {
    console.log(id)
  }

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
    try {
           await axios.delete(`http://127.0.0.1:5000/product/${idproduct}`)
            location.reload()
            
        }catch(error){

            isError = true

        }return {

            isError
        }
    /*  PARA ENVIAR EMITS */
    // emit("idDeleteTask", id)
    // emit("mailDeleteTask", mail)
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