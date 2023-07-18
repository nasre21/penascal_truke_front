<template>
    <navBar />

    <div>
    <img src="@/assets/images/error.png" alt="" v-if="dataInfo.isError">
    <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
    <div>
      <DatosPersonales :dataAdmin="dataAdmin" />
    </div>
  </div>
    <div>
        <img src="@/assets/images/error.png" alt="" v-if="dataInfo.isError">
        <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
        <div>
            <TablaProductos :dataInfo = "dataInfo"/>
        </div>
    </div>
    
    <FormProductos />
    <TablaUsuario />
   <footerFront />
</template>

<script setup>
import navBar from "@/components/Navbar/navBar.vue"
import DatosPersonales from "@/components/card/DatosPersonales.vue"
import TablaProductos from "@/components/card/TablaProductos.vue"
import footerFront from "@/components/Navbar/footerFront.vue"
import TablaUsuario from "@/components/card/TablaUsuario.vue"
import FormProductos from "@/components/card/FormProductos.vue"

// dataInfo

import info from "@/dataInfo/getProduc"

import { ref, onMounted } from 'vue';

let isLoading = ref(true) 

let dataInfo = ref(onMounted(
    async () => {
    dataInfo.value = await info.getProduct()
    if( !dataInfo.value.isLoading){
      isLoading.value = false
    }

}))


import admin from "@/dataInfo/getAdmin"
let dataAdmin = ref(onMounted(
    async () => {
    dataAdmin.value = await admin.getAdmin()
    if( !dataAdmin.value.isLoading){
      isLoading.value = false
    }

}))








</script>