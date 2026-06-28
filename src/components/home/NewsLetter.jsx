import { useState } from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import "../home/styles/NewsLetter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }
    console.log("Subscribed with:", email);
    setSubscribed(true);
    setEmail("");
    alert("Thank you for subscribing to our Newsletter");
  };

  return (
    <div className="news-section">
      <div className="news-icon">
        <MdOutlineMarkEmailRead />
      </div>

      <div className="news-text">
        <h3>Join Our Newsletter</h3>
        <p>
          subscribe and get 10% of your first order.
          <br />
          Plus, be the first to know about new arrivals and exclusive deals
        </p>
      </div>

      <div className="subscribe-section">
        <input
          className="email-section"
          style={{
            width: "280px",
            paddingLeft: "15px",
            border: "2px solid black",
            borderRadius: "4px",
            height: "40px",
            marginTop: "7px",
            cursor: "pointer",
            marginLeft: "20px",
          }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleSubscribe}
          style={{
            padding: "5px 40px",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "all ease-in-out",
          }}
          className="subscribe-btn"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
