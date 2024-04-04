import { Link } from "react-router-dom"
const PageNotFound = () => {
    return (
        <>
            <h1>Page not Found</h1>
            <Link to={"/"}>Back to home page</Link>
        </>
    )
}

export default PageNotFound