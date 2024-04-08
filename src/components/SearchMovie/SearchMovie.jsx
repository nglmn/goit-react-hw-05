import css from "./SearchMovie.module.css";

const SearchMovie = ({ setSearchParams }) => {
    const handleSearchMovie = (e) => {
        e.preventDefault();
        const userInput = e.target.elements.userSearch.value.trim();
        if (userInput) {
            setSearchParams({
                query: userInput
            });
        }
    }
    return (
        <div className={css.formContainer}>
            <form onSubmit={handleSearchMovie} className={css.form}>
                {/* <label htmlFor="search" className={css.label} >Search movie by name</label> */}
                <input type="text" name="userSearch" className={css.input} placeholder="Search movie by name" />
                <button type="submit" className={css.submitBtn}>Search</button>
            </form>
        </div>
    )
}

export default SearchMovie