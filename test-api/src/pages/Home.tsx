import homeStyles from "../css/homeStyles.module.css"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function Home() {
  document.title = "JustWatch — vodič za streaming"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={homeStyles.home}>
      <h1>Filmovi i serije za vas</h1>
      <p>
        Drago nam je da ste ovdje! Na JustWatchu možete lako doznati gdje
        gledati svoje omiljene filmove i serije u Hrvatskoj. JustWatch je brz i
        učinkovit: odaberite omiljenog pružatelja usluga i doznajte što je novo
        na Netflixu, HBO Nordicsu i drugim streaming platformama. Filtrirajte po
        žanru i godini izdanja kako biste pronašli savršen film za večeras.
        Potražite određeni film ili seriju i doznajte gdje ih možete legalno
        gledati.
      </p>
      <Link to="/movies">OTKRIJ FILMOVE</Link>
    </div>
  )
}

export default Home
