import "./reviewCard.css";

const ReviewCard = ({ userImg, userName, type, review }) => {
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img src={userImg} alt={userName} className="reviews__avatar-img" />
        <h6 className="reviews__user">{userName}</h6>
      </div>
      <p className="reviews__text">{review}</p>
    </div>
  );
};

export default ReviewCard;
