import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const decamelizeKeysTransformer = function (data) {
  return data && JSON.stringify(decamelizeKeys(data))
}

// Converts all responses for CamelCase
axios.interceptors.response.use((response) => {
  response.data = camelizeKeys(response.data)
  return response
}, (error) => {
  return Promise.reject(error)
})

// Converts all requests to under-cased
axios.interceptors.request.use((config) => {
  const currentContentType = config.headers['Content-Type']

  // Converts URL get params to underscored
  if (config.params) {
    config.params = decamelizeKeys(config.params)
  }

  if (!currentContentType) {
    config.headers['Content-Type'] = 'application/json'
    config.transformRequest = [decamelizeKeysTransformer]
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
