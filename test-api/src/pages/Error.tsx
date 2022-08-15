import { useEffect } from "react"
import { Link } from "react-router-dom"

function Error() {
  document.title = "Ništa nije pronađeno — JustWatch"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <img
        src={require("../files/jason.webp")}
        alt="Jason Statham s pištoljem kao cover za stranicu 404"
        draggable="false"
        style={{ width: "100%" }}
      />
      <br />
      <br />
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "var(--black)",
          backgroundColor: "var(--gold)",
          padding: ".5rem 1.25rem",
          fontWeight: "bold",
        }}
      >
        VRATI ME NA POČETAK
      </Link>
    </div>
  )
}

export default Error
