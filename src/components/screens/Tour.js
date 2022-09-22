import React from "react";
import { useSelector } from "react-redux";
import "./Tour.css";

const Tour = function (props) {
  const tours = useSelector((state) => state.Tour.tours);

  return (
    <>
      <main className="main">
        <div className="card-container">
          {tours[0]?.data.tours.map((item) => (
            <div className="card" key={item._id}>
              <div className="card__header">
                <div className="card__picture">
                  <div className="card__picture-overlay">&nbsp;</div>
                  <img
                    src={item.tourImage}
                    alt={`Tour ${item._id}`}
                    className="card__picture-img"
                  />
                </div>

                <h3 className="heading-tertirary">
                  <span>{item.title}</span>
                </h3>
              </div>

              <div className="card__details">
                <h4 className="card__sub-heading">{item.duration}-day tour</h4>
                <p className="card__text">{item.summary}</p>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="../assets/svg/icons.svg#icon-map-pin"></use>
                  </svg>
                  <span>Banff, India</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="../assets/svg/icons#icon-calendar"></use>
                  </svg>
                  <span>April 2021</span>
                </div>
                <div className="card__data">
                  <svg className="card__icon">
                    <use xlinkHref="../assets/svg/icons#icon-user"></use>
                  </svg>
                </div>
              </div>

              <div className="card__footer">
                <p>
                  <span className="card__footer-value">₹{item.price} </span>
                  <span className="card__footer-text">per person</span>
                </p>
                <p className="card__ratings">
                  <span className="card__footer-value">
                    {item.ratingAverage}
                  </span>
                  <span className="card__footer-text"> rating (21)</span>
                </p>
                <button href="#" className="btn btn--green btn--small">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Tour;
