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

function App() {
  const dispatch = useDispatch();
  const notificationState = useSelector(
    (state) => state.Notification.notification
  );

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/tours/:id" element={<Overview />} />
        <Route path="/auth/dashboard" element={<Account />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
