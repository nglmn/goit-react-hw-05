import css from "./ShowActorInfo.module.css";
import notFoundImg from "../../images/localhost-file-not-found.jpeg"
const ShowActorInfo = ({ original_name, character, profile_path }) => {
    const fullImgActor = "https://image.tmdb.org/t/p/w500/" + profile_path;

    return (
        <li className={css.actorCard}>
            {profile_path === null
                ? <img src={notFoundImg} alt="not_found" className={css.actorPhoto} />
                : <img src={fullImgActor} alt={original_name} className={css.actorPhoto} />}
            <h3 className={css.actorName}>{original_name}</h3>
            <h5 className={css.actorCharacter}>{character}</h5>
        </li>
    )
}

export default ShowActorInfo