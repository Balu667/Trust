import { useNavigate } from "react-router";
import Carousel from "../../components/Carousel";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="home-section">
      <div>
        <Carousel />
      </div>
      <div className="about-container bg-white">
        <h1 className="heading">Who we are</h1>
        <h3>
          <q>Alone, we can do so little; together, we can do so much.</q>
        </h3>
        <p>
          NOPA, a charity inspired by Buddhist values, works alongside the most
          excluded people in South Asia, overcoming poverty and discrimination
          with locally-led projects focusing on gender equality, education and
          sustainable livelihoods.
        </p>
        <button onClick={() => navigate("/about")} className="outline-btn">
          Learn More
        </button>
      </div>
      <div className="about-container">
        <h1 className="heading">What we do</h1>
        <p>
          Since its establishment in 2000, NOPA has worked in three core areas –
          education, childre accomadation, and health. Our efforts are centered
          on enabling access to quality education, affordable cancer care
          services and increasing opportunities for women to become financially
          independent.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed magnam
          ratione voluptates, modi sequi ipsa earum tempora asperiores vitae
          dolorem, qui quisquam! Quasi dignissimos ipsam voluptates, beatae
          molestiae doloremque enim?
        </p>
        <div className="cards-section">
          <div className="card">
            <div className="card-img-section">
              <img
                className="card-img"
                src="https://udhavumullangal.org.in/wp-content/uploads/2023/12/education-img.webp"
                alt="card-img"
              />
            </div>
            <div className="text-container">
              <h3>Education</h3>
              <p>
                Quality education can transform a child’s life. Underprivileged
                children and youth are sometimes deprived of this basic right
                for various reasons. We provide financial assistance and
                mentorship support to well-deserving children and youth to
                bridge this education gap.
              </p>
              <button className="outline-btn">Read More</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img-section">
              <img
                className="card-img"
                src="https://udhavumullangal.org.in/wp-content/uploads/2023/12/education-img.webp"
                alt="card-img"
              />
            </div>
            <div className="text-container">
              <h3>Accomadation</h3>
              <p>
                Quality education can transform a child’s life. Underprivileged
                children and youth are sometimes deprived of this basic right
                for various reasons. We provide financial assistance and
                mentorship support to well-deserving children and youth to
                bridge this education gap.
              </p>

              <button className="outline-btn">Read More</button>
            </div>
          </div>
          <div className="card">
            <div className="card-img-section">
              <img
                className="card-img"
                src="https://udhavumullangal.org.in/wp-content/uploads/2023/12/education-img.webp"
                alt="card-img"
              />
            </div>
            <div className="text-container">
              <h3>Career Support</h3>
              <p>
                Quality education can transform a child’s life. Underprivileged
                children and youth are sometimes deprived of this basic right
                for various reasons. We provide financial assistance and
                mentorship support to well-deserving children and youth to
                bridge this education gap.
              </p>
              <button className="outline-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-section">
        <h1 className="heading">Our Impact</h1>
        <div className="impact-card-section">
          <div className="impact-card">
            <div>
              <img
                src="https://udhavumullangal.org.in/wp-content/themes/finance/images/our-impact-icon01.png"
                alt="impact-img"
              />
            </div>
            <div className="impact-text">
              <div className="impact-heading">40,000,000</div>
              <div>Total Donations & Amount Spent</div>
            </div>
          </div>
          <div className="impact-card">
            <div>
              <img
                src="https://udhavumullangal.org.in/wp-content/themes/finance/images/our-impact-icon01.png"
                alt="impact-img"
              />
            </div>
            <div className="impact-text">
              <div className="impact-heading">500</div>
              <div>Children Eduacation</div>
            </div>
          </div>
          <div className="impact-card">
            <div>
              <img
                src="https://udhavumullangal.org.in/wp-content/themes/finance/images/our-impact-icon01.png"
                alt="impact-img"
              />
            </div>
            <div className="impact-text">
              <div className="impact-heading">200</div>
              <div>Children Accomadation</div>
            </div>
          </div>
        </div>
      </div>
      <div className="donations-section">
        <h1 className="heading">Our Donators</h1>
        <div className="donation-names-section">
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Sreenath</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Balaji</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
          <p>Rohith Adinath</p>
          <p>Mahendra</p>
          <p>Mahendra</p>
        </div>
        <div className="button">
          <button
            onClick={() => navigate("/donations")}
            className="outline-btn"
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
