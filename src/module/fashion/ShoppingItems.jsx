// import { Items } from "./../../utils/mock.json";

import "./Fashion.css";
import { MdArrowOutward } from "react-icons/md";

const ShoppingItems = ({ image1, nametype, image2, Items }) => {
  return (
    <div>
      <div className="fashion">
        <div className="fashion-class-head">
          <img
            src={image1}
            alt="main-item"
            style={{
              borderRadius: "30px",
              marginRight: "40px",
            }}
          />
          <h1 className="fashion-text">{nametype}</h1>
        </div>
      </div>

      <div className="main-items-container">
        <div className="main-item">
          <img
            src={image2}
            alt="image2"
            className="main-items-container-image"
            style={{ height: "450px", borderRadius: "10px" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
              width: "100%",
            }}
            className="main-items-container-image-text"
          >
            <p className="right-item-text1">By Admin Dinh / in May 9, 2023</p>
          </div>
          <h3 className="main-item-text3">Here's why you should try mood</h3>
          <p className="main-item-text4">
            But they weren’t the only ones to lean into the high octane trend,
            with MoschinoCersace and Jil Sander plumping for bold prints...
          </p>
          <button className="main-item-text5">Design</button>
          <button className="main-item-text5">Fashion</button>
        </div>
        <div>
          <div>
            {/* {console.log(Items)} */}

            {Items.map((element, id) => (
              <div key={id}>
                <div className="side-item">
                  <img
                    src={element.image}
                    alt="main-image"
                    style={{ height: "175px", borderRadius: "5px" }}
                  />
                  <div className="right-items">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p className="right-item-text1">
                        By Admin Dinh / in May 9, 2023
                      </p>
                      <MdArrowOutward />
                    </div>
                    <h3 className="side-text-item2">{element.about}</h3>
                    <div>
                      <p className="side-item-text3">{element.review}</p>
                      <button className="main-item-text5"> Design</button>
                      <button className="main-item-text5">Fashion</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingItems;
