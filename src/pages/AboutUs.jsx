import { Oval } from "react-loader-spinner";
import Topbar from "../components/layouts/Topbar";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import ceo from "../assets/ceo.png";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

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
      <div
        className="about-us-container"
        style={{
          margin: "180px 50px",
          marginTop: "200px",
          fontFamily: "lucida sans, sans-serif",
          display: "flex",
          gap: "50px",
        }}
      >
        <div
          className="aboutUsImage"
          style={{
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            style={{
              width: "470px",
              height: "650px",
              objectFit: "cover",
              marginTop: "100px",
            }}
            src={ceo}
            alt="CEO"
          />
          <div
            style={{
              lineHeight: "50px",
            }}
            className="founderName"
          >
            <h3 style={{ fontSize: "30px" }}>EZEKIEL SUCCEDREAL AJOSE</h3>
            <p
              style={{
                marginTop: "-20px",
                color: "red",
                fontWeight: "bold",
                fontSize: "22px",
              }}
            >
              <i>Founder and CEO</i>
            </p>
          </div>
        </div>

        {/* About Us Text */}
        <div className="aboutUsText">
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            About Us
          </h2>

          <p
            style={{
              lineHeight: "1.3",
              fontSize: "23px",
              textAlign: "justify",
            }}
          >
            Welcome to{" "}
            <span style={{ fontWeight: "bold" }}>SUCCEDREAL COLLECTION</span>,
            where style meets purpose. Founded in 2024 in Lagos, State, we are
            dedicated in providing modern, trend-conscious individuals with
            high-quality, accessible fashion that empowers them to express their
            unique personalities.
            <br />
            <br />
            Our journey began with a simple belief: what you wear should make
            you feel confident, comfortable, and unstoppable. Whether you are
            searching for everyday essentials, statement pieces for a special
            occasion, or the latest seasonal trends, we carefully curate and
            design every item in our collection with you in mind.
            <br />
            <br />
            At <span style={{ fontWeight: "bold" }}>SUCCEDREAL COLLECTION</span>
            , we focus on sustainable materials / affordable luxury / streetwear
            / minimalist aesthetics].
            <br />
            <br />
            We partner with expert artisans and ethical manufacturers to ensure
            that every garment not only looks incredible but is also crafted to
            last. More than just a clothing brand, we are a community of fashion
            enthusiasts who believe in celebrating individuality.
            <br />
            <br />
            Thank you for choosing to be a part of our story.
            <br />
            <br />
            We can't wait to see you shop from us.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
