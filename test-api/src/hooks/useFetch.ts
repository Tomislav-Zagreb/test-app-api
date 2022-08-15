import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(extension: string): any {
  const [movieData, setMovieData] = useState()
  const [fetchError, setFetchError] = useState("")
  const API_BASENAME = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}${extension}`

  useEffect(() => {
    axios
      .get(API_BASENAME)
      .then((response) => {
        setMovieData(response.data.results)
      })
      .catch((e) => {
        setFetchError(e.response.data.error)
      })
  }, [API_BASENAME])

  return [movieData, fetchError]
}
