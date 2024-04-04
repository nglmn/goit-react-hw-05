import { Routes, Route } from "react-router-dom"

import Navigation from "../Navigation/Navigation"
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import PageNotFound from "../../pages/PageNotFound";
import MovieDetailsPage from "../../pages/MovieDetailsPage";

import css from "./App.module.css";

const App = () => {
    return (
        <>
            <Navigation />
            <div className={css.container}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default App