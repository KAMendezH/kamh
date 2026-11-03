// CSS
import './css/home.css';

// COMPONENTS
import ContentCenter from '../components/content_center/content_center';

// ICONS
import { TbAppsFilled, TbBrandWhatsappFilled  } from "react-icons/tb";
import { BsTools } from "react-icons/bs";
import { IoIosContact, IoLogoWhatsapp  } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";

export default function Home() {
    return (
        <section className='Home'>
            {/* BIENVENIDA */}
            <div className='Home__black__section Home__welcome'>
                <ContentCenter>
                    <span className='Home__span'>
                        <h1>Welcome to my portfolio!!!</h1>
                    </span>

                    <h3>
                        Feel free to explore my work, hope it gives you a clear picture of what I can do for you.
                    </h3>
                    <h4>Look out my CV in the next link:</h4>
                    <div className='Home__enlace'>
                        <a href="../../public/cv/cv2026.pdf" target='_blank'>Open CV</a>
                    </div>
                </ContentCenter>
            </div>

            {/* EXPLORE */}
            <div className='Home__black__section Home__explore'>
                <h2>What do you want to explore?</h2>
                <ContentCenter>
                    <section className='Home__content'>
                        <div className='Home__content__div Home__content__projects'>
                            <a>
                                <TbAppsFilled className='Home__icons'/>
                                <h4>PROJECTS</h4>
                            </a>
                        </div>
                        <div className='Home__content__div Home__content__tools'>
                            <a>
                                <BsTools className='Home__icons'/>
                                <h4>TOOLS</h4>
                            </a>
                        </div>
                        {/* <div className='Home__content__div Home__content__certificates'>
                            <a>
                                <TbCertificate className='Home__icons'/>
                                <h4>CERTIFICATES</h4>
                            </a>
                        </div> */}
                        <div className='Home__content__div Home__content__contact'>
                            <a>
                                <IoIosContact className='Home__icons'/>
                                <h4>CONTACT</h4>
                            </a>
                        </div>
                    </section>
                </ContentCenter>
            </div>

            {/* CONTACT */}
            <ContentCenter>
                <section className='Home__contact'>
                    <h2>Social Media</h2>

                    <div>
                        <a href="" className='Home__contact__whatsapp'>
                            <TbBrandWhatsappFilled className='Home__contact__icons'/>
                            <p>Whatsapp</p>
                        </a>
                        <a href="" className='Home__contact__facebook'>
                            <FaFacebookF className='Home__contact__icons'/>
                            <p>Facebook</p>
                        </a>
                    </div>
                    
                </section>
            </ContentCenter>
        </section>
    );
};