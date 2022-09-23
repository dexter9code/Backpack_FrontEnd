import "./notification.css";
import { warningImg, okImg } from "../assets/icons/iconsDefault";

const Notification = function () {
  const imageType = `active`;
  return (
    <div className="alert alert--success">
      <span className="alert__container">
        <img
          src={imageType === "active" ? okImg : warningImg}
          alt={"ok-icon"}
        />
        <p>All good and an long as error</p>
      </span>
    </div>
  );
};

export default Notification;
