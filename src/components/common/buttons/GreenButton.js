import "./greenButton.css";

const GreenButton = ({ title, classes, type }) => {
  return (
    <button type={type} className={`btn ${classes}`}>
      {title}
    </button>
  );
};

export default GreenButton;
