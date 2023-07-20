<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="data in dataInfo.data" :key="data.id">
        <div class="card card_all">
          <img :src="parseFirstFile(data.files)" alt="Imagen del producto" />
          <div class="card-body d-flex justify-content-around">
            <h5 class="card-title">{{ data.name }}</h5>
            <p>{{ data.price }} Peñascales</p>
            <button class="btn btn-outline-success btn-sm" @click="keepIdProduct(data.idproduct)">Accede al producto</button>
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

img{
  width:100px;
  height: 70px;
}

</style>