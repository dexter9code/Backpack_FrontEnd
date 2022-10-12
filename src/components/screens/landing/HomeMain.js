import styles from "./HomeMain.module.css";
import overviewImage from "../../assets/img/overview.png";
import expoIcon from "../../assets/icons/expo.png";

const HomeMain = function (props) {
  const onClickHandler = (e) => {
    window.location.href = `https://github.com/dexter9code/Done_app_React_Native`;
  };

  return (
    <div className={styles.root__homeContainer}>
      <img src={overviewImage} alt="app-img" className={styles.overImage} />
      <div className={styles.text__container}>
        <h1>
          connect on the go with
          <br /> <span>backpack</span> app mobile app
        </h1>
        <p>
          backpack provide amazing experience for buying your next dream
          vaccation <br />
          and currently serving over 90+ millions happy customers around the
          world
        </p>
        <button className={styles.app__btn} onClick={onClickHandler}>
          <img src={expoIcon} alt="expo-img" className={styles.expo__icon} />
          <h2 className={styles.btn__txt}>download Now</h2>
        </button>
      </div>
    </div>
  );
};

export default HomeMain;
