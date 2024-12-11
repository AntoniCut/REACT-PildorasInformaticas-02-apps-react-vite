//  ******************************************************
//  **********  /01-apps-react-vite/  ********************
//  **********  /src/components/01-Rutinas.jsx  **********
//  ******************************************************


import { useState } from 'react';
import { trabajosData } from '../data/rutinas';


export const Rutinas = () => {
    
    const [trabajoActual, setTrabajoActual] = useState(0);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null); // Estado para la imagen seleccionada

    const trabajo = trabajosData[trabajoActual];

    const renderImg = (img) => {
        setImagenSeleccionada(img); // Actualiza el estado con la imagen seleccionada
    };

    return (
        
        <div className="rutinas__container">
            
            <h2> Trabajos de Entrenamiento </h2>
            
            <h3> {trabajo.titulo} </h3>

            <div className="rutinas__imagenes">
                {
                    trabajo.rutina.map((ejercicio) => (
                        <img
                            className="imagen__ejercicio"
                            key={ejercicio.ejercicio}
                            src={ejercicio.img}
                            alt={ejercicio.ejercicio}
                            onClick={() => renderImg(ejercicio.img)} // Pasa la imagen seleccionada
                        />
                    ))
                }

            </div>


            <div className="render__imagen">
                
                {
                    imagenSeleccionada ? (
                        <img
                            src={imagenSeleccionada}
                            alt="Ejercicio seleccionado"
                            className="imagen__seleccionada"
                    />) 
                    : ( <p> Haz clic en una imagen para verla aquí </p> )
                }

            </div>

        </div>

    )
}


