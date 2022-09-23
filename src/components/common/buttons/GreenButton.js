import "./greenButton.css";

const GreenButton = ({ title, classes }) => {
  return <button className={`btn ${classes}`}>{title}</button>;
};

export default GreenButton;
