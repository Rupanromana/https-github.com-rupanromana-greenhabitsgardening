import "./contact.scss"
import emailjs from "emailjs-com"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGoogle,faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function Contact() {

    function sendEmail(e){
        e.preventDefault();
    
    emailjs.sendForm('service_zzvcntv', 'template_nzzo0si', e.target, 'NvPwsZTACt4cmj0QK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    
    return (
        <div className="contact" id="contact">
          <div className="contact-container">
            <div className="contact-info">
              <h2 className="title">Contact Us</h2>
              <p className="description">
                Have any questions or inquiries? We'd love to hear from you! Our
                team is here to assist you and provide any information you need.
              </p>
            </div>
            <div className="form-container">
              <form onSubmit={sendEmail}>
                <div className="name-input">
                  Name
                  <input type="text" name="name" />
                </div>
                <div className="email-input">
                  Email
                  <input type="email" name="email" />
                </div>
                <div className="subject-input">
                  Subject
                  <input type="text" name="subject" />
                </div>
                <div className="message-input">Message</div>
                <textarea
                  className="textarea-input"
                  name="message"
                  placeholder="Enter your inquiries here."
                ></textarea>
                <br />
                <div className="submit-button">
                  <input type="submit" value="Send" name="message" />
                </div>
              </form>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon">
                <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a href="#home" className="social-icon">
                <FontAwesomeIcon icon={faGoogle}/>
              </a>
              <a href="https://instagram.com" className="social-icon">
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
        </div>
      );
    
}