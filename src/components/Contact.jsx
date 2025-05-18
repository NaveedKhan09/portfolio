import '../styles/contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from 'react';


export const Contact = () => {
    const [ isEmpty, setIsEmpty ] = useState(false)
    const [ isSent, setIsSent] = useState(false)
    function SendMessage (event) {
        event.preventDefault();
        const element = event.target;
        const formData = new FormData(element)
        const userData = Object.fromEntries(formData)

        const userMessage = formData.get("userMessage")
        if (userMessage == "") {
            setIsEmpty(prevState => prevState = true)
        }else{
            setIsEmpty(prevState => prevState = false)
            const allData = {
                ...userData,
                userMessage
            }
            console.log(allData)
            element.reset();
            setIsSent(true)
            setTimeout(() => {
              setIsSent(false)  
            }, 2000);

        }


    }
    return(
        <div className="contactContainer" id='Contact'>
            <h1>Contact Me</h1>
            <div className="innerContainer">
                <div className="contactInfo">
                    <h3>Reach me Out Here.</h3>
                    <div className="infoBox">
                        <div className="infoItem">
                            <i className="fa-solid fa-envelope"></i><p> naveedkhan12992@gmail.com</p>
                        </div>
                        <div className="infoItem">
                            <i className="fa-solid fa-phone"></i><p> +923010587232</p>
                        </div>
                        <a href="https://wa.me/923010587232?text=Hello%20Naveed!%20I%20want%20to%20collabe%20with%20You." target='_blank'>
                            <div className="infoItem">
                                <i className="fa-brands fa-whatsapp"></i><p> Chat on Wattsapp</p>
                            </div>
                        </a>
                        
                        <h3>Socials Links</h3>
                        <div className="socialLinksBox">
                            <a href="https://www.linkedin.com/in/naveed-khan-aa446b31a/" target='_blank' className='socialLink'><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                            <a href="" className='socialLink'><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
                        </div>


                    </div>

                </div>
                <div className="Form">
                    <form onSubmit={SendMessage}>
                        <h3>Let’s Connect – Send me a Message</h3>
                        <input id="name" name="name" type="text" placeholder='Your Name' required autoComplete="name"/>
                        <input id="email" name="email" type="email" placeholder='Your Email address*' required autoComplete="email"/>
                        <textarea name="userMessage" rows={11} id="" placeholder="Enter Your Message Here"></textarea>
                        <div className='messageBox'>{ isEmpty && <small> Message can't be empty!</small> }</div>
                        
                        <button href="#" className='submit'>SEND ➔</button>

                        {/* ----submission message---- */}
                        {isSent && <div className='submissionPopup'>
                            Message Sent !
                        </div>}
                    </form>

                </div>

            </div>
        </div>
    )
}