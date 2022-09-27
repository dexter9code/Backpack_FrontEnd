import React, { useEffect } from "react";
import "./overview.css";

import {
  calenderImg,
  groupImg,
  ratingImg,
  timeImg,
  locationImg,
} from "../assets/icons/iconsDefault";
import backpackLogo from "../assets/icons/backpack-logo-trans.png";
import userimg from "../assets/img/default.jpg";
import InformationCard from "./../common/informationCard";
import TourGuideCard from "./../common/tourGuideCard/TourGuide";
import ReviewCard from "./../common/reviewCard/ReviewCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { sendReq } from "./../../helper/send-http";
import { getTour, checkLoading } from "../../features/tourSlice";
import Loading from "../loading/Loading";
import Map, { Marker } from "react-map-gl";

const Overview = function (props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const loading = useSelector((state) => state.Tour.isLoading);

  useEffect(() => {
    dispatch(checkLoading(true));
    const runTouts = async () => {
      const tour = await sendReq(
        `http://localhost:8080/backpack/api/r1/tours/${id}`,
        "GET"
      );
      dispatch(getTour(tour.data));
      dispatch(checkLoading(false));
    };
    runTouts();
  }, [dispatch, id]);

  const singleTour = useSelector((state) => state.Tour.tour);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <section className="section-header">
            <div className="header__hero">
              <div className="header__hero-overlay">&nbsp;</div>
              <img
                className="header__hero-img"
                src={singleTour[0]?.tour.tourImage}
                alt="Tour 5"
              />
            </div>
            <div className="heading-box">
              <h1 className="heading-primary">
                <span>{singleTour[0]?.tour.title}</span>
              </h1>
              <div className="heading-box__group">
                <div className="heading-box__detail">
                  <img
                    className="heading-box__icon"
                    src={calenderImg}
                    alt="calander-svg"
                  />
                  <span className="heading-box__text">
                    {singleTour[0]?.tour.duration} days
                  </span>
                </div>
                <div className="heading-box__detail">
                  <img
                    className="heading-box__icon"
                    src={locationImg}
                    alt="location png"
                  />
                  <span className="heading-box__text">
                    {singleTour[0]?.tour.location.description}
                  </span>
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
                  <h2 className="heading-secondary ma-bt-lg">
                    Your tour guides
                  </h2>
                  {singleTour[0]?.tour.guides.map((guide) => (
                    <TourGuideCard
                      key={guide._id}
                      role={guide.role}
                      name={guide.name}
                      img={guide.photo.includes("http") ? guide.photo : userimg}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="description-box">
              <h2 className="heading-secondary ma-bt-lg">
                About {singleTour[0]?.tour.title.split(" ").at(-1)}
              </h2>
              <p className="description__text">
                {singleTour[0]?.tour.description}
              </p>
            </div>
          </section>
          <section className="section-pictures">
            {singleTour[0]?.tour.images.map((image, i) => (
              <div className="picture-box" id={i + 1}>
                <img
                  className={`picture-box__img picture-box__img--${i + 1}`}
                  src={image}
                  alt="The Park Camper Tour 1"
                />
              </div>
            ))}
          </section>
          <section className="section-map">
            {/* <div id="map" /> */}
            <Map
              mapboxAccessToken="pk.eyJ1Ijoibm90bWF0dXJlIiwiYSI6ImNsOGs4eGd5cDB2ZmIzdnIweDM3cjN6YnQifQ.z3pfnXT8jya8lKz9kICFdw"
              initialViewState={{
                longitude: singleTour[0]?.tour.location.coordinates[0],
                latitude: singleTour[0]?.tour.location.coordinates[1],
                zoom: 8.5,
              }}
              id="map"
              mapStyle={"mapbox://styles/mapbox/navigation-day-v1"}
            >
              <Marker
                longitude={singleTour[0]?.tour.location.coordinates[0]}
                latitude={singleTour[0]?.tour.location.coordinates[1]}
              >
                <img src={locationImg} alt="location-logo" />
              </Marker>
            </Map>
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
              <img
                src={singleTour[0]?.tour.images[0]}
                alt=""
                className="cta__img cta__img--1"
              />
              <img
                src={singleTour[0]?.tour.images[1]}
                alt=""
                className="cta__img cta__img--2"
              />
              <div className="cta__content">
                <h2 className="heading-secondary">What are you waiting for?</h2>
                <p className="cta__text">
                  {singleTour[0]?.tour.duration} days. 1 adventure. Infinite
                  memories. Make it yours today!
                </p>
                <button className="btn btn--green span-all-rows">
                  Book tour now!
                </button>
              </div>
            </div>
          </section>{" "}
        </>
      )}
    </>
  );
};

export default Overview;
