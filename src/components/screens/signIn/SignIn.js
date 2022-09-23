import { useRef } from "react";
import styles from "./signIn.module.css";
import GreenButton from "./../../common/buttons/GreenButton";
import InputField from "./../../common/inputField/InputField";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../features/notificationSlice";

const SignIn = function (props) {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
    dispatch(
      showNotification({
        status: `success`,
        title: `ok`,
        message: `All values are ok`,
      })
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.login_form}>
        <h2 className={`${styles.heading_secondary} ${styles.ma_bt_lg}`}>
          Log into your account
        </h2>
        <form className={styles.form} onSubmit={onSubmitHandler}>
          <InputField
            id={`email`}
            lableTitle={`Email address`}
            inputType={`email`}
            required={true}
            inputPlaceholder={`@example.com`}
            inputRef={emailRef}
          />
          <InputField
            id={`password`}
            lableTitle={`password`}
            inputType={`password`}
            required={true}
            inputPlaceholder={`*******`}
            extraStyles={`ma-bt-md`}
            inputRef={passwordRef}
          />
          <div className={styles.form__group}>
            <GreenButton
              title={`Login`}
              classes={`btn--green`}
              type={`submit`}
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
