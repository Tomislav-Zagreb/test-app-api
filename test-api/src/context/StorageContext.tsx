import { createContext, useContext } from "react"

type ChildrenType = {
  children: React.ReactNode
}

type StorageContextType = {
  toggleStorage: (id: number) => boolean
}

const StorageContext = createContext({} as StorageContextType)

export function useStorageContext() {
  return useContext(StorageContext)
}

export function StorageProvider({ children }: ChildrenType) {
  let storedArray =
    JSON.parse(localStorage.getItem("id")!) != null
      ? JSON.parse(localStorage.getItem("id")!)
      : []

  function toggleStorage(id: number): boolean {
    let isStored = storedArray.includes(Number(id))

    if (isStored) {
      let indexOfRemoved = storedArray.indexOf(Number(id))
      if (indexOfRemoved > -1) storedArray.splice(indexOfRemoved, 1)

      localStorage.setItem("id", JSON.stringify(storedArray))
      return false
    } else {
      storedArray.push(Number(id))

      localStorage.setItem("id", JSON.stringify(storedArray))
      return true
    }
  }

  return (
    <StorageContext.Provider value={{ toggleStorage }}>
      {children}
    </StorageContext.Provider>
  )
}

export default StorageContext
