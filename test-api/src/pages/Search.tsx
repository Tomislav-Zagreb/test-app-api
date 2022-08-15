import { useLocation } from "react-router-dom"
import useFetchSearch from "../hooks/useFetchSearch"
import { Link } from "react-router-dom"

function Search() {
  const { state } = useLocation()
  const { search }: any = state

  const [searchedData, searchedError] = useFetchSearch(search)
  console.log(searchedData)

  if (searchedError) return <h3>{searchedError}</h3>

  return (
    <>
      {searchedData?.length < 1 ? (
        <h3>
          Nema pronađenih filmova. Ponovite upit koristeći druge ključne riječi.{" "}
        </h3>
      ) : (
        searchedData?.map((sd: any, index: number) => {
          return (
            <div
              key={index}
              style={{
                display: "grid",
              }}
            >
              <Link
                to={`/movies/${sd.id}`}
                {...sd}
                style={{
                  textDecoration: "none",
                  color: "var(--white)",
                  borderBottom: "3px solid var(--gold)",
                  padding: ".5rem",
                  width: "fit-content",
                }}
              >
                <h1>{sd.title}</h1>
                <img
                  src={
                    sd.poster_path
                      ? `https://image.tmdb.org/t/p/w500${sd.poster_path}`
                      : "https://source.unsplash.com/1600x900/?404"
                  }
                  alt={sd.overview}
                  style={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                />
              </Link>
            </div>
          )
        })
      )}
    </>
  )
}

export default Search
