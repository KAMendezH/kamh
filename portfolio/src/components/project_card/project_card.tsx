// CSS
import './project_card.css';

// ICONS
import { FaComputer } from "react-icons/fa6";

export default function ProjectCard() {
    return (
        <section className="ProjectCard">
            <div className='ProjectCard__logo__target'>
                <div>
                    <span className='ProjectCard__logo'>
                        <FaComputer className='ProjectCard__icon'/>
                        <p>Web</p>
                    </span>
                </div>
                <div className='ProjectCard__targets'>
                    <span className='ProjectCard__target'>React</span>
                    <span className='ProjectCard__target'>TypeScript</span>
                    <span className='ProjectCard__target'>CSS</span>
                </div>
            </div>
            <div className='ProjectCard__line'/>
            <div>
                <span>
                    <h4>Project: </h4>
                    <p>Web Site</p>
                </span>
                <span>
                    <h4>Description: </h4>
                    <p>Description project</p>
                </span>
            </div>
            <div>
                <a href="#">Visit project</a>
            </div>
        </section>
    );
}