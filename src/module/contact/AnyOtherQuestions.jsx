import "./Contact.css";
import { anyotherquestions } from "./../../utils/mock.json";
const AnyOtherQuestions = () => {
  return (
    <div style={{}}>
      <div
        style={{
          textAlign: "center",
          marginTop: "120px",
          marginBottom: "50px",
          lineHeight: "45px",
        }}
      >
        <h1>Any other questions?</h1>
        <p style={{ fontSize: "16px", fontWeight: "bolder", color: "#424242" }}>
          We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
          Weekends: 6am to 6pm PT.
        </p>
      </div>
      <div className="any-other-questions-container">
        {/* 1 */}
        {anyotherquestions.map((element, ind) => (
          <div className="any-other-questions-item">
            <img
              src={element.image}
              alt={ind + 1}
              style={{
                height: "60px",
              }}
            />
            <h1>{element.type}</h1>
            <h2 className="feature-text-options">{element.text}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnyOtherQuestions;
