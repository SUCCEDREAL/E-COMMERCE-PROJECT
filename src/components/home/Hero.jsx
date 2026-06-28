import "../home/styles/Hero.css";
import heroNew from "../../assets/heroNew.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p>New Collection</p>
        <h1>
          Elevate Your
          <br />
          Everyday Style
        </h1>
        <p className="hero-description">
          Discover timeless pieces that blend
          <br />
          comfort, quality, and style
        </p>

        <div className="hero-button">
          <div className="shopBtn">
            <a href="">
              <button>Shop Now</button>
            </a>
          </div>

          <div className="collection-btn">
            <a href="">
              <button>View Collection</button>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroNew} alt="" />
      </div>
    </div>
  );
};

export default Hero;
