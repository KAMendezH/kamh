// CSS
import './content_center.css';

type ContentCenterProps = {
    children: React.ReactNode
}


export default function ContentCenter({children}:ContentCenterProps){
    return(
        <section className='contentCenter'>
            {children}
        </section>
    );
};