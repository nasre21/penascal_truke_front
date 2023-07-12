<template>
  <navBar />
  <CardContact />
  <CardContactMap />
 <footerFront />
 
</template>

<script setup> 
import footerFront from "../components/Navbar/footerFront.vue"
import navBar from "../components/Navbar/navBar.vue"
import CardContact from "../components/card/CardContact.vue"
import CardContactMap from "../components/card/CardContactMap"

</script>

<style>
h1, h2 {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.centered-text {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-top: 10rem;

}
</style>



