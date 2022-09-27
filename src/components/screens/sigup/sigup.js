import styles from "./sigup.module.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../features/notificationSlice";
import { sendReq } from "./../../../helper/send-http";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = function (props) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [_, setCookie] = useCookies(["jwt"]);
  const navigation = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confrimPasswordRef = useRef();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confrimPasswordRef.current.value;

    if (
      !name ||
      !email ||
      !email.includes("@") ||
      !password ||
      !confirmPassword
    ) {
      dispatch(
        showNotification({
          status: `error`,
          title: `Invalid`,
          message: `please fill required field`,
        })
      );
      return;
    }

    if (password !== confirmPassword) {
      dispatch(
        showNotification({
          status: `error`,
          title: `Invalid`,
          message: `password mis-match`,
        })
      );
      return;
    }

    const result = await sendReq(
      `http://localhost:8080/backpack/api/r1/user/singup`,
      "POST",
      {
        name,
        email,
        password,
        confirmPassword,
      }
    );

    const value = `Success`;
    if (result.status === value) {
      dispatch(
        showNotification({
          status: `success`,
          title: `account created`,
          message: `account created `,
        })
      );
    }

    setCookie("jwt", result.token, { path: `/` });
    sessionStorage.setItem("image", result.data.photo);
    sessionStorage.setItem("email", result.data.email);
    sessionStorage.setItem("role", result.data.role);

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confrimPasswordRef.current.value = "";

    setTimeout(() => {
      navigation("/", { replace: true });
    }, 1500);
  };

  return (
    <section className={styles.full__container}>
      <div className={styles.background_cover}></div>
      <main className={styles.container}>
        <div className={styles.session}>
          <div className={styles.left}></div>
          <form onSubmit={onSubmitHandler}>
            <h4>
              Sign up to<span> Backpack</span>
            </h4>
            <p>New Here? sign up and find your destination</p>
            <div className={styles.floating_label}>
              <input
                placeholder="Name"
                type="text"
                name="name"
                id="name"
                minLength={3}
                ref={nameRef}
                autoComplete="off"
              />
              <label htmlFor="name">Name:</label>
              <div className={styles.icon}>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 122.72"
                >
                  <title>persona</title>
                  <path d="M4.28,120.58a2.14,2.14,0,1,1-4.28,0c0-10.66,3.9-16.53,8.93-19.88s10.72-4,15-4.41a27.77,27.77,0,0,0,12.55-4.13A20.15,20.15,0,0,0,44.54,80.7C40.4,77.13,37,74,36.21,66.76A5.67,5.67,0,0,1,33.48,66a8.43,8.43,0,0,1-3.63-5.49,23.43,23.43,0,0,1-.39-8.26,2,2,0,0,1,.14-.54c.89-2.45,2.17-3.43,3.83-3.57L33,47.85c-.65-8.16,1.26-22.31-7.6-25C42.11,2.14,61.43-9.12,75.94,9.3c17.25.91,24.3,28,11.08,39.92l-.06.52a6.24,6.24,0,0,1,1-.15,5.65,5.65,0,0,1,3.11.59,4.48,4.48,0,0,1,2.21,2.69,7.64,7.64,0,0,1-.09,4.41c-.67,2.07-1.45,4.3-2.23,6.33A4.68,4.68,0,0,1,89.5,66l-.18.13a4.6,4.6,0,0,1-3.1.69h-.11c-.23,6.06-2.89,9.31-6.6,12.93,1.64,5.78,4.34,9.33,7.57,11.59,3.42,2.38,7.54,3.4,11.67,4.09s9.73,1.66,14.68,5.13,9.12,9.51,9.45,20a2.14,2.14,0,0,1-4.27.14c-.28-8.84-3.56-13.77-7.62-16.62s-9.31-3.8-12.94-4.41c-4.66-.78-9.34-2-13.42-4.8a22.9,22.9,0,0,1-8.37-11.29l-.1.09A23.09,23.09,0,0,1,68,88a18.49,18.49,0,0,1-6.12,1,18.81,18.81,0,0,1-2.48-.18,21.13,21.13,0,0,1-11.5-4.64,23.69,23.69,0,0,1-9,11.51,32,32,0,0,1-14.47,4.83c-3.83.41-9,1-13.08,3.73s-7,7.4-7,16.31Zm55.6-36c.51.05,1,.07,1.55.07a19.07,19.07,0,0,0,5.11-.7,19.06,19.06,0,0,0,7-4.46l1.4-1.33c4.31-4.1,7.42-7.06,6.82-14.23a2.24,2.24,0,0,1,.35-1.36,2.14,2.14,0,0,1,3-.6,4.21,4.21,0,0,0,.78.41,2,2,0,0,0,.59.13c.31,0,.34.13.39.12h0s0-.15.11-.39l2.16-6.14a3.81,3.81,0,0,0,.14-1.94.42.42,0,0,0-.16-.23,1.59,1.59,0,0,0-.78-.08A5.34,5.34,0,0,0,85.58,55a2.14,2.14,0,0,1-3.4-2.07c1.55-9,.85-14.89-1.06-18.87a15.76,15.76,0,0,0-6.9-7C67.7,32,63.08,32.6,58.48,33.17c-3.75.46-7.49.92-12.42,4.33a11.73,11.73,0,0,0-4.6,5.71,14.59,14.59,0,0,0-.18,8.06,2.21,2.21,0,0,1-.08,1.19,2.15,2.15,0,0,1-2.75,1.28l-1.54-.56c-1.65-.58-2.83-.87-3.25-.07A18.75,18.75,0,0,0,34,59.48a4.55,4.55,0,0,0,1.59,2.84,1.53,1.53,0,0,0,.71.18,4.29,4.29,0,0,0,1.2-.2,2.2,2.2,0,0,1,.64-.12,2.13,2.13,0,0,1,2.18,2.09c.18,7.31,3.45,10.13,7.42,13.55l1.7,1.48a20.25,20.25,0,0,0,10.44,5.3Z" />
                </svg>
              </div>
            </div>
            <div className={styles.floating_label}>
              <input
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                ref={emailRef}
                autoComplete="off"
              />
              <label htmlFor="email">Email:</label>
              <div className={styles.icon}>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 88.86"
                >
                  <title>email</title>
                  <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
                </svg>
              </div>
            </div>
            <div className={styles.floating_label}>
              <input
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                ref={passwordRef}
              />
              <label htmlFor="password">Password:</label>
              <div className={styles.icon}>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 86.5 122.88"
                >
                  <defs></defs>
                  <title>unlocked</title>
                  <path
                    className="cls-1"
                    d="M5.54,53.25H81a5.57,5.57,0,0,1,5.54,5.54v58.55A5.56,5.56,0,0,1,81,122.88H5.54A5.55,5.55,0,0,1,0,117.34V58.79a5.56,5.56,0,0,1,5.54-5.54Z"
                  />
                  <path
                    className="cls-2"
                    d="M38.7,91.82l-6,15.66H53.77L48.23,91.6a10.9,10.9,0,1,0-9.53.22Z"
                  />
                  <path
                    className="cls-2"
                    d="M66.69,34.16a25.17,25.17,0,0,0-6.94-16.49,22.56,22.56,0,0,0-33,0,25.22,25.22,0,0,0-7,17.52V53.25H9.29V35.19A35.76,35.76,0,0,1,19.2,10.42a33,33,0,0,1,48.09,0,35.69,35.69,0,0,1,9.9,23.74Z"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.floating_label}>
              <input
                placeholder="confirmPassword"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                ref={confrimPasswordRef}
              />
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <div className={styles.icon}>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 86.5 122.88"
                >
                  <defs></defs>
                  <title>unlocked</title>
                  <path
                    className="cls-1"
                    d="M5.54,53.25H81a5.57,5.57,0,0,1,5.54,5.54v58.55A5.56,5.56,0,0,1,81,122.88H5.54A5.55,5.55,0,0,1,0,117.34V58.79a5.56,5.56,0,0,1,5.54-5.54Z"
                  />
                  <path
                    className="cls-2"
                    d="M38.7,91.82l-6,15.66H53.77L48.23,91.6a10.9,10.9,0,1,0-9.53.22Z"
                  />
                  <path
                    className="cls-2"
                    d="M66.69,34.16a25.17,25.17,0,0,0-6.94-16.49,22.56,22.56,0,0,0-33,0,25.22,25.22,0,0,0-7,17.52V53.25H9.29V35.19A35.76,35.76,0,0,1,19.2,10.42a33,33,0,0,1,48.09,0,35.69,35.69,0,0,1,9.9,23.74Z"
                  />
                </svg>
              </div>
            </div>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default SignUp;
