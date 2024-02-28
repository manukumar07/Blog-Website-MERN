// import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// import "./Home.css";

// const Home = () => {
//   // Single image for the carousel
//   // const carouselImage = "./images/b1login.png";

//   return (
//     <>
//       {/* <Slider> */}
//       <div>
//         <img
//           src="./images/b1login.png"
//           alt="carousel slide"
//           className="imghome"
//         />
//       </div>
//       {/* </Slider> */}
//     </>
//   );
// };

// export default Home;

/////////////////////////////////
import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src="" alt="carousel slide" className="imghome" />
          <NavLink to="/create-post" className="post-link">
            Create a Post
          </NavLink>
        </div>
        {/* Add more slides as needed */}
      </div>
    </div>
  );
};

export default Home;
