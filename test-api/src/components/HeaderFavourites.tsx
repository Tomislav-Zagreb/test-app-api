import headerStyles from "../css/headerStyles.module.css"
import { BsFillStarFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import React, { useState, useRef, useEffect } from "react"

function HeaderFavourites() {
  const [spread, setSpread] = useState<boolean>(false)
  const favouriteRef = useRef<HTMLDivElement | null>(null)
  const [spreadArray, setSpreadArray] = useState([])

  useEffect(() => {
    setSpreadArray(JSON.parse(localStorage.getItem("id")!))
  }, [spread])

  document.addEventListener("click", (e: any) => {
    const isClicked = favouriteRef.current?.contains(e.target)

    if (!isClicked) {
      setSpread(false)
    }
  })

  function setSpreadingOptions(e: React.MouseEvent<HTMLDivElement>) {
    setSpread(!spread)
  }

  console.log(spreadArray)

  return (
    <>
      <div
        className={headerStyles.headerFavourites}
        onClick={(e) => setSpreadingOptions(e)}
        ref={favouriteRef}
      >
        <BsFillStarFill />
        <p>FAVORITI</p>
      </div>

      {spreadArray.length !== 0 ? (
        <div
          className={
            spread
              ? headerStyles.headerDropdown
              : `${headerStyles.headerDropdown} ${headerStyles.hideDropdown} `
          }
        >
          {spreadArray.map((singleOne) => {
            return (
              <Link
                key={singleOne}
                to={`/movies/${singleOne}/`}
                onClick={() => setSpread(!spread)}
              >
                Favorit ID: {singleOne}
              </Link>
            )
          })}
        </div>
      ) : (
        <div
          style={{ padding: "8rem 1.25rem" }}
          className={
            spread
              ? headerStyles.headerDropdown
              : `${headerStyles.headerDropdown} ${headerStyles.hideDropdown} `
          }
        >
          U ovom trenutku nemate označenih filmova u favoritima. Koristite
          tražilicu ispod da biste pronašli film i klikom na odgovarajući znak
          možete ga spremiti u ovu sekciju.
        </div>
      )}
    </>
  )
}

export default HeaderFavourites
