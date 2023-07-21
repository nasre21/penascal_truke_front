<template>
  <div id="cr_contenedor_principal" class="container-sm row justify-content-around">
    <div id="cr_caja_producto" class="card m-3 row g-0 d-flex flex-row col mt-0">
      <!-- Your content for the "cr_caja_producto" card goes here -->
    </div>

    <div>
      <div id="cr_comprar_pedido" class="card p-3 col-4">
        <div class="Pedido">
          <h5 class="card-title">Resumen del Pedido</h5>
          <div class="d-flex flex-column align-items-center gap-0 row-gap-3">
            <p id="cr_precio_total" class="card-text precios">0 €</p>
            <!-- Changes for the cart icon -->
            <div class="d-flex align-items-center">
              <i id="cr_carrito" class="fa-solid fa-cart-shopping" style="font-size: 2rem; color: #007bff;"></i>
              <a href="checkout.html" class="btn btn-light">COMPRAR</a>
            </div>
          </div>

          <h5 class="card-title pt-4">Aceptamos</h5>
          <div class="d-flex gap-0 justify-content-center column-gap-3">
            <i id="cr_visa" class="fa-brands fa-cc-visa" @click="redirectTo('https://www.visa.com')"></i>
            <i id="cr_paypal" class="fa-brands fa-cc-paypal" @click="redirectTo('https://www.paypal.com')"></i>
            <i id="cr_mastercard" class="fa-brands fa-cc-mastercard" @click="redirectTo('https://www.mastercard.com')"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted,  onUnmounted } from 'vue';

const props = defineProps();


const carrito = ref([]);

// Escucha el evento 'addToCart' para agregar el producto al carrito
const addToCartHandler = (producto) => {
  carrito.value.push(producto);
};

// Registra el evento para escuchar cuando se desmonte el componente
onMounted(() => {
  // Agrega el event listener para el evento 'addToCart'
  const eventListener = (producto) => addToCartHandler(producto);
  // Escucha el evento 'addToCart'
  window.addEventListener('addToCart', eventListener);

  // Elimina el event listener cuando el componente se desmonte (para evitar fugas de memoria)
  onUnmounted(() => {
    window.removeEventListener('addToCart', eventListener);
  });
});
const redirectTo = (url) => {
  window.location.href = url;
};
</script>

<style scoped>
/* CSS for main container */

/* CSS for card */
.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* CSS for card title */
.card-title {
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* CSS for card content */
.card-text {
  color: #555;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* CSS for primary button */
.btn-light {
  background-color: #f8fafd;
  color: #383535;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  text-decoration: none;
}

.btn-light:hover {
  background-color: #1ab188;
}

/* CSS for payment icons */
.fa-brands {
  font-size: 2rem;
  color: #555;
  margin-right: 10px;
}

/* Additional styling for card layout */
.row {
  margin: 0;
}

.gap-0 {
  gap: 1 !important;
}

.justify-content-around {
  justify-content: space-around !important;
}

.align-items-center {
  align-items: center !important;
}

/* Additional styles for the "Pedido" section */
.Pedido {
  text-align: center;
}

#cr_precio_total {
  font-size: 2.5rem;
  color: #1ab188;
  margin-bottom: 5px;
}

#cr_carrito {
  /* Styles for the cart icon */
  font-size: 1.8rem; /* Smaller font size */
  color: #007bff;
  margin-right: 5px; /* Add some right margin to separate from text */
}

#cr_comprar_pedido {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
}

#cr_visa,
#cr_paypal,
#cr_mastercard {
  cursor: pointer;
}
</style>
