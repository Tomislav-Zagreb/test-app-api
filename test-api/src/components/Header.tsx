import HeaderNavigation from "./HeaderNavigation"
import HeaderSearch from "./HeaderSearch"
import HeaderFavourites from "./HeaderFavourites"

import headerStyles from "../css/headerStyles.module.css"

function Header() {
  return (
    <div className={headerStyles.header}>
      <HeaderNavigation />
      <HeaderSearch />
      <HeaderFavourites />
    </div>
  )
}

export default Header
