<template>
    <navBar />
    <DatosPersonales />  
    <div>
        <img src="@/assets/images/error.png" alt="" v-if="dataInfo.isError">
        <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
        <div>
            <TablaProductos :dataInfo = "dataInfo"/>
        </div>
    </div>
    
    <FormProductos />
    <div>
        <img src="@/assets/images/error.png" alt="" v-if="dataInfo.isError">
        <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
    <div>
    <TablaUsuario :dataUser="dataUser" />
    </div>
    </div>
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

//DataUser
import User from "@/dataInfo/getUser"



// let isLoading = ref(true) 

let dataUser = ref(onMounted(
    async () => {
    dataUser.value = await info.getUser()
    if( !dataUser.value.isLoading){
      isLoading.value = false
    }

}))





</script>