import axios from 'axios'

export const ApiLrhub = axios.create({
  baseURL: 'http://localhost:3023',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
