// CSS
import './banner_pc.css';

// LOGO
import logo from '../../../public/imgs/logo.png';
import perfil from '../../../public/imgs/perfil.jpeg';


export default function BannerPc() {
    return (
        <section className='BannerPc'>
            <div className='BannerPc__content'>
                <div className='BannerPc__content__info'>
                    <div className='BannerPc__content__logo'>
                        <img className='BannerPc__logo' src={logo} alt="Logo AMH" />
                    </div>
                    <div className='BannerPc__info'>
                        <h1>Asahel Méndez Huerta</h1>
                        <h3>Computer Systems Engeneer</h3>
                    </div>
                </div>

                <div className='BannerPc__content__perfil'>
                    <img className='BannerPc__perfil' src={perfil} alt="Imagen de perfil" />
                </div>
            </div>
        </section>
    );
};