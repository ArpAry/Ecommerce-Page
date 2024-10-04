import { helpdesk } from "./../../utils/mock.json";
import "./Contact.css";

const Helpdesk = () => {
  return (
    <div className="help-desk">
      <h1
        style={{
          textAlign: "center",
          marginTop: "80px",
          marginBottom: "40px",
        }}
      >
        Browse our help desk
      </h1>
      {/* help desk items  */}

      <div className="help-desk-items">
        {/* 1 */}
        {helpdesk.map((item, ind) => (
          <div className="help-item" key={ind}>
            <img
              src={item.image}
              alt={ind + 1}
              style={{ height: "80px", marginBottom: "20px" }}
            />
            <h1 style={{ fontSize: "24px" }}>{item.title}</h1>
            <p style={{ fontSize: "16px", margin: "10px 0px" }}>
              {item.review}
            </p>
            <h3 style={{ fontSize: "20px", color: "#3f3f3f" }}>view more</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Helpdesk;
