<template>
    <navBar />
    <DatosPersonalesUser :dataInfo = "dataInfo" />
    <tablaComprado :dataInfo = "dataInfo" />
    <footerFront />
</template>

<script setup> 
import navBar from "../components/Navbar/navBar.vue"
import DatosPersonalesUser from "../components/card/DatosPersonalesUser.vue"
import tablaComprado from "../components/Tablas/tablaComprado"
import footerFront from "../components/Navbar/footerFront.vue"


import info from "@/dataInfo/getUser.js"


import { ref, onMounted } from 'vue';

let isLoading = ref(true) 

let dataInfo = ref(onMounted(async () => {
    dataInfo.value = await info.getUser()
    if( !dataInfo.value.isLoading){
      isLoading.value = false
    }

}))

</script>