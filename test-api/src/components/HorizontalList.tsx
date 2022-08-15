import useFetch from "../hooks/useFetch"
import { Link } from "react-router-dom"
import "../css/horizontalList.css"

type HorizontalListProps = {
  pathText: string
}

function HorizontalList({ pathText }: HorizontalListProps) {
  const [movieData] = useFetch(pathText)

  return (
    <div>
      {movieData !== undefined &&
        movieData.map((movie: any) => {
          return (
            <div key={movie.id}>
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
          )
        })}
    </div>
  )
}

export default HorizontalList
