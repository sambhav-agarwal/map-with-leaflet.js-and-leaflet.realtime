import React from "react";
import vg from "../assets/2.webp";

import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Best IT Solution & Company In Global Community.</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            <ul>
                <li>Website Development: </li>
                <p>Develop websites from scratch or enhance existing ones based on client requirements. This includes frontend development using HTML, CSS, JavaScript, and frontend frameworks like React, Angular, or Vue.js. Backend development</p>
               <br />
                <li>Web Design: </li>
                <p>Create visually appealing and user-friendly designs for websites. Collaborate with clients to understand their branding, target audience, and design preferences. Develop wireframes and mockups to visualize the website's structure and layout. Implement responsive design principles to ensure the site works well across different devices and screen sizes.</p>
                <br />
                <li>E-commerce Solutions</li>
                <p>Offer e-commerce development services to enable businesses to sell products or services online. Build secure and scalable online stores with features like product catalog management, shopping carts, payment gateways integration, order management, and customer account management.</p>
                <br />
                <li>Content Management Systems (CMS):</li>
                <p>Implement CMS solutions such as WordPress, Drupal, or Joomla to allow clients to easily manage and update their website content without technical knowledge. Customize and extend the CMS to meet specific client requirements.</p>
            </ul>
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;