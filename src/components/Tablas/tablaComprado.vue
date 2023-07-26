<template>
  <div class="shadow-box" >
 <div class="product-table todo">
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Comprado</th>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
       
      </tr>
    </thead>


    <tbody>
      <tr v-for="(product, index) in products" :key="index">
        <td data-label="Comprado"><img :src="product.foto" alt="Foto del producto"></td>
        <td data-label="Nombre">{{ product.nombre }}</td>
        <td data-label="Descripción">{{ product.descripcion }}</td>
        <td data-label="Precio">{{ product.precio }}</td>
        
      </tr>
    </tbody>
  </table>
</div>
</div>

</div>
<div class="shadow-box" >
  <div class="product-table todo">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
         
        </tr>
      </thead>
      <tbody v-for="data in dataCompras.data" :key="data.id">
        <tr>
          <td>{{ data.idbuy }}</td>
          <td>{{ data.userid }}</td>
          <td>{{ data.productid }}</td>
          
        </tr>
      </tbody>
    </table>
  </div>
</div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
// import axios from 'axios'
defineProps({
dataCompras: Object
})


function editarProducto(index) {
  // Lógica para editar el producto seleccionado
}

function borrarProducto(index) {
  // Lógica para borrar el producto seleccionado
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