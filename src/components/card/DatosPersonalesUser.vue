<template>
  <div class="shadow-box">
    <div class="personal-info ms-5">
      <h2>Datos personales</h2>
      <div class="personal-details">
        <img class="avatar" src="../../assets/imgg/pngwing.com.png" alt="Avatar">
        <div class="info">
          <h5><strong>Nombre</strong>: {{ dataInfo.firstname }}</h5>
          <p><strong>Apellido</strong>:  {{ dataInfo.lastname }}</p>
          <p><strong>Sector</strong>:  {{ dataInfo.sector }}</p>
          <p><strong>E-mail</strong>:  {{ dataInfo.email }}</p>
          <p><strong>Telefono</strong>:  {{ dataInfo.phone }}</p>
          <p><strong>Penascales</strong>:  {{ dataInfo.penascales }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { dataInfo } = defineProps(["dataInfo"]);
</script>
  
  <style scoped>
  .shadow-box{
    margin-left: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    width: 27rem;
      height: 18rem;
      background-color: #ffffff;
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
      
  }
  .personal-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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