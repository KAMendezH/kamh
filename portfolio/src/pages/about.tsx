// CSS
import './css/about.css';

// COMPONENTS
import ContentCender from "../components/content_center/content_center";

// IMAGES
import perfil from '../../public/imgs/perfil.jpeg';

export default function AboutMe() {
    return (
        <ContentCender>
            <section className="AboutMe">

                {/* PRESENTACIÓN */}
                <div className='AboutMe__presentation'>
                    <div className='AboutMe__presentation__img'>
                        <img className='AboutMe__presentation__perfil' src={perfil} alt="Imagen de perfil" />
                    </div>
                    <div className='AboutMe__presentation__info'>
                        <h2>Hi everyone...</h2>
                        <div>
                            <span>Masculine</span>
                            <span>México</span>
                        </div>
                        <p>My name is Asahel, I´m from México.</p>
                        <p>I´m a Computer Systems Engeneer, but I focused on cibersecurity, specifically on OSINT. <br/>
                        But I know some about mobile and web pentesting, and some about malware analysis
                        I consider myself mid level on web development.</p>
                    </div>
                </div>

                <div className='AboutMe__university'>
                    <h1>University</h1>
                    <p>I were to Utel University, that is an online university so I had very limited knowledge. That´s why I decided take some extra courses from YouTube and Udemy about software development. <br />
                    I took courses about HTML, CSS, JavaScript, Java, Python, NodeJS, Express, MongoDB, React, TypeScript, React Native, NextJs, NestJs and Cybersecurity.
                    </p>
                </div>

                <div className='AboutMe__hobbies'>
                    <h1>Hobbies</h1>
                    <p>
                        Some hobbies I like to do in mi free time are: drawing, working out, programming and reading. <br />
                        I also know how to play the guitar but I don't play it very well.
                    </p>
                </div>

            </section>
        </ContentCender>
    );
};