import axios from "axios"

const networkService = {}

networkService.get = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.log(error) // robust handling needed obv
  }
}

export default networkService