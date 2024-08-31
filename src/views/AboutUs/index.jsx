import { Link } from "react-router-dom";
import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      <div className="breadscrumb">
        <div className="bread-heading">About Us</div>
        <div>
          <Link className="active-link">Home &gt; </Link>
          <Link className="link">About Us</Link>
        </div>
      </div>
      <div className="about-content-section">
        <div className="heading-container">
          <h1 className="heading">NOPA TRUST</h1>
        </div>
        <div className="flex-container">
          <div className="img-container">
            <img
              src="https://udhavumullangal.org.in/wp-content/uploads/2023/12/Our-Mission-768x510-1.webp"
              alt="about-pic"
            />
          </div>
          <div>
            <div className="mission-text-box">
              <h2>Our Mission</h2>
              <p>
                To provide educational – medical assistance, organize health
                awareness programmes, celebrate festivals and special days with
                orphans, destitute and differently – abled children, render
                timely help and relief during disaster / crisis, and mobilize
                like-minded people to build a socially conscious, selfless
                society.
              </p>
            </div>
            <div className="mission-text-box">
              <h2>Our Vision</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ducimus corporis consequatur, laudantium velit cumque animi
                sapiente facilis dolor laboriosam voluptas expedita, ad mollitia
                voluptate voluptates magni nam nobis quod ratione. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Amet facere quo
                perferendis eius, laudantium vel corporis deserunt id earum
                minus, ipsum voluptas molestiae velit sunt veniam vitae illum
                officia magnam!
              </p>
            </div>
            <div className="mission-text-box">
              <h2>NOPA Achievements</h2>
              <ul>
                <li>
                  Educational assistance to the tune of Rs. 10 lakhs every year
                  to the children of Visually-impaired, Disabled, Widow,
                  deserted women and poor.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi eaque aut accusantium, natus architecto nulla, molestiae
                  odio alias cumque repellat, dignissimos itaque. Perspiciatis
                  minima doloremque iure, ullam aut similique possimus!
                </li>
                <li>
                  Educational assistance to the tune of Rs. 10 lakhs every year
                  to the children of Visually-impaired, Disabled, Widow,
                  deserted women and poor.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>{" "}
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  aspernatur error numquam incidunt architecto consectetur
                  sapiente optio fugiat, unde et molestias, rerum placeat non
                  vitae voluptate earum aliquid assumenda quod.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
