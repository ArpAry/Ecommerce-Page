import { BsArrowUpRight } from "react-icons/bs";
import { IoFlashOutline } from "react-icons/io5";

// import { BsArrowUpRightCircle } from "react-icons/bs";
import "./BlogHead.css";
const BlogHead = () => {
  return (
    <div className="blog-head-container">
      <div className="blog-head">
        <div className="image1-head">
          <div className="head-image1-text-container">
            <div>
              <h3 className="fashion-class-text">FASHION</h3>
            </div>
            <div>
              <div className="image1-text-review">
                Here’s what’s new in your favourite stores & online this week...
              </div>
            </div>
          </div>
        </div>
        <div className="image-right-container">
          <div className="image2-head">
            <div className="image2-text-container">
              <div style={{ marginBottom: "10px" }}>
                <p>Design</p>
              </div>
              <div>
                <h1 className="image2-text-review">
                  Here’s what’s new in your favourite stores & online this
                  week...
                </h1>
              </div>
            </div>
          </div>
          <div className="image3-head">
            <div className="image3-text-container">
              <div style={{ marginBottom: "10px" }}>
                <p style={{ fontSize: "14px" }}>FEATURED CATEGORIES</p>
              </div>
              <div>
                <h1 className="image3-text-review">Lifestyle</h1>
                <p style={{ marginTop: "10px", fontSize: "15px" }}>
                  View all post
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogHead;
