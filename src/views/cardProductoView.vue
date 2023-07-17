<template>
    <navBar />
    <cardProducto />
   <footerFront />
   
  </template>
  
  <script setup>   
  import navBar from "../components/Navbar/navBar.vue"
  import cardProducto from "../components/card/CardProducto.vue"
  import footerFront from "../components/Navbar/footerFront.vue"
  import {ref, onMounted } from 'vue'
  import info from '../../src/dataInfo/getProduc'

  let isLoading = ref(true)

  let dataInfo = ref (onMounted(async ()=>{
    dataInfo.value = await info
  }))
  </script>
  