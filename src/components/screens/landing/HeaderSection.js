import styles from "./Header.module.css";
import Lottie from "lottie-react";
import travleAnimaiton from "../../assets/svg/travler_walking.json";

const HeaderSection = function () {
  return (
    <section className={styles.root__section}>
      <div className={styles.text__container}>
        <h1>
          <span>backpack</span> <br />
          we take care <br />
          of your tip
        </h1>
        <p>
          plan and book your perfect trip with backpack
          <br />
          here we take all of your headache so all you have to worry about is
          creating new memories
        </p>

        <button className={styles.home__btn}>Explore</button>
      </div>
      <div className={styles.animation__container}>
        <Lottie animationData={travleAnimaiton} loop={true} autoPlay />
      </div>
    </section>
  );
};

export default HeaderSection;
