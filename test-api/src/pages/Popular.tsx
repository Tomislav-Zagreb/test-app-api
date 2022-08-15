import { useEffect, useState, useCallback, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import useFetchPopular from "../hooks/useFetchPopular"
import FilterMovies from "../components/FilterMovies"

import "../css/horizontalList.css"

function Popular() {
  document.title = "Najpopularniji filmovi — JustWatch"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const location: any = useLocation()
  // Type should be defined, but skipped for now because I need to finish a task quickly.
  // I will explain everything during the conversation.

  let year = location?.state?.year
  let vote = location?.state?.vote
  let adult = location?.state?.adult
  let genres = location?.state?.genres
  let isReset = location?.state?.isReset

  let [pageNumber, setPageNumber] = useState(1)

  const [popularData, popularError, loading, havingMore] = useFetchPopular(
    pageNumber,
    year,
    vote,
    adult,
    genres
  )

  useEffect(() => {
    setPageNumber(1)
  }, [year, vote, adult, genres, isReset])

  const nodeObserver = useRef<IntersectionObserver | null>(null)
  const lastElement = useCallback(
    (node: HTMLDivElement) => {
      if (loading) {
        return
      }

      if (nodeObserver.current) nodeObserver.current.disconnect()

      nodeObserver.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && havingMore) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1)
          }
        },
        {
          threshold: 1,
        }
      )
      if (node) nodeObserver.current.observe(node)
    },
    [loading, havingMore]
  )

  return (
    <>
      <h1>
        Najpopularnije iz svih kategorija <br />{" "}
        <span
          style={{
            color: "var(--gold)",
            fontSize: "var(--small-font)",
            fontStyle: "oblique",
          }}
        >
          Koristite filter ispod za precizniji odabir
        </span>
      </h1>

      <FilterMovies />

      <div className="popular-container">
        {popularData !== undefined &&
          popularData.map((movie: any, index: number) => {
            if (index + 1 === popularData.length) {
              return (
                (
                  <div key={movie.id} ref={lastElement}>
                    <Link to={`/movies/${movie.id}`} {...movie}>
                      <img
                        src={
                          movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            : "https://source.unsplash.com/1600x900/?404"
                        }
                        alt={movie.overview}
                        draggable="false"
                      />
                    </Link>
                  </div>
                ) || popularError
              )
            }

            return (
              (
                <div key={movie.id}>
                  <Link to={`/movies/${movie.id}`} {...movie}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.overview}
                      draggable="false"
                    />
                  </Link>
                </div>
              ) || popularError
            )
          })}
      </div>
    </>
  )
}

export default Popular
