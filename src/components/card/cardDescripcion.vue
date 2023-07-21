<template>
    <div class="product">
      <div class="product-image">
        <img :src="product.foto" :alt="product.nombre" />
      </div>
      <div class="product-details">
        <h3>{{ product.nombre }}</h3>
        <p>{{ product.descripcion }}</p>
        <button @click="addToCart (dato.idproduct)" class="buy-button">
          Comprar <i class="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Swal from 'sweetalert2';
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

  const addToCart = (idroduct) => {
  Swal.fire({
    title: 'Condiciones de Aceptación',
    text: 'Aquí van las condiciones que el usuario debe aceptar para acceder al producto.',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí puedes redirigir al usuario al producto o ejecutar la acción deseada después de que el usuario acepte las condiciones.
      console.log('Usuario aceptó las condiciones y accedió al producto');
    } else {
      console.log('Usuario canceló');
    }
  });
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
  
