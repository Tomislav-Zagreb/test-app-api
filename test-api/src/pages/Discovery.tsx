import { useEffect } from "react"
import HorizontalList from "../components/HorizontalList"
import ScrollContainer from "react-indiana-drag-scroll"
import "../css/horizontalList.css"

import { listArray } from "../files/ListArray"

function Discovery() {
  document.title = "Najnoviji filmovi, razni žanrovi — JustWatch"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      {listArray.map((item: any) => (
        <>
          <h1>{item.genreName}</h1>
          <ScrollContainer vertical={false} className="scroll-container">
            <HorizontalList key={item.genreName} pathText={item.genrePath} />
          </ScrollContainer>
        </>
      ))}
    </div>
  )
}

export default Discovery
