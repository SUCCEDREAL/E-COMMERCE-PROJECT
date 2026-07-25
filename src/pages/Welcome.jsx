import { Oval } from "react-loader-spinner";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../components/welcome/Welcome.css";

const Welcome = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="welcomeNote">
      <div className="welcomeText">
        <h1>
          WELCOME, {loggedInUser?.fullName}
          <br />
          to <br />
          <span style={{ color: "", fontSize: "40px" }}>
            SUCCEDREAL COLLECTION
          </span>
        </h1>
        <p>Click OK Button to explore more</p>
      </div>

      <div className="welcomebtn">
        <button onClick={handleClick} className="click-btn">
          CLICK OK
        </button>
      </div>
    </div>
  );
};

export default Welcome;
