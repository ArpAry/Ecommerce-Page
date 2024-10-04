import { MdOutlineEmail } from "react-icons/md";
import "./Footer.css";
import { X } from "@mui/icons-material";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="left-side-footer">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png"
            alt="Vince"
            style={{ height: "40px" }}
          />
          <p className="footer-item1">Email: info@ecomposershop.com</p>
          <p className="footer-item">Phone: (212) 555-1234</p>
          <p className="footer-item1">Sign up for sale, new arrivals & more</p>
          <div className="footer-email">
            <img
              src="data:image/svg+xml,%3Csvg width='26' height='19' viewBox='0 0 26 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.609375V18.3828H26V0.609375H0ZM23.2046 2.13281L13 11.0248L2.79536 2.13281H23.2046ZM1.52344 3.0452L8.3297 8.97589L1.52344 15.7822V3.0452ZM2.60066 16.8594L9.48096 9.97907L13 13.0455L16.519 9.97913L23.3993 16.8594H2.60066ZM24.4766 15.7822L17.6703 8.97589L24.4766 3.0452V15.7822Z' fill='%233F3F3F'/%3E%3C/svg%3E"
              alt="email"
              style={{ height: "20px" }}
            />
            <input
              style={{ width: "70%", border: "none", marginLeft: "5px" }}
              type="search"
              placeholder="Email address"
            />
            <input type="button" value={"Sign Up "} className="signup-btn" />
          </div>
        </div>
        {/* 2 */}
        <div className="right-side-footer">
          <div>
            <h3>About Us</h3>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Affilate</li>
            <li>Contact Us</li>
            <li>Term of use</li>
          </div>
          <div>
            <h3>Resource</h3>
            <li>Return Policy</li>
            <li>My Account</li>
            <li>Find a Store</li>
            <li>Legacy and Privacy</li>
            <li>Contact</li>
          </div>
          <div>
            <h3>Information</h3>
            <li>Our Story</li>
            <li>Visit Our Story</li>
            <li>Contact Us </li>
            <li>Account</li>
          </div>
          <div>
            <h3>Help</h3>
            <li>FAQ</li>
            <li>Term of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Sitemap</li>
          </div>
        </div>
      </div>
      <div className="footer-bottom ">
        <h4 style={{ fontSize: "10px", marginBottom: "10px" }}>
          © 2024 EComposer Store. All Rights Reserved.
        </h4>
        <img
          style={{ height: "18px", overflowX: "hidden" }}
          src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892"
          alt="payment"
        />
      </div>
    </>
  );
};
export default Footer;
