<template>
    <div class="product">
      <div class="product-image">
        <img :src="product.foto" :alt="product.nombre" />
      </div>
      <div class="product-details">
        <h3>{{ product.nombre }}</h3>
        <p>{{ product.descripcion }}</p>
        <button @click="addToCart" class="buy-button">
          Comprar <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    methods: {
      addToCart() {
        // Lógica para añadir el producto al carrito
      },
    },
  };
  </script>
  
  <style scoped>
  .product {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .product-image {
    flex: 0 0 auto;
    margin-right: 10px;
  }
  
  .product-image img {
    width: 100px;
    height: 100px;
  }
  
  .product-details {
    flex: 1 1 auto;
  }
  
  .product-details h3 {
    margin-top: 0;
    margin-bottom: 5px;
  }
  
  .product-details p {
    margin-top: 0;
    margin-bottom: 10px;
  }
  
  .buy-button {
    padding: 10px 15px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
  
  .buy-button i {
    margin-left: 5px;
  }
  </style>
  
