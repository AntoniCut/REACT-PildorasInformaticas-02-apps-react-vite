//  ********************************************
//  **********  /02-apps-react-vite/  **********
//  **********  /src/App.jsx  ******************
//  ********************************************


import { Routes, Route } from 'react-router-dom';
import { Header, NavBarLink, Rutinas } from "./components"



export const App = () => {


    return (

        <div className='layout'>

            <Header />

            <NavBarLink />

            <main className="layout__main">


                <Routes>

                    <Route path="/rutinas" element={<Rutinas />} />

                </Routes>

            </main>

        </div>
    )
}
