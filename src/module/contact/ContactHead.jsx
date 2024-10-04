import { FaArrowRightLong } from "react-icons/fa6";
import Helpdesk from "./Helpdesk";
import Question from "./Question";
import HelpCenter from "./Helpcenter";
import NewAccordion from "../../components/NewAccordian";
import AnyOtherQuestions from "./AnyOtherQuestions";
import Footer from "../Footer/Footer";
const ContactHead = () => {
  return (
    <>
      <div className="contact-container">
        <div className="background-img1">
          <HelpCenter></HelpCenter>
          <Helpdesk></Helpdesk>
          <div style={{ marginTop: "200px" }}>
            <Question></Question>
          </div>
          <AnyOtherQuestions></AnyOtherQuestions>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};
export default ContactHead;
