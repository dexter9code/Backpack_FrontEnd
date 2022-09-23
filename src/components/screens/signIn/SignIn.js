import styles from "./signIn.module.css";
import GreenButton from "./../../common/buttons/GreenButton";
import InputField from "./../../common/inputField/InputField";

const SignIn = function (props) {
  return (
    <main className={styles.main}>
      <div className={styles.login_form}>
        <h2 className={`${styles.heading_secondary} ${styles.ma_bt_lg}`}>
          Log into your account
        </h2>
        <form className={styles.form}>
          <InputField
            id={`email`}
            lableTitle={`Email address`}
            inputType={`email`}
            required={true}
            inputPlaceholder={`@example.com`}
          />
          <InputField
            id={`password`}
            lableTitle={`password`}
            inputType={`password`}
            required={true}
            inputPlaceholder={`*******`}
            extraStyles={`ma-bt-md`}
          />
          <div className={styles.form__group}>
            <GreenButton title={`Login`} classes={`btn--green`} />
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
