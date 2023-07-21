<template>
    <main class="d-flex justify-content-center">
      <div id="cr_contenedor_principal" class="container-sm row justify-content-around">
        <div id="cr_caja_producto" class="card m-3 row g-0 d-flex flex-row col mt-0">
          <!-- Your content for the "cr_caja_producto" card goes here -->
        </div>
  
        <div>
          <div id="cr_comprar_pedido" class="card p-3 col-4">
            <div class="Pedido">
              <h5 class="card-title">Resumen del Pedido</h5>
              <div class="d-flex flex-column align-items-center gap-0 row-gap-3">
                <div class="d-flex gap-0 column-gap-3 align-items-center">
                  <i id="cr_carrito" class="fa-solid fa-cart-shopping"></i>
                  <p id="cr_precio_total" class="card-text precios">0 €</p>
                </div>
                <a href="checkout.html" class="btn btn-primary">COMPRAR</a>
              </div>
  
              <h5 class="card-title pt-4">Aceptamos</h5>
              <div class="d-flex gap-0 column-gap-3">
                <i id="cr_visa" class="fa-brands fa-cc-visa"></i>
                <i id="cr_paypal" class="fa-brands fa-cc-paypal"></i>
                <i id="cr_mastercard" class="fa-brands fa-cc-mastercard"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>

  </script >
  
  <style scoped>

  </style>
  