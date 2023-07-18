<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="data in dataInfo.data" :key="data.id">
        <div class="card card_all">
          <div v-for="(file, index) in data.files" :key="index">
            <img :src="JSON.parse(files).photos[0].dataURL" alt="Imagen" class="card-img-top">
          </div>
          <div class="card-body d-flex justify-content-around">
            <h5 class="card-title">{{ data.name }}</h5>
            <p>{{ data.price }} Peñascales</p>
            <a href="" class="btn btn-outline-success btn-sm" >Accede al producto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref} from 'vue'
const { dataInfo } = defineProps(['dataInfo'])


console.log("esto es datainfoooooo", dataInfo.data[2].files)
console.log("dato util", JSON.parse(dataInfo.data[2].files));
console.log("dato util", JSON.parse(dataInfo.data[2].files).photos[0].dataURL);
  
let photo = {};

for (let i = 0; i < dataInfo.data.length; i++) {
  if (dataInfo.data[i].files) {
    try {
      photo.value = JSON.parse(dataInfo.data[i].files);
      if (photo.value.photos && Array.isArray(photo.value.photos)) {
        for (let j = 0; j < photo.value.photos.length; j++) {
          const dataURL = photo.value.photos[j].dataURL;
          console.log(`Imagen ${i + 1}, foto ${j + 1}: ${dataURL}`);
          // Realizar cualquier otra acción que necesites con el dataURL de la imagen
        }
      }
    } catch (error) {
      console.error(`Error al analizar JSON en dataInfo.data[${i}].files: ${error}`);
    }
  }
}




</script>

<style scoped>


</style>