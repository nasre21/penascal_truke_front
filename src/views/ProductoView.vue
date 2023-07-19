<template>
   <div>
      <navBar />
   </div>
   <div>
         <img src="@/assets/images/error.png" alt="" v-if="dataInfoOne.isError">
        <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
        <div v-if="!dataInfoOne.isError && !isLoading">
            <CardProducto @productoSeleccionado="handleProductoSeleccionado" />
         </div>
   </div>
   <div>
         <footerFront />
   </div>
</template>

<script setup> 
import footerFront from "../components/Navbar/footerFront.vue"
import navBar from "../components/Navbar/navBar.vue"
import CardProducto from "../components/card/CardProducto.vue"

import { ref } from 'vue';

let isLoading = ref(true) 
const idproduct = ref(null);

function handleProductoSeleccionado(idProducto) {
   idproduct.value = idProducto;
  console.log('Producto seleccionado:', idProducto);
}



</script>