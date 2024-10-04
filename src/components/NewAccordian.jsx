import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { BiBorderRadius } from "react-icons/bi";

const NewAccordion = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "10px",
      }}
    >
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="accordian-summary"
          sx={{
            marginLeft: "25px",
            color: "#373737",
          }}
        >
          How do I join the affiliate program?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            marginLeft: "25px",
            color: "#424242",
          }}
        >
          Simply sign up through our affiliate program page by filling out the
          registration form. Once approved, you'll receive a unique affiliate
          link to start promoting our products.{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordian-summary"
          style={{
            marginLeft: "25px",
            color: "#373737",
          }}
        >
          What commission rates do you offer?
        </AccordionSummary>
        <AccordionDetails
          style={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            color: "#424242",
            marginLeft: "25px",
          }}
        >
          We offer over 400 unique products to support a wide variety of
          wellness needs. The majority of these products are available through
          our website, however there are some that are available exclusively
          through our retailer partners.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordian-summary"
          style={{
            marginLeft: "25px",
            color: "#373737",
          }}
        >
          How and when do I get paid?
        </AccordionSummary>
        <AccordionDetails
          style={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            color: "#424242",
            marginLeft: "25px",
          }}
        >
          For over 50 years, we have set a standard for trust, safety, and
          efficacy, and these values have never been more relevant. During this
          pandemic, we remain committed to producing the highest quality
          products possible, from ingredient sourcing to rigorous testing and
          approvals, before they make their way to you and your family.{" "}
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandLessIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordian-summary"
          style={{
            marginLeft: "25px",
            color: "#373737",
          }}
        >
          What marketing resources are available to affiliates?
        </AccordionSummary>
        <AccordionDetails
          style={{
            width: "70%",
            fontSize: "18px",
            textAlign: "left",
            lineHeight: "28px",
            color: "#424242",
            marginLeft: "25px",
          }}
        >
          Our headquarters is in Green Bay, WI. We also have an office in
          Minneapolis, and a distribution center in Green Bay, WI.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NewAccordion;
