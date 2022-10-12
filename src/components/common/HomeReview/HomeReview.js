import styles from "./homeReview.module.css";

const HomeReview = function ({ userName, userImage, comment }) {
  return (
    <div className={styles.root__reviewContainer}>
      <div className={styles.reviews_avatar}>
        <img
          src={userImage}
          alt={`${userName}-img`}
          className={styles.reviews_avatar_img}
        />
        <h6 className={styles.reviews_user}>{userName}</h6>
      </div>
      <p className={styles.reviews_text}>{comment}</p>
    </div>
  );
};

export default HomeReview;
