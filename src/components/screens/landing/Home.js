import { useNavigate } from "react-router-dom";

const Home = function (props) {
  const navigation = useNavigate();

  const onClickHandler = (e) => {
    navigation("/tours", { replace: true });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Home For Backback will be implemented after building app!!</h1>
      <span>Go to other page instead</span>
      <br />
      <button onClick={onClickHandler}>To The working page</button>
    </div>
  );
};

export default Home;
