import axios from 'axios'

const request = async (url, method = 'GET') => {
  try {
    const params = {
      url,
      method
    }
    const response = await axios(params)
    return response
  } catch (error) {
    throw new Error('Request failed')
  }
}

export default request
