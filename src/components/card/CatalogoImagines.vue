<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="data in dataInfo.data" :key="data.id">
        <div class="card card_all">
         
          <div class="card-body d-flex justify-content-around">
            <h5 class="card-title">{{ data.name }}</h5>
            <p>{{ data.price }} Peñascales</p>
            <img :src="parseFirstFile(data.files)" alt="Imagen del producto" />
            <a class="btn btn-outline-success btn-sm" @click="keepIdProduct(data.idproduct )">Accede al producto</a>            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits  } from 'vue';

const { dataInfo } = defineProps(['dataInfo']);

const emit = defineEmits(['productoSeleccionado'])

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

function keepIdProduct(idProducto) {
  console.log("esto es producto value", idProducto);
  emit('productoSeleccionado', idProducto);
}


</script>

<style scoped>

.card-body{
  flex-wrap: wrap;
}

.card{
  width: 20rem;
  height: 15rem;
  margin: 1rem;
  margin-left: 2rem;
  border: solid 1px black;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
}

.container{
  width: 1366px;
  height: 768px;
  margin-bottom: 3rem;


}

img{
  width:10rem;
  height: 7rem;
}

</style>