import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/screens/Footer";
import Navbar from "./components/screens/Navbar";
import Tour from "./components/screens/Tour";
import { getData } from "./components/common/getData";
import Overview from "./components/screens/Overview";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {/* <Tour /> */}
      <Overview />
      <Footer />
    </>
  );
}

export default App;
