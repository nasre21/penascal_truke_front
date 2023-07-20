<template>
   <div>
     <navBar />
     <div v-if="dataProduc">
       <div>
         <div class="product">
           <div class="product-image">
             <!-- <img :src="parseFirstFile(dataProduc.files)" alt="Imagen del producto" /> -->
           </div>
           <div class="product-details">
             <h5 class="card-title">{{ dataProduc.name }}</h5>
             <p>{{ dataProduc.description }}</p>
             <p>{{ dataProduc.price }} Peñascales</p>
             <button @click="addToCart" class="buy-button">Comprar <i class="fas fa-cart-plus"></i></button>
           </div> 
         </div>
       </div>
     </div>
     <footerFront />
   </div>
 </template>
 
 <script setup>
 import footerFront from "../components/Navbar/footerFront.vue";
 import navBar from "../components/Navbar/navBar.vue";
 
 import axios from 'axios';
 import { ref, onMounted, defineProps } from 'vue';
 
 const { id } = defineProps(['id'])
 
  const dataProduc = ref(null);
 
  onMounted(async () => {
    try {
      if (dataProduc) {
         console.log("dame un id", id)
         const response = await axios.get(`http://127.0.0.1:5000/product/${id}`);
         dataProduc.value = response.data;
         console.log("detalle de producto", dataProduc.value);
     }
   } catch (error) {
     console.error(error);
   }
 });
 
 // function parseFirstFile(files) {
 //   // Implementa aquí la lógica para obtener la URL de la primera imagen del producto
 //   // según la estructura de datos que recibes desde el backend.
 //   // Asegúrate de que esta función esté implementada correctamente.
 // }
 </script>
 
