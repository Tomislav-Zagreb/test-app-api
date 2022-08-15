import MovieDetailsUI from "../components/MovieDetailsUI"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function MovieDetails() {
  const { id } = useParams()

  const [detail, setDetail] = useState<any>()
  const [detailError, setDetailError] = useState<boolean>(false)
  const [textError, setTextError] = useState<string>("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        setDetailError(false)
        const allData = response.data
        setDetail(allData)
      })
      .catch((e) => {
        setDetailError(true)
        setTextError(e.response.data.error)
      })
  }, [id])

  if (detail != undefined) {
    return <MovieDetailsUI {...detail} id={id} />
  } else if (detailError) {
    return <h3>{textError}</h3>
  } else {
    return <h3>Učitavanje podataka u tijeku...</h3>
  }
}

export default MovieDetails
