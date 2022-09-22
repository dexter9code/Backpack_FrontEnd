import "./accountside.css";
const AccountSettingCard = ({ active, img, title }) => {
  return (
    <li className={active ? `side-nav--active` : ``}>
      <a href="#">
        <img src={img} alt="icon-img" />
        {title}
      </a>
    </li>
  );
};

export default AccountSettingCard;
