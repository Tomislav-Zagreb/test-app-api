import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetchSearch(searchQuery: string): any {
  const [searchedData, setSearchedData] = useState([])
  const [searchedError, setSearchedError] = useState("")
  const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchQuery}`

  useEffect(() => {
    setSearchedData([])
  }, [searchQuery])

  useEffect(() => {
    axios
      .get(API_SEARCH)
      .then((response) => {
        setSearchedData(response.data.results)
      })
      .catch((e) => {
        setSearchedError(e.response.data.error)
      })
  }, [API_SEARCH, searchQuery])

  return [searchedData, searchedError]
}
