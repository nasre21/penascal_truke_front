<template>   

<div class="container d-flex mt-2 flex-wrap">
    <!-- -----------caja 1---------- -->
    <div class="card col-lg-6 col-sm-12">
      <img
        src="${datosLeidos.imagen}"
        class="card-img-top"
        alt="${datosLeidos.titulo}"
      />
      <div class="card-body">
        <div class="d-flex justify-content-around flex-wrap pt-4">
         <!-- <button class="boton_comprar btn btn-dark col-sm-4" type="button">
            Comprar
          </button>
          <button class="boton_añadir btn btn-dark col-sm-4 agregar-carrito" type="button">
            Añadir al carrito
          </button>-->
        </div>
      </div>
    </div>
    <!-- -----------caja 2---------- -->
    <div class="card col-lg-6 col-sm-12">
      <div class="p-5 card">
        <h1><strong>${datosLeidos.titulo}</strong></h1>
        <p>${datosLeidos.titulo}</p>
        
        <div>
          <span class="my-3 h3">${datosLeidos.precio} &nbsp;</span
          ><span class="text-danger text-decoration-line-through"
            >444,99</span
          >
        </div>
      </div>
      <div class="container_hombre d-flex justify-content-around flex-wrap mt-5">

        <button class="talla border border-dark col-2 text-center">
          EU 40
        </button>
        <button class="talla border border-dark col-2 text-center">
          EU 41
        </button>
        <button class="talla border border-dark col-2 text-center">
          EU 42
        </button>
        <button class="talla border border-dark col-2 text-center">
          EU 43
        </button>
      </div>
      
    </div>
</div>
</template>
  
    
  