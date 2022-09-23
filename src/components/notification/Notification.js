import "./notification.css";
import { warningImg, okImg } from "../assets/icons/iconsDefault";
import { useDispatch } from "react-redux";
import { hideNotification } from "../../features/notificationSlice";

const Notification = function ({ status, message }) {
  let extraClasses;

  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(hideNotification());
  }, 2000);

  if (status === `success`) {
    extraClasses = `alert__success`;
  }

  if (status === `error`) {
    extraClasses = `alert__error`;
  }
  console.log(extraClasses);
  const finalClass = `alert ${extraClasses}`;
  console.log(finalClass);

  return (
    <div className={finalClass}>
      <span className="alert__container">
        <img src={status === "success" ? okImg : warningImg} alt={"ok-icon"} />
        <p>{message}</p>
      </span>
    </div>
  );
};

export default Notification;
