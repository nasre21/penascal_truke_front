<template>
    <div>
      <navBar />
    </div>
  
    <div>
      <img src="@/assets/images/error.png" alt="" v-if="dataInfo.isError">
      <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
      <div v-if="!dataInfo.isError && !isLoading">
        <DatosPersonalesUser :dataInfo="dataInfo.data" />
       </div>
    </div>
  
    <div>
      <tablaComprado />
    </div>
  
    <div>
      <footerFront />
    </div>
  </template>

<script setup>
import navBar from "../components/Navbar/navBar.vue";
import DatosPersonalesUser from "../components/card/DatosPersonalesUser.vue";
import tablaComprado from "../components/Tablas/tablaComprado.vue";
import footerFront from "../components/Navbar/footerFront.vue";

import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router"; // Importa useRoute desde vue-router
import axios from "axios";

const isLoading = ref(true);
const userId = ref(null);
const id = ref(null);
const dataInfo = ref({ isError: false, isLoading: true, data: null });

const route = useRoute(); 

onBeforeMount(async () => {
  id.value = route.params.id,
  userId.value = id.value,

  await fetchData();
});

async function fetchData() {
  try {
    const answer = await axios.get(`http://127.0.0.1:5000/users/${id.value}`);
    dataInfo.value.data = answer.data;
    isLoading.value = false;
  } catch (err) {
    dataInfo.value.isError = true;
    isLoading.value = false;
  }
}
</script>