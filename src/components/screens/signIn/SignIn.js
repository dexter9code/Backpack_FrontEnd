import { useRef } from "react";
import styles from "./signIn.module.css";
import GreenButton from "./../../common/buttons/GreenButton";
import InputField from "./../../common/inputField/InputField";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../features/notificationSlice";
import { sendReq } from "../../../helper/send-http";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const SignIn = function (props) {
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(["jwt"]);
  const naviagate = useNavigate();

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password || !email.trim().includes("@")) {
      dispatch(
        showNotification({
          status: `error`,
          title: `Invalid`,
          message: `Please check input values`,
        })
      );
    }

    const reqBody = { email, password };
    try {
      const data = await sendReq(
        `http://localhost:8080/backpack/api/r1/user/login`,
        `POST`,
        reqBody
      );
      setCookie("jwt", data.token, { path: `/` });
      sessionStorage.setItem("image", data.data.photo);
      sessionStorage.setItem("email", data.data.email);
      sessionStorage.setItem("role", data.data.role);

      dispatch(
        showNotification({
          status: `success`,
          title: `ok`,
          message: `Login Successfull`,
        })
      );
      emailRef.current.value = "";
      passwordRef.current.value = "";
      naviagate(-1, { replace: true });
    } catch (error) {
      dispatch(
        showNotification({
          status: `error`,
          title: `Invalid`,
          message: `Invalid Email or Password`,
        })
      );
      return;
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.login_form}>
        <h2 className={`${styles.heading_secondary} ${styles.ma_bt_lg}`}>
          Log into your account
        </h2>
        <span className={`${styles.heading__container} ${styles.ma_ht_lg}`}>
          New user?<Link to={`/auth/signup`}>singup</Link>
        </span>
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
