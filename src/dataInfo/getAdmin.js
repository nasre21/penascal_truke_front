import axios from 'axios'
import {ref} from 'vue'


async function getAdmin(){
    let isError = false;
    let isLoading = true;
    let data = ref('')

      try {
        let response = await axios.get("http://127.0.0.1:5000/admin")
        data.value = await response.data
        console.log("esta es la data de js", data.value)
      }
      catch (err) {
        isError = true
      }

      isLoading = false;

      return {isError, isLoading, data}
}

export default { getAdmin }