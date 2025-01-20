//  ********************************************************
//  **********  /01-apps-react-vite/  **********************
//  **********  /src/styled-components/styled.js  **********
//  ********************************************************


import styled from "styled-components";


export const Row=styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    max-width: 1200px;
    margin: auto;
    
    img {
        width: 100px;
        height: 100px;
        transition: transform 0.3s;
        cursor: pointer;
    }

    img:hover {
        transform: scale(1.1);
    }

`;


export const ImagenSeleccionada=styled.div`

    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    img {
        width: 100%;
        height: 100%;
        border: 3px solid blue;
        border-radius: 10px;
    }

`;
