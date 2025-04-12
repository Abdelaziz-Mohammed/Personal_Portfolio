import SectionTitle from './../../components/layouts/SectionTitle';
import {contactImg} from './../../assets/index';
import { FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

function Contact() {
  const {t} = useTranslation();
  // input values
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // input error messages
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [subjectErrorMessage, setSubjectErrorMessage] = useState("");
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    // Clear success message after 12 seconds
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
  
      return () => clearTimeout(timer); // Cleanup function
    }
  }, [successMessage]);
  // validate email
  const validEmail = () => {
    return String(email).toLocaleLowerCase()
      .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  }
  // handle sending clint data
  function handleSend(e) {
    e.preventDefault();
    // validate input fields
    let isValid = true;
    // validate name
    if (!name.trim()) {
      setNameErrorMessage(t("contact.error.nameRequired"));
      isValid = false;
    }
    else {
      setNameErrorMessage("");
    }
    // validate phone number
    if (!phone.trim()) {
      setPhoneErrorMessage(t("contact.error.phoneRequired"));
      isValid = false;
    }
    else if (isNaN(phone)) {
      setPhoneErrorMessage(t("contact.error.phoneNumber"));
      isValid = false;
    }
    else if (phone.length < 7) {
      setPhoneErrorMessage(t("contact.error.phoneLength"));
      isValid = false;
    }
    else {
      setPhoneErrorMessage("");
    }
    // validate email
    if (!email.trim()) {
      setEmailErrorMessage(t("contact.error.emailRequired"));
      isValid = false;
    }
    else if (!validEmail()) {
      setEmailErrorMessage(t("contact.error.emailInvalid"));
      isValid = false;
    }
    else {
      setEmailErrorMessage("");
    }
    // validate subject
    if (!subject.trim()) {
      setSubjectErrorMessage(t("contact.error.subjectRequired"));
      isValid = false;
    }
    else {
      setSubjectErrorMessage("");
    }
    // validate message
    if (!message.trim()) {
      setMessageErrorMessage(t("contact.error.messageRequired"));
      isValid = false;
    }
    else {
      setMessageErrorMessage("");
    }

    // stop if any thing is invalid
    if (!isValid) return;

    // Prepare EmailJS parameters
    const templateParams = {
      user_name: name,
      user_email: email,
      user_phone: phone,
      subject: subject,
      message: message,
    };

    // Send email via EmailJS
    emailjs.send(
      "service_opz27dh",
      "template_kjqk1bc",
      templateParams,
      "IwozADpQzOUpYuYhi"
    )
    .then(
      (
        // response
      ) => {
        // console.log("Email sent!", response);
        setSuccessMessage(t("contact.success", { name }));
        // Clear inputs
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
    })
    .catch(error => {
      console.error("Error sending email:", error);
    });
  }
  return (
    <div id='contact'
      className="w-full py-20 border-b-[1px] border-b-black font-titleFont">
      <SectionTitle title={t("contact.title")} desc={t("contact.desc")} />
      {/* content */}
      <div className='w-full flex justify-between'>
        <div className='w-[35%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 shadow-shadowOne rounded-lg
          flex flex-col gap-5'>
          <img src={contactImg} alt="contact-img"
            className='w-full rounded-lg'/>
          <h3 className='text-xl font-bold mt-5'>{t('contact.side.myName')}</h3>
          <p className='text-gray-400 text-base font-medium -mt-3'>{t('contact.side.developer')}</p>
          <p className='text-gray-400 text-base'>{t('contact.side.descLine')}</p>
          <p className='flex items-center justify-start gap-3'>
            <FaPhone className='text-xl text-primaryColor' />
            +20 101 696 5619
          </p>
          <p className='flex items-center justify-start gap-3'>
            <FaEnvelope className='text-xl text-primaryColor' />
            <a href="mailto:abdelazizmo2022@gmail.com">
              abdelazizmo2022@gmail.com
            </a>
          </p>
          {/* find me */}
          <div className='w-1/2 flex flex-col justify-center items-start gap-3 mt-3'>
            <h4 className='text-base font-normal font-titleFont uppercase'>{t('contact.side.findMe')}</h4>
            <div className='flex gap-4'>
              <a className='bannerIcon' href='https://www.linkedin.com/in/abdelaziz' target='_blank'>
                <FaLinkedinIn />
              </a>
              <a className='bannerIcon' href='https://github.com/Abdelaziz-Mohammed' target='_blank'>
                <FaGithub />
              </a>
              <a className='bannerIcon' href='https://www.facebook.com/1abdelaziz.mohamed' target='_blank'>
                <FaFacebookF />
              </a>
            </div>  
          </div>
        </div>
        <div className='w-[60%] bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 shadow-shadowOne rounded-lg
          flex flex-col gap-8'>
          <form className='w-full grid grid-cols-2 gap-x-10 gap-y-5'>
            {/* name */}
            <div className='flex flex-col gap-2'>
              <label htmlFor="name" className='text-sm text-gray-400 tracking-wide'>{t('contact.name')}</label>
              <input type="text" name="name" id="name" className={`contactInput ${nameErrorMessage !== "" && 'border-red-500'}`}
                value={name} onChange={(e) => setName(e.target.value)}/>
              <span className='text-xs text-red-500 ps-2 -mt-1'>{nameErrorMessage}</span>
            </div>
            {/* phone */}
            <div className='flex flex-col gap-2'>
              <label htmlFor="phone" className='text-sm text-gray-400 tracking-wide'>{t('contact.phone')}</label>
              <input type="text" name="phone" id="phone" className={`contactInput ${phoneErrorMessage !== "" && 'border-red-500'}`}
                value={phone} onChange={(e) => setPhone(e.target.value)}/>
              <span className='text-xs text-red-500 ps-2 -mt-1'>{phoneErrorMessage}</span>
            </div>
            {/* email */}
            <div className='flex flex-col gap-2 col-span-2'>
              <label htmlFor="email" className='text-sm text-gray-400 tracking-wide'>{t('contact.email')}</label>
              <input type="email" name="email" id="email" className={`contactInput ${emailErrorMessage !== "" && 'border-red-500'}`}
                value={email} onChange={(e) => setEmail(e.target.value)}/>
              <span className='text-xs text-red-500 ps-2 -mt-1'>{emailErrorMessage}</span>
            </div>
            {/* subject */}
            <div className='flex flex-col gap-2 col-span-2'>
              <label htmlFor="subject" className='text-sm text-gray-400 tracking-wide'>{t('contact.subject')}</label>
              <input type="text" name="subject" id="subject" className={`contactInput ${subjectErrorMessage !== "" && 'border-red-500'}`}
                value={subject} onChange={(e) => setSubject(e.target.value)}/>
              <span className='text-xs text-red-500 ps-2 -mt-1'>{subjectErrorMessage}</span>
            </div>
            {/* message */}
            <div className='flex flex-col gap-2 col-span-2'>
              <label htmlFor="message" className='text-sm text-gray-400 tracking-wide'>{t('contact.message')}</label>
              <textarea name="message" id="message" className={`contactInput resize-none min-h-52 py-2 ${messageErrorMessage !== "" && 'border-red-500'}`}
                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <span className='text-xs text-red-500 ps-2 -mt-1'>{messageErrorMessage}</span>
            </div>
            {/* send message btn */}
            <div className='col-span-2'>
              <button onClick={handleSend} className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 uppercase shadow-shadowOne
                tracking-wide hover:text-primaryColor duration-300 hover:border hover:border-gray-700 border-transparent'>
                {t('contact.send')}
              </button>
            </div>
            {/* successful send */}
            <div className='col-span-2'>
              <p className='text-xs text-green-400 tracking-wide'>{successMessage}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact