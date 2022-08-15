import { Route, Routes } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Discovery from "./pages/Discovery"
import MovieDetails from "./pages/MovieDetails"
import Watchlist from "./pages/Watchlist"
import Popular from "./pages/Popular"
import Search from "./pages/Search"
import Error from "./pages/Error"

import { StorageProvider } from "./context/StorageContext"

function App() {
  return (
    <StorageProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies">
            <Route index element={<Discovery />} />
            <Route path=":id" element={<MovieDetails />} />
            <Route path="objasnjenje" element={<Watchlist />} />
            <Route path="popular" element={<Popular />} />
            <Route path="pretraga" element={<Search />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </StorageProvider>
  )
}

export default App
