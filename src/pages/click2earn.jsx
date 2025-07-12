import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

import ss1 from "../assets/click2earn_user_login.jpg";
import ss2 from "../assets/click2earn_user_dashboard.jpg";
import ss3 from "../assets/click2earn_register.jpg";
import ss4 from "../assets/click2earn_referralpage.jpg";
import ss5 from "../assets/click2earn_earnpage.jpg";
import ss6 from "../assets/click2earn_withdraw.jpg";
import ss7 from "../assets/click2earn_admin_login.jpg";
import ss8 from "../assets/click2earn_admin_dashboard.jpg";

const Click2Earn = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Click2Earn Preview</h2>
      <p className="text-gray-700 mb-10">
        Explore the core pages of the Click2Earn app, including user and admin features.
      </p>

      <Carousel
        showThumbs={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={4000}
        showStatus={false}
        transitionTime={500}
        className="rounded shadow mb-8"
      >
        <div>
          <img src={ss1} alt="User Login" />
          <p className="legend">User Login Page</p>
        </div>
        <div>
          <img src={ss2} alt="User Dashboard" />
          <p className="legend">User Dashboard</p>
        </div>
        <div>
          <img src={ss3} alt="Registration Page" />
          <p className="legend">User Registration</p>
        </div>
        <div>
          <img src={ss4} alt="Referral Page" />
          <p className="legend">Referral System</p>
        </div>
        <div>
          <img src={ss5} alt="Earn Page" />
          <p className="legend">Click-to-Earn Page</p>
        </div>
        <div>
          <img src={ss6} alt="Withdraw Page" />
          <p className="legend">Withdrawal Section</p>
        </div>
        <div>
          <img src={ss7} alt="Admin Login" />
          <p className="legend">Admin Login</p>
        </div>
        <div>
          <img src={ss8} alt="Admin Dashboard" />
          <p className="legend">Admin Dashboard</p>
        </div>
      </Carousel>

      <Link to="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        ← Back to Home
      </Link>
    </section>
  );
};

export default Click2Earn;
