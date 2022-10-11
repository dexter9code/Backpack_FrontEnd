import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/screens/Footer";
import Navbar from "./components/screens/Navbar";
import Tour from "./components/screens/Tour";
import { getData } from "./components/common/getData";
import Overview from "./components/screens/Overview";
import Account from "./components/screens/account/Account";
import SignIn from "./components/screens/signIn/SignIn";
import Notification from "./components/notification/Notification";
import SignUp from "./components/screens/sigup/sigup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/landing/Home";
import { useCookies } from "react-cookie";

function App() {
  const [cookies] = useCookies(["jwt"]);
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state) => state.Notification.notification
  );
  const cookie = cookies.jwt;
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {notificationState && (
        <Notification
          status={notificationState.status}
          message={notificationState.message}
        />
      )}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/tours/:id" element={<Overview />} />
        <Route
          path="/auth/dashboard"
          element={cookie ? <Account user={cookie} /> : <SignIn />}
        />
        <Route path="/auth/signin" element={!cookie ? <SignIn /> : <Home />} />
        <Route path="/auth/signup" element={!cookie ? <SignUp /> : <Home />} />
      </Routes> */}
      <Home />
      <Footer />
    </>
  );
}

export default App;
