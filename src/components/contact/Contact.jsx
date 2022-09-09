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
        <div className="contact" id="contact">

        
        
        <div className="contacti">
                <motion.h2 class="title"animate={{rotate:[0,4,4,0], y:0}} transition={{repeat:Infinity,duration:2}}>
                <span class="title-word title-word-1">C</span>
                <span class="title-word title-word-2">O</span>
                <span class="title-word title-word-3">N</span>
                <span class="title-word title-word-4">T</span>
                <span class="title-word title-word-5">A</span>
                <span class="title-word title-word-6">C</span>
                <span class="title-word title-word-7">T</span>
                <span class="title-word title-word-7"> </span>
                <span class="title-word title-word-5">M</span>
                <span class="title-word title-word-7">E</span>
                </motion.h2>   
                <br/><br/>        
            <motion.div className="left" whileHover={{scale:1.06}} animate={{x:10,y:10}}>
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
                    <div className="row"><input  type="submit" value="send" name="message"/>
                    </div>
                </form>
            
            </motion.div>
        </div>

    </div>
    );
}



