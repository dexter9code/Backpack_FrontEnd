import React from "react";
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

const Account = function (props) {
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
        </nav>
        <div className="user-view__content">
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">
              Your account settings
            </h2>
            <form className="form form-user-data">
              <InputField
                lableTitle={`Name`}
                id="name"
                inputType={`text`}
                inputDefault={`Rudy`}
                required={true}
              />
              <InputField
                lableTitle={`Email`}
                id="email"
                inputType={`email`}
                inputDefault={`admin@io.com`}
                required={true}
                extraStyles={`ma-bt-md`}
              />
              <div className="form__group form__photo-upload">
                <img
                  className="form__user-photo"
                  src="img/user.jpg"
                  alt="User-img"
                />
                <a className="btn-text" href="">
                  Choose new photo
                </a>
              </div>
              <div className="form__group right">
                <GreenButton
                  title={`save settings`}
                  class1={`btn--small`}
                  class2={`btn--green`}
                />
              </div>
            </form>
          </div>
          <div className="line">&nbsp;</div>
          <div className="user-view__form-container">
            <h2 className="heading-secondary ma-bt-md">Password change</h2>
            <form className="form form-user-settings">
              <InputField
                lableTitle={`current password`}
                id="password-current"
                inputType={`password`}
                inputPlaceholder={`*******`}
                required={true}
              />
              <InputField
                lableTitle={`new password`}
                id="new-password"
                inputType={`password`}
                inputPlaceholder={`*******`}
                required={true}
              />
              <InputField
                lableTitle={`confirm password`}
                id="confirm-password"
                inputType={`password`}
                inputPlaceholder={`*******`}
                required={true}
              />
              <div className="form__group right">
                <GreenButton
                  title={`save password`}
                  class1={`btn--small`}
                  class2={`btn--green`}
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
