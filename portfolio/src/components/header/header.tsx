// CSS
import './header.css';
// COMPONENTS
import BannerPc from '../banner-pc/banner_pc';
// REACT-ROUTER
import { NavLink, useLocation } from 'react-router';
// ICONS
import { TiThMenuOutline } from "react-icons/ti";
import { IoIosArrowDropleftCircle, IoMdClose } from "react-icons/io";

// IMG
import perfil from '../../../public/imgs/perfil.jpeg';
import logo from '../../../public/imgs/logo.png';

// ZUSTAND STORES
import useModalStore from '../../stores/modal_store';




export default function Header() {
    // ESTADOS GLOBALES
    const { state, openModal, closeModal } = useModalStore();


    // ### CONTANTES


    // -- Ubicación actual en la aplicación
    const location = useLocation().pathname;


    // ### FUNCIONES

    // -- FUNCIÓN PARA LOCATION
    const currentLocation = (pathname: string) => {
        if (location === pathname) {
            return true;
        }

        return false;
    }




    // ### COMPONENT

    return (
        <header className="Header">
            <div className='Header__emty-space' />
            <nav className='Header__nav'>
                <img className='Header__perfil' src={perfil} alt="Foto de perfil" />
                <span className='Header__span--icon' onClick={() => { state ? closeModal() : openModal() }}>
                    {
                        state ?
                            <IoMdClose className='Header__menu--icon' />
                            : <TiThMenuOutline className='Header__menu--icon' />
                    }
                </span>

                {/* MENÚ DESPLEGABLE */}
                {/* 'Header__menu Header__menu--active' */}
                <nav className={`Header__menu ${state && 'Header__menu--active'}`} >
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => `Header__NavLink ${isActive ? 'Header__NavLink--active' : ""}`} to='/' onClick={closeModal}>
                                {
                                    currentLocation("/") && <IoIosArrowDropleftCircle className='Header__icon--active' />
                                }
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => `Header__NavLink ${isActive ? 'Header__NavLink--active' : ""}`} to='/about_me' onClick={closeModal}>
                                {
                                    currentLocation("/about_me") && <IoIosArrowDropleftCircle className='Header__icon--active' />
                                }
                                ABOUT ME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`Header__NavLink ${currentLocation("/web") && 'Header__NavLink--active'}`} to='/web' onClick={closeModal}>
                                {
                                    currentLocation("/web") && <IoIosArrowDropleftCircle className='Header__icon--active' />
                                }
                                WEB
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`Header__NavLink ${currentLocation("/osint") && 'Header__NavLink--active'}`} to='osint' onClick={closeModal}>
                                {
                                    currentLocation("/osint") && <IoIosArrowDropleftCircle className='Header__icon--active' />
                                }
                                OSINT
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`Header__NavLink ${currentLocation("/components") && 'Header__NavLink--active'}`} to='components' onClick={closeModal}>
                                {
                                    currentLocation("/components") && <IoIosArrowDropleftCircle className='Header__icon--active' />
                                }
                                COMPONENTS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={`Header__NavLink ${currentLocation("/tools") && 'Header__NavLink--active'}`} to='/tools' onClick={closeModal}>
                                {
                                    currentLocation("/tools") && <IoIosArrowDropleftCircle className='Header__icon--active' />
                                }
                                TOOLS
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </nav>

            {/* PRESENTACIÓN */}

            <section className='Header__section'>
                <div className='Header__glass'>
                    <div className='Header__img'>
                        <img className='Header__perfil' src={logo} alt="Logo Asahel Méndez Huerta" />
                    </div>

                    <section className='Header__info'>
                        <div className='Header__name'>
                            <h1>Asahel Méndez Huerta</h1>
                        </div>

                        <div className='Header__ing'>
                            <span>
                                <p>Computer Systems Engineer</p>
                            </span>
                        </div>
                    </section>
                </div>
            </section>


            <BannerPc />

        </header>
    );
};