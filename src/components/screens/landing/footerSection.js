import styles from "./footerSection.module.css";
import iconBackpack from "../../assets/icons/organeIcon.png";

const FooterSection = function (props) {
  return (
    <div className={styles.root__footerContainer}>
      <div className={styles.footer__container}>
        <section className={styles.section__cta}>
          <div className={styles.cta}>
            <div className={`${styles.cta__img} ${styles.cta__img__logo}`}>
              <img src={iconBackpack} alt="backpack logo" className="" />
            </div>
            <div className={styles.cta__content}>
              <h2 className={styles.heading__secondary}>
                Subscribe to Lastest offers
              </h2>
              {/* <p className={styles.cta__text}>
                10 days. 1 adventure. Infinite memories. Make it yours today!
              </p> */}

              <input
                type={"email"}
                placeholder="@example.com"
                className={styles.email__input}
              />

              <button
                className={`${styles.btn} ${styles.btn__green} ${styles.span_all_rows}`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FooterSection;
