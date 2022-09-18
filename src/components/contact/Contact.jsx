import "./contact.scss"
import {motion} from 'framer-motion'
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
    <div className="contact-container">
        <h1>CONTACT US</h1><br/>
            <form onSubmit={sendEmail}>
                <div className="name">Name</div>
                    <input type="text" name="name" />
                    <div className="email">Email</div>
                    <input type="email" name="email" />
                    <div className="subject">Subject</div>
                    <input type="text" name="subject" />
                    <div className="message">Message</div>
                    <textarea className="textarea" name="message" placeholder="A message for me ?" ></textarea>
                     <br/>
                    <div className="row"><input  type="submit" value="send" name="message"/></div>
                </form>
        </div>
    );
}



