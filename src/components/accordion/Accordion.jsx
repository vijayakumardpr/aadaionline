import { useState } from "react";
import "./accordion.css";

const data = [
  {
    title: "Quick Shop",
    content: ["Men", "Women"],
  },
  {
    title: "Policy Information",
    content: ["Shipping Policy", "Return & Refund Policy"],
  },
];

const Accordion = () => {
  return (
    <>
      <div className="accordion-container">
        {data.map((item, i) => {
          return <AccordionCard key={i} {...item} />;
        })}
      </div>
    </>
  );
};

const AccordionCard = ({ title, content }) => {
  const [open, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!open);
  }
  return (
    <>
      <div className="accordion-card">
        <div className="accordion-title" onClick={handleToggle}>
          <div>{title}</div>
          <div>X</div>
        </div>
        {open && (
          <div className="accordion-content">
            {content.map((list, i) => {
              return <AccordionList key={i} list={list} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

const AccordionList = ({ list }) => {
  return (
    <div className="accordion-list">
      <ul>
        <li>{list}</li>
      </ul>
    </div>
  );
};

export default Accordion;
