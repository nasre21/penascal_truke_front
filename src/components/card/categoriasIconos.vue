<!-- <template>
 <div class="container-fluid py-2 mb-4 mt-4">
    <div class="d-flex flex-row flex-nowrap">
        <div class="card card-body">
            <i class="fa-solid fa-shirt fa-2xl"></i>
            <spam class="pt-4">Ropas/Accesories</spam>
        </div>
        <div class="card card-body">
            <i class="fa-solid fa-video fa-2xl"></i>
            <spam class="pt-4">Videojegos</spam>
        </div>
        <div class="card card-body">
            <i class="fa-solid fa-mobile-screen-button fa-2xl"></i>
            <spam class="pt-4">Moviles / Tecnologia</spam>
        </div>
    </div>
</div>
</template> -->

<!-- <template>
    <div class="container-fluid py-2 mb-4 mt-4">
      <div class="d-flex flex-row flex-nowrap">
        <div class="card card-body" @click="filterProducts('Ropas/Accesories')">
          <i class="fa-solid fa-shirt fa-2xl"></i>
          <span class="pt-4">Ropas/Accesories</span>
        </div>
        <div class="card card-body" @click="filterProducts('Videojuegos')">
          <i class="fa-solid fa-video fa-2xl"></i>
          <span class="pt-4">Videojuegos</span>
        </div>
        <div class="card card-body" @click="filterProducts('Moviles/Technologia')">
          <i class="fa-solid fa-mobile-screen-button fa-2xl"></i>
          <span class="pt-4">Moviles / Tecnologia</span>
        </div>
      </div>
  
      <div v-if="filteredProducts.length > 0"> -->
        <!-- Aquí muestra los productos filtrados -->
        <!-- <ul>
          <li v-for="product in filteredProducts" :key="product.id">{{ product.name }}</li>
        </ul>
      </div>
      <div v-else> -->
        <!-- Si no hay productos filtrados, muestra un mensaje -->
        <!-- <p>No hay productos disponibles para esta categoría.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const products = ref([
    { id: 1, name: "Camiseta", category: "Ropas/Accesories" },
    { id: 2, name: "Pantalón", category: "Ropas/Accesories" },
    { id: 3, name: "Videojuego 1", category: "Videojuegos" },
    { id: 4, name: "Videojuego 2", category: "Videojuegos" },
    { id: 5, name: "Teléfono móvil", category: "Moviles/Technologia" },
    { id: 6, name: "Auriculares", category: "Moviles/Technologia" },
  ]);
  
  const selectedCategory = ref("");
  
  const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
      return products.value;
    } else {
      return products.value.filter((product) => product.category === selectedCategory.value);
    }
  });
  
  const filterProducts = (category) => {
    selectedCategory.value = category;
  };
  </script> -->

  <template>
    <div class="container-fluid py-2 mb-4 mt-4">
      <div class="d-flex flex-row flex-nowrap">
        <div class="card card-body" @click="filterProducts('Ropa y accesorios')">
          <i class="fa-solid fa-shirt fa-2xl"></i>
          <span class="pt-4">Ropa y Accesorios</span>
        </div>
        <div class="card card-body" @click="filterProducts('VideoJuegos')">
          <i class="fa-solid fa-video fa-2xl"></i>
          <span class="pt-4">Videojuegos</span>
        </div>
        <div class="card card-body" @click="filterProducts('Moviles y Tecnologias')">
          <i class="fa-solid fa-mobile-screen-button fa-2xl"></i>
          <span class="pt-4">Moviles y Tecnologias</span>
        </div>
      </div>
  
      <div v-if="filteredProducts.length > 0">
        <!-- Aquí muestra los productos filtrados -->
        <ul>
          <li v-for="product in filteredProducts" :key="product.id">{{ product.name }}</li>
        </ul>
      </div>
      <div v-else>
        <!-- Si no hay productos filtrados, muestra un mensaje -->
        <!-- <p>No hay productos disponibles para esta categoría.</p> -->
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);
const selectedCategory = ref("");
const emit = defineEmits(['filtrado'])

const filteredProducts = computed(() => {
  console.log('Selected Category:', selectedCategory.value);
  if (!selectedCategory.value) {
    return products.value;
  } else {
    const filtered = products.value.filter((product) => product.category === selectedCategory.value);
    console.log('Filtered Products:', filtered);
    emit("filtrado", filtered);

    return filtered;
    
  }
});

 const filterProducts = async (category) => {
    selectedCategory.value = category; 
    console.log('esto es category', selectedCategory.value);
  try {
    const response = await axios.get(`http://127.0.0.1:5000/category/${category}`);
    if (response.status === 200) {
      products.value = response.data;
    } else {
      console.error('Failed to fetch products:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};
  </script>
  

<style scoped>
.card-body {
align-items: center;

}

.card {
    border: none!important;
   
}
</style>