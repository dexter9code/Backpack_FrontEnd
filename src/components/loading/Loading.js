import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.main}>
      <div className={styles.lds__hourglass}></div>
    </div>
  );
};

export default Loading;
