//  ******************************************************
//  **********  /01-apps-react-vite/  ********************
//  **********  /src/components/01-Rutinas.jsx  **********
//  ******************************************************


import { useState } from 'react';
import { trabajosData } from '../data/rutinas';
import { Row, ImagenSeleccionada} from '../styled-components/styled';


export const Rutinas = () => {
    
    const [trabajoActual, setTrabajoActual] = useState(0);
    const [ejercicioActual, setEjercicioActual] = useState(0);
    //const [imagenSeleccionada, setImagenSeleccionada] = useState(null); // Estado para la imagen seleccionada

    const trabajo = trabajosData[trabajoActual];

    
    return (
        
        <div className="rutinas__container">
            
            <h2> Trabajos de Entrenamiento </h2>
            
            <h3> {trabajo.titulo} </h3>

            <Row>
                {
                    trabajo.rutina.map((ejercicio, indice) => (
                        <img
                            key={ejercicio.ejercicio}
                            src={ejercicio.img}
                            alt={ejercicio.ejercicio}
                            onClick={() => setEjercicioActual(indice)}
                        />
                    ))
                }

            </Row>

            <ImagenSeleccionada>
                
                <img 
                    src={trabajo.rutina[ejercicioActual].img} 
                    alt={trabajo.rutina[ejercicioActual].alt} />
                    
            </ImagenSeleccionada>
        

        </div>

    )
}


