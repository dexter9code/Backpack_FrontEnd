import { useNavigate } from "react-router-dom";
import HeaderSection from "./HeaderSection";
import styles from "./home.module.css";
import HomeMain from "./HomeMain";

const Home = function (props) {
  const navigation = useNavigate();

  return (
    <div className={styles.root__container}>
      <div className={styles.image__container}>
        <div className={styles.additional}>
          <HeaderSection />
        </div>
      </div>
      <HomeMain />
    </div>
  );
};

export default Home;
