import '../styles/Hero.css';
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
function Hero () {
    return (
        <div className="Hero">
            <div className="section1">
            <h1>Hi! I'm </h1>
            <h1>NAVEED KHAN</h1>
            <h2>Front end Web developer</h2>
            <p>I'm a Passionate Front end Web developer experienced in crafting responsive & user-friendly web interfaces.</p>
            <div className="socials">
                <a href="https://www.linkedin.com/in/naveed-khan-aa446b31a/" target='_blank'>
                    <div className="social">
                    <FontAwesomeIcon className='icon' icon={faLinkedin} />
                    </div>
                </a> 
                <a href="https://github.com/NaveedKhan09" target='_blank'>
                    <div className="social">
                    <FontAwesomeIcon className='githubIcon' icon={faGithub} />
                    </div>
                </a>
                <a href="">
                    <div className="social">
                    <FontAwesomeIcon className='icon' icon={faFacebook} />
                    </div>
                </a>
            </div>
            <div className='skills'>
                <a href="#"> <button className='skill' title='click to download Resume'>RESUME ➔</button> </a>
                <a href="#projects"> <button className='skill'>MY WORK ➔</button>  </a>
            </div>
            </div>
            <div className="section2">
                <div className="image">
                    <img src="./images/Naveed khan.jpg" alt="Personal Pic" />
                </div>
            </div>
            
        </div>
    )
}
export default Hero;