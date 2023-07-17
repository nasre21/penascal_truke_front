<template>   

<div class="container d-flex mt-2 flex-wrap">
    <!-- -----------caja 1---------- -->
    <div class="card col-lg-6 col-sm-12">
      <img
        src="${datosLeidos.imagen}"
        class="card-img-top"
        alt="${datosLeidos.titulo}"
      />
      
    </div>
 
    <!-- -----------caja 2---------- -->
    <div class="card col-lg-6 col-sm-12">
      <div class="p-5 card">
        <h1><strong>${datosLeidos.titulo}</strong></h1>
        <p>${datosLeidos.titulo}</p>
        
       
      </div>
      <div class="container_hombre d-flex justify-content-around flex-wrap mt-5">

        <button class="botonComprar">
          Comprar
        </button>
        
      </div>
      
    </div>
    <div class="vistaPequeña d-flex">
        <div class="contenedorMiniFoto" >
          <img src="../../assets/imgg/Logo2.png" alt="">
        </div>
        <div class="contenedorMiniFoto" >
          <img src="../../assets/imgg/Logo2.png" alt="">
        </div>
        <div class="contenedorMiniFoto" >
          <img src="../../assets/imgg/Logo2.png" alt="">
        </div>
        
      </div>
</div>
<div class="margen" >
  <!-- margen -->
</div>
</template>

<script setup >
import

</script>

  <style scoped >
  .margen{
    margin-bottom: 1rem;
  }
  .contenedorMiniFoto{
    border: solid 1px rgba(128, 128, 128, 0.263);
    
  }
  
  img{
    width: 6em;
  }
  .vistaPequeña{
    border: solid 1px rgba(128, 128, 128, 0.263)  ;
    /* width: 90rem; */
  }
.botonComprar{
  width: 10rem;  
  border: 0;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 15px 0;
  font-size: 2rem;
  background: #1ab188;
  color: #fff;
  transition: all 0.5s ease;
}
</style>
    
  