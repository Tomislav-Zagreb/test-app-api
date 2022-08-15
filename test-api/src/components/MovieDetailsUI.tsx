import { useEffect, useState } from "react"
import detailStyles from "../css/detailStyles.module.css"
import { useStorageContext } from "../context/StorageContext"

type DetailsUIProps = {
  title: string
  overview: string
  original_title: string
  release_date: string
  adult: boolean
  popularity: number
  vote_average: number
  vote_count: number
  poster_path: string
  backdrop_path: string
  id: number
}

function MovieDetailsUI({
  title,
  overview,
  original_title,
  release_date,
  adult,
  popularity,
  vote_average,
  vote_count,
  poster_path,
  backdrop_path,
  id,
}: DetailsUIProps) {
  const { toggleStorage } = useStorageContext()

  const [storred, setStorred] = useState<boolean | undefined>()

  useEffect(() => {
    let isStorred =
      JSON.parse(localStorage.getItem("id")!) != null
        ? JSON.parse(localStorage.getItem("id")!).includes(Number(id))
        : false
    setStorred(isStorred)
    console.log(isStorred)
  }, [id, storred])

  return (
    <div className={detailStyles.detailsContainer}>
      <img
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : "https://source.unsplash.com/1600x900/?404"
        }
        alt={overview}
        draggable="false"
        className={detailStyles.backImage}
      />

      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : "https://source.unsplash.com/1600x900/?404"
        }
        alt={overview}
        draggable="false"
        className={detailStyles.posterImage}
      />

      <div className={detailStyles.mainInfo}>
        <h1>{title}</h1>

        <div
          className={
            storred
              ? `${detailStyles.marker} ${detailStyles.storred}`
              : `${detailStyles.marker}`
          }
          onClick={() => {
            toggleStorage(id)
            setStorred(!storred)
          }}
        >
          {storred ? "DA" : "NE"}
        </div>

        <div>
          <span>IZVORNI NAZIV: </span>
          <h5>{original_title}</h5>
        </div>

        <div>
          <span>DATUM PUŠTANJA: </span>
          <h5>{release_date}</h5>
        </div>

        <div>
          <span>PREGLED FILMA: </span>
          <h5>{overview}</h5>
        </div>
      </div>

      <div className={detailStyles.secondaryInfo}>
        <div>
          <span>SADRŽAJ ZA ODRASLE: </span>
          <h5>{adult ? "Je" : "Nije"}</h5>
        </div>

        <div>
          <span>POPULARNOST: </span>
          <h5>{popularity}</h5>
        </div>

        <div>
          <span>PROSJEČNA OCJENA: </span>
          <h5>{vote_average} / 10</h5>
        </div>

        <div>
          <span>BROJ GLASOVA: </span>
          <h5>{vote_count}</h5>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsUI
