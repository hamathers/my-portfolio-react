import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";

const listButtons = [
  {
    icon: <FacebookIcon style={{ color: "white" }} />,
    background: "#233570",
    link: "https://www.facebook.com/hamathers/",
  },
  {
    icon: <LinkedInIcon style={{ color: "white" }} />,
    background: "#065494",
    link: "https://www.linkedin.com/in/mrhavh/",
  },
  {
    icon: <InstagramIcon style={{ color: "white" }} />,
    background: "#398AE4",
    link: "https://www.instagram.com/dust_heaven/",
  },
  {
    icon: <PhoneIcon style={{ color: "white" }} />,
    background: "#398AE4",
    link: undefined,
  },
];

export default function Contact() {
  const [message, setMessage] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_3nk5bfd",
        "template_5linpfw",
        form.current,
        "user_swXxRKo08fjnl1DONzdbK"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="from_name" />
          <input type="email" placeholder="Email" name="from_email" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
          {isSending && <span>Sending...</span>}
        </form>
        <div style={{ display: "flex" }}>
          {listButtons.map((btn, i) => (
            <a href={i === 3 ? "tel:+84362071843" : undefined}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 5,
                  background: btn.background,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                  cursor: "pointer",
                }}
                onClick={() =>
                  window.open(btn.link, "_blank", "noopener,noreferrer")
                }
              >
                {btn.icon}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
