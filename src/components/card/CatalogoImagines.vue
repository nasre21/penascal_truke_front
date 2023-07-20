<template>
  <!-- All products -->
  <div v-show="allProduct" class="container">
    <div class="row">
      <div class="col-md-4" v-for="data in dataInfo.data" :key="data.id">
        <div class="card card_all">
          <img :src="parseFirstFile(data.files)" alt="Imagen del producto" />
          <div class="card-body d-flex justify-content-around">
            <h5 class="card-title">{{ data.name }}</h5>
            <p>{{ data.price }} Peñascales</p>
            <a class="btn btn-outline-success btn-sm" @click="keepIdProduct(data.idproduct )">Accede al producto</a>
          </div>
        </div>
      </div>
    </div>
  </div>
<!-- Only products by category -->
<div v-show="selectCategory" class="container">
    <div class="row">
      <div class="col-md-4" v-for="dato in filtrado" :key="dato.id">
        <div class="card card_all">
          <img :src="parseFirstFile(dato.files)" alt="Imagen del producto" />
          <div class="card-body d-flex justify-content-around">
            <h5 class="card-title">{{ dato.name }}</h5>
            <p>{{ dato.price }} Peñascales</p>
            <a class="btn btn-outline-success btn-sm" @click="keepIdProduct(dato.idproduct)">Accede al producto</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  {{ filtrado }}
</template>

<script setup>
import { defineProps, ref, defineEmits, watch } from 'vue';

const { dataInfo, filtrado } = defineProps(['dataInfo', 'filtrado']);


const emit = defineEmits(['productoSeleccionado'])

const allProduct = ref(true)
const selectCategory = ref(false)


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
watch(filtrado, (newValue) => {
  console.log("esto es filtrado en la home", filtrado);
  if (filtrado === !!newValue) {
    allProduct.value = false;
  } else {
    selectCategory.value = true;
  }
});

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