import "./tourGuide.css";

const TourGuideCard = function ({ img, role, name }) {
  return (
    <div className="overview-box__detail">
      <img src={img} alt={role} className="overview-box__img" />
      <span className="overview-box__label">{role}</span>
      <span className="overview-box__text">{name}</span>
    </div>
  );
};

export default TourGuideCard;
