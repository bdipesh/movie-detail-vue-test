import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMovieDetail = defineStore('movieDetail', () => {
  const detail = ref({})
  const getMovieDetail = async () => {
    const response = await fetch('https://www.omdbapi.com/?i=tt3896198&apikey=d2132124')
    console.log(response)
    const data = await response.json()
    console.log('deata', data)
    detail.value = data
  }

  return { detail, getMovieDetail }
})
