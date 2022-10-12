import HeaderSection from "./HeaderSection";
import styles from "./home.module.css";
import HomeMain from "./HomeMain";
import SwiperSection from "./SwiperSection";
import FooterSection from "./footerSection";

const Home = function (props) {
  return (
    <div className={styles.root__container}>
      <div className={styles.image__container}>
        <div className={styles.additional}>
          <HeaderSection />
        </div>
      </div>
      <HomeMain />
      <div className={styles.swiper__container}>
        <SwiperSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Home;
