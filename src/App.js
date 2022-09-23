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
      {/* <Tour /> */}
      {/* <Overview /> */}
      {/* <Account /> */}
      <SignIn />
      <Footer />
    </>
  );
}

export default App;
