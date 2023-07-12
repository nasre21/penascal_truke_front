<template>
    <div>
        <navBar />
    </div>
    <div>
        <categoriasIconos />
    </div>
    <div>
        <CatalogoImagines />
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

</script>
