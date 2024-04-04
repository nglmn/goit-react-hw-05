import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = () => {

    const isActivePage = ({ isActive }) => {
        return isActive ? css.active : css.navLink;
    }
    return (
        <header className={css.headerContainer}>
            <div className="container">
                <nav className={css.navigation}>
                    <NavLink to="/" className={isActivePage}>Home</NavLink>
                    <NavLink to="/movies" className={isActivePage}>Movies</NavLink>
                </nav>
            </div>
        </header >
    )
}

export default Navigation