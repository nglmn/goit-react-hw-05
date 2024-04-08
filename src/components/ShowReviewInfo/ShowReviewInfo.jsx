import css from "./ShowReviewsInfo.module.css";

const ShowReviewInfo = ({ author, content }) => {
    return (
        <li className={css.review}>
            <h3 className={css.author}>{`@${author}`}</h3>
            <p className={css.content}>{`" ${content} "`}</p>
        </li>
    )
}

export default ShowReviewInfo