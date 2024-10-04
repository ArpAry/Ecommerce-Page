import "./Fashion.css";
import { Items } from "./../../utils/mock.json";
import { shoppingItems } from "./../../utils/mock.json";
import { otherItems } from "./../../utils/mock.json";
import { MdArrowOutward } from "react-icons/md";
import ShoppingItems from "./ShoppingItems";

const Fashion = () => {
  return (
    <>
      <ShoppingItems
        image1={
          "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl.png?v=1683620903"
        }
        nametype={"Fashion"}
        image2={
          "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-4_720x.png?v=1683621391"
        }
        Items={Items}
      />
      <div className="spotlight-container">
        <div className="spotlight-text-container">
          <h1 className="spotlight-text">Spotlight</h1>
        </div>
        <div className="spotlight-image-container"></div>
        <div className="spotlight-about-container">
          <p className="spotlight-item-text1">Admin Dinh / May 9, 2023</p>
          <h1 className="spotlight-item-text2">
            Travel Tales and Cultural Immersion{" "}
          </h1>
          <p className="spotlight-item-text3">
            Forget the tourist hotspots and explore the road less traveled as we
            uncover hidden gems around the world. From enchanting small towns
            and...
          </p>
          <button className="main-item-text5">Design</button>
          <button className="main-item-text5">Lifestyle</button>
        </div>
      </div>
      <div className="shopping-item-container">
        {/* <h1> fdsjifniuniunfk </h1> */}
        {otherItems.map((element, index) => (
          <div key={index} className="shopping-item">
            <div>
              <img
                className="shopping-item-image"
                src={element.image}
                alt="images"
              />
            </div>
            <div className="shop-items-text">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p className="right-item-text1">
                  By Admin Dinh / in May 9, 2023
                </p>
                <MdArrowOutward />
              </div>
              <h3 className="shopping-text-item2">{element.title}</h3>
              <p className="shopping-item-text3">{element.about}</p>
              <button className="main-item-text5"> Design</button>
              <button className="main-item-text5">Fashion</button>
            </div>
          </div>
        ))}
      </div>
      <ShoppingItems
        image1={
          "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl2.png?v=1683624622"
        }
        nametype={"Lifestyle"}
        image2={
          "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-8_c9accd91-b5cc-4d1c-b7c5-27c324302426_720x.png?v=1683624775"
        }
        Items={shoppingItems}
      />
    </>
  );
};
export default Fashion;
