import { BiBorderRadius } from "react-icons/bi";
import NewAccordion from "../../components/NewAccordian";
import "./Contact.css";

const Question = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "80px",
          paddingBottom: "80px",
          backgroundColor: "#e0e0ff",
          color: "black",
        }}
      >
        <h1 style={{ paddingBottom: "30px" }}>Popular Searched Questions</h1>
        <div className="edit-accodian">
          <NewAccordion></NewAccordion>
        </div>
      </div>
    </div>
  );
};
export default Question;
