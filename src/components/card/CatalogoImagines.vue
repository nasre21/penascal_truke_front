<template>
<section id="gallery">
  <div class="container" v-for="data in dataInfo.data" :key="data.id"  >
    <div class="row">
    <div class="col-lg-3 mb-4">
    <div class="card">
      <img src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="" class="card-img-top">
      <div class="card-body d-flex justify-content-around">
        <h5 class="card-title">{{ info.name }}</h5>
        <a href="" class="btn btn-outline-success btn-sm" @click="toggleDescription">{{ showDescription ? 'Read Less' : 'Read More' }}>Read More</a>
        <p v-if="showDescription">{{ info.description }}</p>
        <a href="" class="btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>
      </div>
     </div>
    </div>
  </div>
</div>
</section>

</template>

<script setup>

import {defineProps, ref} from 'vue'

let isError = ref(false)

defineProps({
    dataInfo: Object
})


const showDescription = ref(false);

function toggleDescription() {
  showDescription.value = !showDescription.value;
}




</script>