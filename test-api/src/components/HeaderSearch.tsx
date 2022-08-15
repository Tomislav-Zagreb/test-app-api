import { useState } from "react"
import headerStyles from "../css/headerStyles.module.css"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function HeaderSearch() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  function onSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (search !== "")
      // If user types space (" "), it is OK, he/she will be forwarded via the link below
      // and on the new page will be possible to define new value
      navigate("/movies/pretraga/", { state: { search } })

    setSearch("")
  }

  return (
    <div className={headerStyles.headerSearch}>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSearchSubmit(e)}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pretražite filmove..."
        />
        <FaSearch className={headerStyles.headerSearchIcon} />
      </form>
    </div>
  )
}

export default HeaderSearch
