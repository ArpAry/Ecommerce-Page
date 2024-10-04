import "./BlogContainer.css";
import { FiSend } from "react-icons/fi";
const BlogContainer = () => {
  return (
    <div className="blog-container">
      <div className="blog-container-head">
        <div style={{ display: "flex", margin: "2rem" }}>
          <div
            style={{
              transform: "scale(3)",
              padding: "10px",
              margin: "25px",
              marginRight: "40px",
              alignContent: "center",
            }}
          >
            <FiSend></FiSend>
          </div>
          <div style={{ fontSize: "15px" }}>
            <h1>Inside Design: Stories & interviews </h1>
            <div style={{ marginTop: "10px", color: "grey" }}>
              <p>
                Subscribe to learn about new product features, the latest in
                technology, and updates
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="input-text-box-review">
            <input
              type="text"
              placeholder="Enter your email here "
              style={{ width: "30vw", height: "30px", border: "none" }}
            ></input>
            <button
              className="subscribe-btn-blog"
              style={{
                width: "100px",
                height: "30px",
                color: "white",
                border: "none",
                backgroundColor: "black",
                position: "relative",
                bottom: "0px",
                left: "96px",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogContainer;
