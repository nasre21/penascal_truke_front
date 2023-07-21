<template>
    <div>
        <navBar />
    </div>
    <div>
        <categoriasIconos @filtrado="handleFilter"/>
    </div>
    <div>
        <img src="@/assets/images/error.png" alt="" v-if="dataInfo.isError">
        <img src="@/assets/images/1488.gif" alt="" v-if="isLoading">
        <div v-if="!dataInfo.isError && !isLoading">
            <CatalogoImagines :dataInfo = "dataInfo" :filtrado="filtrado" @productoSeleccionado="productoSeleccionado"/>
        </div>
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

import info from "@/dataInfo/getProduc"

import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

let isLoading = ref(true) 

let dataInfo = ref(onMounted(
    async () => {
    dataInfo.value = await info.getProduct()
    if( !dataInfo.value.isLoading){
      isLoading.value = false
    }
}))

console.log(dataInfo);

const filtrado = ref("")

const handleFilter = (filter) =>{
        filtrado.value = filter
        console.log("esto es el array filtrado", filtrado.value)
        return filtrado
}

const productoSeleccionado = (idproduct) => {
    console.log("esto es id product en la home", idproduct)
    $router.push({ path:`/producto/${idproduct}`, params: { id: idproduct } })
}

const $router = useRouter();

</script>


