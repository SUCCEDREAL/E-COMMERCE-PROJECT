import Topbar from "../components/layouts/Topbar";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const AboutUs = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <div
        className="about-us-container"
        style={{
          margin: "180px 100px",
          marginTop: "200px",
          fontFamily: "lucida sans, sans-serif",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>About Us</h2>

        <p
          style={{ lineHeight: "1.3", fontSize: "23px", textAlign: "justify" }}
        >
          Welcome to <span style={{ fontWeight: "bold" }}>SUCCEDREAL</span>,
          where style meets purpose. Founded in 2024 in Lagos, State, we are
          dedicated to providing modern, trend-conscious individuals with
          high-quality, accessible fashion that empowers them to express their
          unique personalities.
          <br />
          <br />
          Our journey began with a simple belief: what you wear should make you
          feel confident, comfortable, and unstoppable. Whether you are
          searching for everyday essentials, statement pieces for a special
          occasion, or the latest seasonal trends, we carefully curate and
          design every item in our collection with you in mind.
          <br />
          <br />
          At <span style={{ fontWeight: "bold" }}>SUCCEDREAL COLLECTION</span>,
          we focus on sustainable materials / affordable luxury / streetwear /
          minimalist aesthetics].
          <br />
          <br />
          We partner with expert artisans and ethical manufacturers to ensure
          that every garment not only looks incredible but is also crafted to
          last.More than just a clothing brand, we are a community of fashion
          enthusiasts who believe in celebrating individuality.
          <br />
          <br />
          Thank you for choosing to be a part of our story.
          <br />
          <br />
          We can't wait to see shop from us.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
