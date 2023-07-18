<template>
<div class="container">
  <div class="row">
    <div class="col-md-4" v-for="data in dataInfo.data" :key="data.id">
      <div class="card card_all">
        <!-- <img v-for="photo in data.files.photos" :key="photo.name" :src="photo.dataURL" alt="" class="card-img-top"> -->
        <div class="card-body d-flex justify-content-around">
          <h5 class="card-title">{{ data.name }}</h5>
          <p>{{ data.price }} Peñascales</p>
          <a href="" class="btn btn-outline-success btn-sm" >Accede al producto</a>
        </div>
      </div>
      {{ data.files }}
    </div>
  </div>
</div>
</template>

<script setup>

import {defineProps} from 'vue'


defineProps({
    dataInfo: Object
})




</script>

<style scoped>


</style>