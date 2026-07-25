import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/UserLogin/Login.css";
import Topbar from "../components/layouts/Topbar";
import Navbar from "../components/layouts/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoggingIn(true);

    setTimeout(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("No account found. Please sign up first.");
        setLoggingIn(false);
        return;
      }

      if (
        formData.email === user.email &&
        formData.password === user.password
      ) {
        // Store login status
        localStorage.setItem("isLoggedIn", "true");

        // Store the logged-in user's details
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        navigate("/welcome");
      }

      setLoggingIn(false);
    }, 1500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          visible={true}
          height={90}
          width={100}
          color="rgb(157, 104, 64)"
          secondaryColor="#d86868"
        />
      </div>
    );

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="login-container">
        <div className="login-text">
          <h2>Welcome Back!</h2>
          <p>Please enter your credentials to log in.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="login-group">
            <label htmlFor="">Email</label> <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-group">
            <label htmlFor="">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="loginBtn">
            <button type="submit" disabled={loggingIn}>
              {loggingIn ? "Logging in..." : "Login"}
            </button>
          </div>

          <div className="forgetText">
            <a href="/forgot-password">Forgot Password? click here</a>
          </div>

          <div className="signup-link">
            <Link to="/signup" className="link">
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
