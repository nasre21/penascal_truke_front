<template>
    <div>
        <navBar />
    </div>
    <div class="personal-info ms-5">
      <h2>Datos personales</h2>
      <div class="personal-details">
        <img class="avatar" src="../../assets/imgg/pngwing.com.png" alt="Avatar">
        <div class="info">
          <h5>{{ nombre }}</h5>
          <p>{{ direccion }}</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
    <div>
        <footerFront />
    </div>
  </template>
  
  <style scoped>
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