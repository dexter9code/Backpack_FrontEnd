import React, { useEffect } from "react";
import "./overview.css";

import {
  calenderImg,
  groupImg,
  ratingImg,
  timeImg,
  locationImg,
} from "../assets/icons/iconsDefault";
import testImage from "../assets/img/tour-1-1.jpg";
import backpackLogo from "../assets/icons/backpack-logo-trans.png";
import userimg from "../assets/img/default.jpg";
import InformationCard from "./../common/informationCard";
import TourGuideCard from "./../common/tourGuideCard/TourGuide";
import ReviewCard from "./../common/reviewCard/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendReq } from "./../../helper/send-http";
import { getTour } from "../../features/tourSlice";

const Overview = function (props) {
  const dispatch = useDispatch();
  const singleTour = useSelector((state) => state.Tour.tour);
  const { id } = useParams();

  const gettingTour = async () => {
    const tour = await sendReq(
      `http://localhost:8080/backpack/api/r1/tours/${id}`,
      "GET"
    );
    dispatch(getTour(tour.data));
  };

  useEffect(() => {
    gettingTour();
  }, []);

  const { title, duration, location, tourImage, images, guides } =
    singleTour[0].tour;

  const singleTitle = title.split(" ").at(-1);

  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay">&nbsp;</div>
          <img className="header__hero-img" src={tourImage} alt="Tour 5" />
        </div>
        <div className="heading-box">
          <h1 className="heading-primary">
            <span>{title}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <img
                className="heading-box__icon"
                src={calenderImg}
                alt="calander-svg"
              />
              <span className="heading-box__text">{duration} days</span>
            </div>
            <div className="heading-box__detail">
              <img
                className="heading-box__icon"
                src={locationImg}
                alt="location png"
              />
              <span className="heading-box__text">{location?.description}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <InformationCard
                title={`Next Date`}
                subTitle={`August 2022`}
                icon={timeImg}
              />
              <InformationCard
                title={`Difficulity`}
                subTitle={`Medium`}
                icon={calenderImg}
              />
              <InformationCard
                title={`Participants`}
                subTitle={`10 People`}
                icon={groupImg}
              />
              <InformationCard
                title={`rating`}
                subTitle={`4.9/5`}
                icon={ratingImg}
              />
            </div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              {guides.map((guide) => (
                <TourGuideCard
                  role={guide.role}
                  name={guide.name}
                  img={userimg}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">About {singleTitle}</h2>
          <p className="description__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p className="description__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum!
          </p>
        </div>
      </section>
      <section className="section-pictures">
        {images.map((image, i) => (
          <div className="picture-box">
            <img
              className={`picture-box__img picture-box__img--${i + 1}`}
              src={image}
              alt="The Park Camper Tour 1"
            />
          </div>
        ))}
      </section>
      <section className="section-map">
        <div id="map" />
      </section>
      <section className="section-reviews">
        <div className="reviews">
          <ReviewCard
            userImg={userimg}
            userName={`Tim took`}
            review={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.`}
          />
          <ReviewCard
            userImg={userimg}
            userName={`Tim took`}
            review={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.`}
          />
          <ReviewCard
            userImg={userimg}
            userName={`Tim took`}
            review={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.`}
          />
          <ReviewCard
            userImg={userimg}
            userName={`Tim took`}
            review={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.`}
          />
          <ReviewCard
            userImg={userimg}
            userName={`Tim took`}
            review={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              dignissimos sint quo commodi corrupti accusantium veniam saepe
              numquam.`}
          />
        </div>
      </section>
      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src={backpackLogo} alt="backpack logo" className="" />
          </div>
          <img src={images[0]} alt="" className="cta__img cta__img--1" />
          <img src={images[1]} alt="" className="cta__img cta__img--2" />
          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {duration} days. 1 adventure. Infinite memories. Make it yours
              today!
            </p>
            <button className="btn btn--green span-all-rows">
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Overview;
