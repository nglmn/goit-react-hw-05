import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const PageNotFound = lazy(() => import("../../pages/PageNotFound"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));

import Navigation from "../Navigation/Navigation"
import MovieCast from "../MovieCast/MovieCast";
import MovieReviews from "../MovieReview/MovieReviews";

import css from "./App.module.css";

const App = () => {
    return (
        <>
            <Navigation />
            <div className={css.container}>
                <Suspense fallback={<p>loading...</p>}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/movies" element={<MoviesPage />} />
                        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
                        <Route
                            path="/movie/:movieId/credits"
                            element={<MovieDetailsPage> <MovieCast /> </MovieDetailsPage>} />
                        <Route
                            path="/movie/:movieId/reviews"
                            element={<MovieDetailsPage> <MovieReviews /> </MovieDetailsPage>} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </div >
        </>
    )
}

export default App