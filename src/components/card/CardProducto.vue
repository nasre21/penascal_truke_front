<template>   
  <div v-for="info in dataInfo.data" :key="info.id" >
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
          <h2><strong>${info.}</strong></h2>
          <p>${info.}</p>
          
         
        </div>
        <div class="container_hombre d-flex justify-content-around flex-wrap mt-5">
  
          <button class="botonComprar">
            Comprar
          </button>
          
        </div>
        
      </div>
      <div class="vistaPequeña d-flex">
        <div v-for="file in parseFiles(data.files)" :key="file.id">
              <img :src="file.url" alt="Imagen del producto" />
            </div> 
          
        </div>
  </div>
  <div class="margen" >
    <!-- margen -->
  </div>
  </div>
  </template>
  
  <script setup >
  
  async function getOneProduct(idproduct){
      let isError = false;
      let isLoading = true;
      let data = ref('')
  
        try {
          let response = await axios.get(`http://127.0.0.1:5000/product/${idproduct}`)
          data.value = await response.data
          console.log("esta es la data de js", data.value)      
        }
        catch (err) {
          isError = true
        }
  
        isLoading = false;
  
        return {isError, isLoading, data}
  }
  
   function parseFiles(filesString) {
     try {
       const filesArray = JSON.parse(filesString);
       return filesArray.map((url, id) => ({ url, id }));
     } catch (error) {
       console.error("Error al analizar los archivos:", error);
       return [];
     }
   }
  
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
