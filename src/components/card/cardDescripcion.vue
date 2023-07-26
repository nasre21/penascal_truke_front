<!-- <template>
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
  </style> -->
  
  <template>
    <div class="Carousel">
      <div
        class="lightbox"
        v-show="lightboxActive"
        @click.self="lightboxActive = false; currLightboxImg = currImgIdx"
      >
        <img :src="imgList[currLightboxImg].src" />
        <div class="prev" @click="goToImg(currLightboxImg - 1)">&laquo;</div>
        <div class="next" @click="goToImg(currLightboxImg + 1)">&raquo;</div>
      </div>
  
      <img
        class="currImg"
        :src="imgList[currImgIdx].src"
        @click="lightboxActive = true"
      />
  
      <transition-group :name="transition_name" tag="div" class="CROP">
        <div
          class="Carousel_chunk"
          v-for="(chunk, i) in arrChunk"
          v-show="currSlide === i"
          :key="i"
        >
          <div
            class="chunk_item"
            v-for="(item, j) in chunk"
            :key="j"
            @click="currImgIdx = j + i * chunkSize"
            :class="{ CURR: item.src === imgList[currImgIdx].src }"
          >
            <img :src="item.src" />
          </div>
        </div>
      </transition-group>
  
      <div class="Carousel-controls">
        <svg
          @click="prev"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="gold"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" y1="12" x2="8" y2="12"></line>
        </svg>
  
        <div
          class="Carousel-controls_dot"
          v-for="(dot, i) in arrChunk"
          :key="i"
          :class="{ CURR: currSlide === i }"
          @click="goToChunk(i)"
        >
          {{ i + 1 }}
        </div>
  
        <svg
          @click="next"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="gold"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 16 16 12 12 8"></polyline>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chunkSize: 4,
        imgList: Array.from({length:33}, (v, i) => ({src: `//raw.githubusercontent.com/codrops/HoverEffectIdeas/master/img/${i+1}.jpg`})),
        currSlide: 0,
        currImgIdx: 15,
        transition_name: "slide_next",
        lightboxActive: false,
        currLightboxImg: 15,
      };
    },
    watch: {
      currImgIdx(newVal) {
        this.currLightboxImg = newVal;
      },
    },
    computed: {
      arrChunk() {
        return Array.from(
          { length: Math.ceil(this.imgList.length / this.chunkSize) },
          (v, i) =>
            this.imgList.slice(i * this.chunkSize, i * this.chunkSize + this.chunkSize)
        );
      },
    },
    methods: {
      prev() {
        this.transition_name = "slide_prev";
        this.currSlide = this.currSlide === 0 ? this.arrChunk.length - 1 : this.currSlide - 1;
      },
      next() {
        this.transition_name = "slide_next";
        this.currSlide = this.currSlide === this.arrChunk.length - 1 ? 0 : this.currSlide + 1;
      },
      goToImg(n) {
        this.currLightboxImg = n < 0 ? this.imgList.length - 1 : n % this.imgList.length;
      },
      goToChunk(idx) {
        this.transition_name = idx < this.currSlide ? "slide_prev" : "slide_next";
        this.currSlide = idx;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Tu estilo CSS aquí */
  </style>
  
