import "./greenButton.css";

const GreenButton = ({ title, class1, class2 }) => {
  return <button className={`btn ${class1} ${class2}`}>{title}</button>;
};

export default GreenButton;
