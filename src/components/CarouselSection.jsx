import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ss1 from "../assets/click2earn_user_dashboard.jpg";
import ss2 from "../assets/click2earn_earnpage.jpg";
import ss3 from "../assets/click2earn_admin_dashboard.jpg";

const CarouselSection = () => (
  <section className="max-w-4xl mx-auto my-16 px-4">
    <h2 className="text-3xl font-bold mb-6 text-center">Click2Earn Screenshots</h2>
    <Carousel
      showThumbs={false}
      infiniteLoop
      useKeyboardArrows
      autoPlay
      interval={4000}
      showStatus={false}
      className="rounded shadow"
    >
      <div>
        <img src={ss1} alt="Dashboard" />
        <p className="legend">User Dashboard</p>
      </div>
      <div>
        <img src={ss2} alt="Earn Page" />
        <p className="legend">Click to Earn Interface</p>
      </div>
      <div>
        <img src={ss3} alt="Admin Panel" />
        <p className="legend">Admin Panel</p>
      </div>
    </Carousel>
  </section>
);

export default CarouselSection;
