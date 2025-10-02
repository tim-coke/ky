// src/utils/request.js
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1/',
  timeout: 2000,
})

export const post = (obj) => {
  obj.method = 'POST'
  return request(obj)
}

export const get = (obj) => {
  obj.method = 'GET'
  if (obj.data) {
    const queryParams = new URLSearchParams(obj.data).toString()
    obj.url += queryParams ? `?${queryParams}` : ''
  }
  return request(obj)
}
