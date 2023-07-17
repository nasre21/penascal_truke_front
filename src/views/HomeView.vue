<template>
    <div>
        <navBar />
    </div>
    <div>
        <categoriasIconos />
    </div>
    <div>
        <CatalogoImagines :dataInfo = "dataInfo"/>
    </div>
    <div>
        <footerFront />
    </div>
    

</template>

<script setup> 
import navBar from "@/components/Navbar/navBar.vue"
import categoriasIconos from "@/components/card/categoriasIconos.vue"
import CatalogoImagines from "@/components/card/CatalogoImagines.vue"
import footerFront from "@/components/Navbar/footerFront.vue"

import info from "@/dataInfo/getProduc.js"


import { ref, onMounted } from 'vue';

let isLoading = ref(true) 

let dataInfo = ref(onMounted(async () => {
    dataInfo.value = await info.getProduct()
    if( !dataInfo.value.isLoading){
      isLoading.value = false
    }

}))

</script>
