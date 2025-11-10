import { FaPhone, FaEnvelopeOpen, FaLinkedin, FaGithub, FaDiscord} from 'react-icons/fa';
import SendMessage from '../components/SendMessage';
import emailjs from '@emailjs/browser';
const Contact = () => {

  const onSend = async ({name, mail, message, sexe}) => {
    try {
      await emailjs.send(
        'service_ujtzx1a',
        'template_4xe4mc9',
        {
          from_name: name,
          from_email: mail,
          message: message,
          sexe : sexe
        },
        "kzx07wjx21LxvD7wh"
      );
      alert('Message sent!');
    } catch (error) {
      alert('Failed to send');
    }
  };
  return (
    <div className='content'>
      <div className='citation'>
        <p>S'adresser à quelqu'un, quand bien même il ne répondrait pas, ce n'est jamais s'adresser à soi-même</p>
        ~ Saint Augustin ~
      </div>
    
      <div className="container">
        <p> <FaPhone/> Phone: <a href="tel:+32470316928">+32 470 316 928</a></p>
        <p> <FaEnvelopeOpen/> Mail: <a href="mailto:simeonlama00@gmail.com" >simeonlama00@gmail.com</a></p>
        <p> <FaLinkedin/> LinkedIn: <a href="https://www.linkedin.com/in/simeon-lama-7709b5282" target="_blank" rel="noopener noreferrer">simeon-lama-7709b5282</a></p>
        <p> <FaGithub/> GitHub: <a href="https://github.com/SIMIIIIIII/" target="_blank" rel="noopener noreferrer">SIMIIIIIII</a></p>
        <p> <FaDiscord/> Discord: @thesim8886</p>
      </div>
      <div className="container"><SendMessage onSend={onSend}/></div>
    </div>
  )
}

export default Contact
