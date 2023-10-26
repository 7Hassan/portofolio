import { useState, useRef } from "react";
import "./contact.scss";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import emailjs from '@emailjs/browser';
import ReactLoading from 'react-loading';

export default function Contact() {
  const formEle = useRef();
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: ''
  })
  const { email, subject, message } = form
  const isEmail = validator.isEmail(email);
  const isDisabled = !isEmail || !subject || !message;

  const handleChange = (input) => {
    setForm({ ...form, [input.name]: input.value })
  }

  const sendEmail = () => {
    emailjs.sendForm('service_bf1sdqc', 'template_wa6v279', formEle.current, '4AqIka29cbuQNS549')
      .then((result) => {
        setLoading(false)
        toast.success("Thanks, I'll reply ASAP 😇", { className: 'my-custom-toast' })
        setForm({
          email: '',
          subject: '',
          message: ''
        })
      }, (error) => {
        setLoading(false)
        toast.error(`${error}`, { className: 'my-custom-toast' })
      });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (isDisabled) return;
    setLoading(true)
    sendEmail()
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-ae31d.appspot.com/o/Icons%2Fshake.svg?alt=media&token=a01e4add-92be-459c-9690-1e9758586e96&_gl=1*s7eooo*_ga*Njk0MTExMjMzLjE2OTc4MzQzODA.*_ga_CW55HF8NVT*MTY5ODMxODk5My4xMC4xLjE2OTgzMTkyMDAuOC4wLjA."
          alt="" loading="lazy" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit} ref={formEle}>
          <input type="text" placeholder="Email" name="email" value={email}
            onChange={(e) => handleChange(e.target)} />
          <input type="text" placeholder="Subject" name="subject" value={subject}
            onChange={(e) => handleChange(e.target)} />
          <textarea placeholder="Message" name="message" value={message}
            onChange={(e) => handleChange(e.target)}></textarea>
          <div>

          </div>
          <button type="submit" className={`${isDisabled && 'disabled'}`} disabled={isDisabled}>
            {!loading && 'Send'}
            {loading && <ReactLoading type={'spin'} color={'white'} height={20} width={20} />}
          </button>
        </form>
      </div>
    </div>
  );
}


