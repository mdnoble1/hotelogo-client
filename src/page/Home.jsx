import Banner from "./Banner";
import Faq from "./Faq";
import Gallery from "./Gallery";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import FeaturedRooms from "./FeaturedRoom/FeaturedRooms";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Helmet>
        <title>HoteloGo</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Gallery></Gallery>
        <FeaturedRooms></FeaturedRooms>
        <Testimonial></Testimonial>
        <Faq></Faq>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
