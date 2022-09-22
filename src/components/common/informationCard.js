import "./informationCard.css";

const InformationCard = ({ title, subTitle, icon }) => {
  return (
    <div className="overview-box__detail">
      <img className="overview-box__icon" src={icon} alt="svg-icon" />
      <use xlinkHref="../assets/svg/icons.svg#icon-calendar" />
      <span className="overview-box__label">{title}</span>
      <span className="overview-box__text">{subTitle}</span>
    </div>
  );
};

export default InformationCard;
