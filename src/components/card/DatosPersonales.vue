<template>
    <div class="personal-info ms-5" >
      <h2>Datos personales</h2>
      <div class="personal-details" v-for="data in dataAdmin.data" :key="data.id">
        <img class="avatar" src="../../assets/imgg/pngwing.com.png" alt="Avatar">
        <div class="info">
          <h5></h5>
          <p>{{ data.email }}</p>
          <p>{{ data.name }}</p>
        </div>
      </div>
    </div>
  </template>

  <script setup>
import { defineProps } from 'vue';

defineProps({
  dataAdmin: Object
});


</script>
  
  <style scoped>
  .personal-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 27rem;
      height: 10rem;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  
  .personal-details {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }
  
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  @media (max-width: 600px) {
    .personal-details {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .avatar {
      margin-bottom: 0.5rem;
    }
  }
  </style>

<script>
import navBar from "@/components/Navbar/navBar.vue"
import footerFront from "@/components/Navbar/footerFront.vue"

export default {
  data() {
    return {
      nombre: 'Nombre Apellido',
      direccion: 'Calle Ejemplo, Ciudad, País'
    };
  }
};
</script>