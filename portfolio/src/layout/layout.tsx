// CSS
import './layout.css';
// REACT
import { Outlet } from "react-router"

// COMPONENTS
import Header from '../components/header/header';
import Navigation from '../components/navegador/navigation';
import Scroll from '../components/scroll/scroll';
import Footer from '../components/footer/footer';

export default function Layout() {
    return (
        <section className='Layout__section'>
            {/* HOOK PARA HACER SCROLL AL CAMBIAR DE PÁGINA */}
            <Scroll />
            
            <div className='Layout__header__section'>
                <Header />
                <Navigation />
            </div>
            
            

            <main className='Layout__main'>
                <Outlet />
            </main>

            <div className='Layout__footer'>
                <Footer />
            </div>

        </section>
    )
}