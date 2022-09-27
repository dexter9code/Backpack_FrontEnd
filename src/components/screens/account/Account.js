import React, { useRef } from "react";
import {
  billImg,
  settingImg,
  bookmarkImg,
  star,
  toursImg,
  userImg,
} from "../../assets/icons/iconsDefault";

import AccountSettingCard from "../../common/accountSideCard/AccountSetting";
import "./account.css";
import InputField from "./../../common/inputField/InputField";
import GreenButton from "./../../common/buttons/GreenButton";
import { DecodeJWT } from "./../../../helper/decodeCookie";
import defaultImg from "../../assets/img/default.jpg";
import infoHandler from "../../../helper/infoHandler";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../features/notificationSlice";

const Account = function (props) {
  const dispatch = useDispatch();
  const usernameRef = useRef();
  const userImageRef = useRef();

  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  const confirmNewPasswordRef = useRef();

  const user = DecodeJWT(props.user);
  const userEmail = sessionStorage.getItem("email");
  const userPhoto = sessionStorage?.getItem("image")?.includes("http")
    ? sessionStorage.getItem("image")
    : defaultImg;

  const userRole = sessionStorage.getItem("role");

  const onInfoChangeHandler = async (e) => {
    e.preventDefault();
    const photo = userImageRef.current.files[0];
    const name = usernameRef.current.value;
    await infoHandler(name, photo, props.user);
  };

  const onPasswordChangeHandler = async (e) => {
    e.preventDefault();
    const password = currentPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;
    const confirmNewPassword = confirmNewPasswordRef.current.value;

    if (!password || !newPassword || !confirmNewPassword) {
      dispatch(
        showNotification({
          status: `error`,
          title: `Invalid`,
          message: `Please check input values`,
        })
      );
      return;
    }

    if (newPassword !== confirmNewPassword) {
      dispatch(
        showNotification({
          status: `error`,
          title: `Invalid`,
          message: `Password mismatch`,
        })
      );
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:8080/backpack/api/r1/user/updatePassword`,
        {
          method: `PATCH`,
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${props.user}`,
          },
          body: JSON.stringify({
            currentPassword: password,
            password: newPassword,
            confirmPassword: confirmNewPassword,
          }),
        }
      );
      const result = await res.json();
      dispatch(
        showNotification({
          status: `success`,
          title: `Changed`,
          message: `Password changed`,
        })
      );
      currentPasswordRef.current.value = "";
      newPasswordRef.current.value = "";
      confirmNewPasswordRef.current.value = "";
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="main">
      <div className="user-view">
        <nav className="user-view__menu">
          <ul className="side-nav">
            <AccountSettingCard
              title={`settings`}
              active={true}
              img={settingImg}
            />
            <AccountSettingCard
              title={`my bookings`}
              active={false}
              img={bookmarkImg}
            />
            <AccountSettingCard
              title={`my reviews`}
              active={false}
              img={star}
            />
            <AccountSettingCard
              title={`billing`}
              active={false}
              img={billImg}
            />
          </ul>
          {userRole === "admin" && (
            <div className="admin-nav">
              <h5 className="admin-nav__heading">Admin</h5>
              <ul className="side-nav">
                <AccountSettingCard
                  title={`manage tours`}
                  active={false}
                  img={toursImg}
                />
                <AccountSettingCard
                  title={`manage users`}
                  active={false}
                  img={userImg}
                />
                <AccountSettingCard
                  title={`manage reviews`}
                  active={false}
                  img={star}
                />
              </ul>
            </div>
          )}
        </nav>
        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">
              Your account settings
            </h2>
            <form
              className="form form-user-data"
              onSubmit={onInfoChangeHandler}
            >
              <InputField
                lableTitle={`Name`}
                id="name"
                inputType={`text`}
                inputDefault={user.name}
                required={true}
                inputRef={usernameRef}
              />
              <InputField
                lableTitle={`Email`}
                id="email"
                inputType={`email`}
                inputDefault={userEmail}
                required={true}
                disabledType={true}
                extraStyles={`ma-bt-md`}
              />
              <div className="form__group form__photo-upload">
                <img
                  className="form__user-photo"
                  src={userPhoto}
                  alt="User-img"
                />
                <input
                  className="form__upload"
                  type={"file"}
                  accept="image/*"
                  id="photo"
                  ref={userImageRef}
                />
                <label className="btn-text" htmlFor="photo">
                  Choose new photo
                </label>
              </div>
              <div className="form__group right">
                <GreenButton
                  type={`submit`}
                  title={`save settings`}
                  classes={`btn--small btn--green`}
                />
              </div>
            </form>
          </div>
          <div className="line">&nbsp;</div>
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Password change</h2>
            <form
              className="form form-user-settings"
              onSubmit={onPasswordChangeHandler}
            >
              <InputField
                lableTitle={`current password`}
                id="password-current"
                inputType={`password`}
                inputPlaceholder={`*******`}
                required={true}
                inputRef={currentPasswordRef}
              />
              <InputField
                lableTitle={`new password`}
                id="new-password"
                inputType={`password`}
                inputPlaceholder={`*******`}
                required={true}
                inputRef={newPasswordRef}
              />
              <InputField
                lableTitle={`confirm password`}
                id="confirm-password"
                inputType={`password`}
                inputPlaceholder={`*******`}
                required={true}
                inputRef={confirmNewPasswordRef}
              />
              <div className="form__group right">
                <GreenButton
                  type={`submit`}
                  title={`save password`}
                  classes={`btn--small btn--green`}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
