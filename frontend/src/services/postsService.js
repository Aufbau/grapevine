import axios from "axios"

const postsService = {}

const baseUrl = "/posts"

postsService.getAll = async () => {
  try {
    const response = await axios.get(`${baseUrl}/`)
    return response.data
  } catch (error) {
    console.log(error) // robust handling needed obv
  }
}

export default postsService