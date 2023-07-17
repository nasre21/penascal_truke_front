import axios from 'axios'
import {ref} from 'vue'


async function getProduct(){
    let isError = false
    let isLoading = true

      let data = ref('')

      try {
        let answer = await axios.get("http://127.0.0.1:5000/product")
        data.value = answer.data
      }
      catch (err) {
        isError = true
      }
      isLoading = false;

      return {isError, isLoading, data}
}

export default {getProduct}
