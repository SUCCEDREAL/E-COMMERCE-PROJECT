import { Oval } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Topbar from "../components/layouts/Topbar.jsx";
import Navbar from "../components/layouts/Navbar.jsx";
import Footer from "../components/layouts/Footer.jsx";
import "../components/signup/Styles/SignUp.css";
import { FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Login from "../pages/UserLogin.jsx";

function Signup() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      // Save user details to localStorage
      localStorage.setItem("user", JSON.stringify(formData));

      alert("Account created successfully!");

      setSubmitting(false);

      navigate("/login");
    }, 2000);
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
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Oval
          visible={true}
          height={90}
          width={100}
          color="rgb(157, 104, 64)"
          secondaryColor="#d86868"
          strokeWidth={5}
          margin="300px"
        />
        <h3 style={{ marginTop: "20px", fontWeight: "bold" }}>Loading ...</h3>
      </div>
    );

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="signup-container">
        <div className="form-heading">
          <h1>USER SIGN-UP FORM</h1>
        </div>
        <div className="createText">
          <h3>Create your account </h3>
          {/* <p>Let's get you started with your new account!</p> */}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-icon">
              <FaUser />
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <div className="form-icon">
              <MdMarkEmailUnread id="icons" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <div className="form-icon">
              <RiLockPasswordFill />
            </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <div className="form-icon">
              <RiLockPasswordFill />
            </div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <p className="terms">
            <input
              type="checkbox"
              className="term-check"
              name="terms"
              required
            />{" "}
            By signing up, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
          <div className="createBtn">
            <button className="submit" type="submit" disabled={submitting}>
              {submitting ? (
                <>
                  <Oval
                    visible={true}
                    height={18}
                    width={18}
                    color="#fff"
                    secondaryColor="#ddd"
                    strokeWidth={5}
                  />
                  <span style={{ marginLeft: "8px", textAlign: "center" }}>
                    Submitting...
                  </span>
                </>
              ) : (
                "CREATE ACCOUNT"
              )}
            </button>
          </div>
        </form>

        <div className="login-link">
          <Link to="/login">If already have account, Login</Link>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Signup;
