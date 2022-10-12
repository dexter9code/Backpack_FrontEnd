import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import styles from "./swipersection.module.css";
import ReviewCard from "../../common/reviewCard/ReviewCard";
import user1 from "../../assets/users/user-1.jpg";
import user2 from "../../assets/users/user-8.jpg";
import user3 from "../../assets/users/user-3.jpg";
import user4 from "../../assets/users/user-7.jpg";
import user5 from "../../assets/users/user-4.jpg";
import user6 from "../../assets/users/user-19.jpg";
import HomeReview from "../../common/HomeReview/HomeReview";

const SwiperSection = function () {
  return (
    <section className={styles.swiper__container}>
      <div className={styles.title__container}>
        <h2>don't belives us listen what people are saying</h2>
      </div>
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.swiper__slide1}>
          <div className={styles.comment__container}>
            <HomeReview
              userImage={user5}
              userName={`Abie`}
              comment={`After a couple of years of not being able to travel we were delighted to be provided with a well planned trip that we could look forward to with confidence thank you bankpack for everything.`}
            />
            <HomeReview
              userImage={user6}
              userName={`Varun`}
              comment={`Most relaxing holiday we have ever had. We definitely didn’t want to leave and would absolutely return to the same resort.`}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide2}>
          <div className={styles.comment__container}>
            <HomeReview
              userImage={user3}
              userName={`Vanesssa`}
              comment={`After a couple of years of not being able to travel we were delighted to be provided with a well planned trip that we could look forward to with confidence thank you bankpack for everything.`}
            />
            <HomeReview
              userImage={user4}
              userName={`Monica`}
              comment={`Most relaxing holiday we have ever had. We definitely didn’t want to leave and would absolutely return to the same resort.`}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiper__slide3}>
          <div className={styles.comment__container}>
            <ReviewCard
              userImg={user1}
              userName="max"
              review={`A wonderful 2 & a half weeks spent with no worries as all the transfers & itinerary were organized for us. Sammer did an excellent job of fulfilling our wishes for a memorable experience that provided us with just the right mix of excursions & leisure time to get the most out of visiting our destination.`}
            />
            <ReviewCard
              userImg={user2}
              userName="Juila"
              review={`Stayed in 6 excellent resorts, which lived up to their descriptions. Holiday lived up to our expectations - wildlife, coast, countryside, culture, history, excellent food, friendly people`}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSection;
