import "./Contact.css";
import { FaArrowRightLong } from "react-icons/fa6";

const HelpCenter = () => {
  return (
    <>
      {" "}
      <div className="back-image-text">
        <div style={{ color: "white" }}>
          <h1 style={{ fontSize: "48px", textAlign: "center" }}>HELP CENTER</h1>
          <p
            style={{
              fontSize: "16px",
              textAlign: "center",
              fontFamily: "Poppins, sans-serif ",
            }}
          >
            Let us know how we may help you?
          </p>
        </div>
        <div className="search-container">
          <input
            type="search"
            placeholder="Search for answers..."
            className="search-text"
          ></input>
          <input className="search-btn" type="button" value={"search"} />
        </div>
      </div>
      <div className="main-features">
        <div className="feature1">
          <img
            src=" https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573"
            style={{ height: "50px", margin: "25px" }}
          />

          <h1 className="features-text1">Order Tracking</h1>
          <p className="features-text2">
            Log in to check the status of your order
          </p>
          <button className="features-text-btn">
            Track Your Order
            <FaArrowRightLong></FaArrowRightLong>
          </button>
        </div>
        <div className="feature1">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681"
            style={{ height: "50px", margin: "25px" }}
          />

          <h1 className="features-text1">Return & Exchange</h1>
          <p className="features-text2">
            We make it easy to return and exchange styles.
          </p>
          <button className="features-text-btn">
            Start a return
            <FaArrowRightLong></FaArrowRightLong>
          </button>
        </div>
      </div>
    </>
  );
};
export default HelpCenter;
