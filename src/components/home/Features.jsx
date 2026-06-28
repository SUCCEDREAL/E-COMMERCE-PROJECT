import "../home/styles/Features.css";
import { FaTruck, FaUndoAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaTruck />,
      title: "Free Shipping",
      desc: "On orders over $50",
    },
    {
      icon: <FaUndoAlt />,
      title: "Easy Returns",
      desc: "30 days return policy",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      desc: "100% secure checkout",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      desc: "Dedicated support",
    },
  ];

  return (
    <section className="features-container">
      <hr className="line" />

      <div className="features-section">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <hr className="line2" />
    </section>
  );
}

export default Features;
