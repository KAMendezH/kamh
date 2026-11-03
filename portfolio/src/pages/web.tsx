// CSS
import './css/web.css';
// COMPONENTS
import ContentCenter from "../components/content_center/content_center";
import ProjectCard from "../components/project_card/project_card";


export default function Web() {
    return (
        <ContentCenter>
            <div className='Web'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </ContentCenter>
    );
};