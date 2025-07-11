import{useState} from "react";
import{ Card, Button } from "react-bootstrap";

const FaQItem =({question, answer})=> {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Card className={`faq-item bg-muted rounded-5 ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <strong>{question}</strong>
            <Button 
              variant="light" 
              className="toggle-btn"
              onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
            >
              {isOpen ? "✖" : "➕"}
            </Button>
          </div>
          {isOpen && <p className="mt-2 text-secondary" >{answer}</p>}
        </Card.Body>
      </Card>
    );
  };
  
  const FaQ = () => {
    const faqData = [
      { question: "How does the free trial work ?", answer: "Our 14 day trial is 100% free and does not require any credit card information to start. If at the end of yourtrial you would like to upgrade, great. If not, your plan will automatically be downgraded to the free plan" },
      { question: "Do I need to choose a plan now ?", answer: "No. You get the full featured, unlimited version of our service completely free for 14 days. Once you're ready to upgrade, you may choose a plan which suits your needs." },
      { question: "What is an online booking system ?", answer: "What is an online booking system? In short, an online booking system is an online interface which enables customers to book the services that you offer in the form an appointment. With an online booking system, businesses and professionals alike are in control of the services and available slots that are bookable by clients. Setting buffer time and configuring recurring appointments is also possible with many systems. Advanced booking systems such as the Aoxio online booking system will also allow for booking pages to be customised and branded." },
      { question: "What is an online appointment ?", answer: "An online appointment typically refers to exactly that, a booking for a service made via an online booking system. An online appointment could be for a service, such as a dental appointment, for example, a meeting, or any number of reasons. While the booking for the appointment is made online, the actual appointment may take place over the phone, or in person at a later time and date as agreed at the point of booking." },
    ];
  
    return (
      <div className="faq-container">
        {faqData.map((item, index) => (
          <FaQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    );
};
export default FaQ;
