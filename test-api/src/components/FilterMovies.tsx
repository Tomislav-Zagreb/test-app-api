import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import filterStyles from "../css/filterStyles.module.css"

function FilterMovies() {
  const [year, setYear] = useState<number | undefined>(2020)
  const [vote, setVote] = useState<number | undefined>(1)
  const [adult, setAdult] = useState<string | undefined>("false")
  const [genres, setGenres] = useState<string | undefined>("28")
  const [isReset, setIsReset] = useState<boolean>(false)

  const navigate = useNavigate()

  const formRef = useRef<HTMLFormElement | null>(null)

  function onFilterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate("/movies/popular/", {
      state: { year, vote, adult, genres, isReset },
    })
  }

  function resetForm() {
    setYear(2020)
    setVote(1)
    setAdult("false")
    setGenres("28")
    setIsReset(true)

    formRef.current?.submit()
  }

  return (
    <form
      className={filterStyles.filterForm}
      onSubmit={onFilterSubmit}
      ref={formRef}
      onReset={resetForm}
    >
      <div>
        <label htmlFor="year">GODINA: </label>
        <label>{year}</label>
        <input
          type="range"
          min={1940}
          max={2022}
          value={Number(year)}
          name="year"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setYear(parseInt(e.target.value))
          }}
        />
      </div>

      <div>
        <label htmlFor="vote">OCJENA: </label> <label>{vote}</label>
        <input
          type="range"
          min={1}
          max={10}
          value={Number(vote)}
          name="vote"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVote(parseInt(e.target.value))
          }
        />
      </div>

      <div>
        <label htmlFor="adult">ODRASLI: </label>
        <select
          name="adult"
          id="adult"
          value={adult}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setAdult(e.target.value)
          }
        >
          <option value="false">Ne</option>
          <option value="true">Da</option>
        </select>
      </div>

      <div>
        <label htmlFor="genres">ODABERI KATEGORIJU: </label>
        <select
          name="genres"
          id="genres"
          value={genres}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setGenres(e.target.value)
          }
        >
          <option value="28">Akcijski</option>
          <option value="35">Komedija</option>
          <option value="99">Dokumentarci</option>
          <option value="27">Horor</option>
          <option value="53">Triler</option>
        </select>
      </div>

      <button type="reset">Resetiraj</button>
      <button type="submit">FILTER</button>
    </form>
  )
}

export default FilterMovies
