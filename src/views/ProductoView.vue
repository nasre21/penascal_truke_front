<template>
   <div>
     <navBar />
     <div class="cajadetalles" v-if="dataProduc">
       <div>
         <div class="product">
          
           <div class="product-details">
              <h5 class="card-title">{{ dataProduc.name }}</h5>
              <p>{{ dataProduc.description }}</p>
              <strong><p>{{ dataProduc.price }} Peñascales</p></strong>
              <img class="fotodetalles" :src="parseFirstFile(dataProduc.photo)" alt="Imagen del producto" /> 
              <div class="product-image">              
                <button @click="addToCart" class="buy-button">Comprar <i class="fas fa-cart-plus"></i></button>         
              </div>             
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

 function parseFirstFile(filesString) {
  try {
    const filesArray = JSON.parse(filesString);
    if (Array.isArray(filesArray) && filesArray.length > 0) {
      return filesArray[0];
    }
    return '';
  } catch (error) {
    console.error("Error al analizar los archivos:", error);
    return '';
  }
}
 

 </script>
 <style scoped >
img{
  width:15rem;
  height: 10rem;
}

h5{
  margin-top: 1rem;
  margin-left: 8rem; 
  
}

p{
  margin-left: 5rem; 
  margin-top: 1rem;
  
}

 button{
  margin-left: 10rem;
  margin-top: 1rem;
  padding: 8px 16px;
  background-color: #005858;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 0.8rem;
 }
 .product-image{
  flex-direction: row;
 }

 .fotodetalles{
  margin-left: 6rem;
 }

.cajadetalles{
  
  display: flex;
  margin-left:34%;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 27rem;
      height: 24rem;
      background-color: #ffffff;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);

}

</style>
