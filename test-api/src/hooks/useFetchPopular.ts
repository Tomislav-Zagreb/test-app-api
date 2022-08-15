import { useEffect, useState } from "react"
import axios from "axios"

export default function usePopularMovies(
  page: number,
  year: number,
  vote: number,
  adult: string,
  genres: string
) {
  const [popularData, setPopularData] = useState<any>([])
  const [popularError, setPopularError] = useState("")
  const [loading, setLoading] = useState(true)
  const [havingMore, setHavingMore] = useState(false)

  const POPULAR_API =
    adult !== undefined &&
    year !== undefined &&
    vote !== undefined &&
    genres !== undefined
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=${adult}&page=${page}&year=${year}&vote_average.gte=${vote}&with_genres=${genres}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}`

  useEffect(() => {
    setLoading(true)
    setPopularError("")

    axios
      .get(POPULAR_API)
      .then((response) => {
        if (
          adult !== undefined &&
          year !== undefined &&
          vote !== undefined &&
          genres !== undefined &&
          page === 1 // IMPORTANT (FLICKERING WITHOUT IT)
        ) {
          setPopularData((prev: []) => {
            return [...response.data.results]
          })
        } else {
          setPopularData((prev: []) => {
            return [...prev, ...response.data.results]
          })
        }

        setHavingMore(response.data.results.length > 0)
        setLoading(false)
      })
      .catch((e) => {
        setPopularError(e.response.data.error)
      })
  }, [page, POPULAR_API, adult, vote, year, genres])

  return [popularData, popularError, loading, havingMore]
}
