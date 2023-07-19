import axios from 'axios'
import {ref} from 'vue'


async function getUser(){
    let isError = false
    let isLoading = true

      let data = ref('')

      try {
        let answer = await axios.get("http://127.0.0.1:5000/users")
        data.value = await answer.data
      }
      catch (err) {
        isError = true
      }
      isLoading = false;

      return {isError, isLoading, data}
}

export default {getUser}


