//  **************************************************
//  **********  /02-apps-react-vite/  ****************
//  **********  /src/components/Header.jsx  **********
//  **************************************************


import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';



export const Header = () => {

    return (

        <header className="header__container">

            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>

            <h1 className='header__title'> APPS REACT - VITE - PILDORAS INFORMÁTICAS </h1>

            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>


        </header>
    )
}