import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {

    return (
      <div className={styles.profile}>
  <div className={styles.info}>
    <img
      src={image}
      alt="User avatar"
    />
    <p className={styles.name}>{name}</p>
    <p> {tag} </p>
    <p> {location} </p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span className={styles.span}>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span className={styles.span}>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span className={styles.span}>{likes}</span>
    </li>
  </ul>
</div>


    )

}