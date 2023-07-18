<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="data in dataInfo.data" :key="data.id">
        <div class="card card_all">
          <!-- Mostrar las imágenes -->
          <div v-for="file in parseFiles(data.files)" :key="file.id">
            <img :src="file.url" alt="Imagen del producto" />
          </div>

          <div class="card-body d-flex justify-content-around">
            <h5 class="card-title">{{ data.name }}</h5>
            <p>{{ data.price }} Peñascales</p>
            <a href="" class="btn btn-outline-success btn-sm">Accede al producto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const { dataInfo } = defineProps(['dataInfo']);

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



<style scoped>


</style>