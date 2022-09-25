import "./contact.scss"
import emailjs from "emailjs-com"

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
                <h2 className="title">CONTACT US</h2>
            <div className="left">
                <form onSubmit={sendEmail}>
                    <div className="name-input">Name
                    <input type="text" name="name" /></div>
                    <div className="email-input">Email
                    <input type="email" name="email" /></div>
                    <div className="subject-input">Subject
                    <input type="text" name="subject" /></div>
                    <div className="message-input">Message</div>
                    <textarea className="textarea-input" name="message" placeholder="A message for me ?" ></textarea>
                    <br/>
                    <div className="submit-button"><input  type="submit" value="send" name="message"/>
                    </div>
                </form>
            </div>
        </div>

    </div>
    );
}