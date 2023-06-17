import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import DatosComponent from './datosComponent';
import EstudiosComponent from './estudiosComponent';
import LaboralComponent from './laboralComponent';
import "./portfolioRouterComponent.scss"

export default function PortfolioRouter() {

    return (
        <div className='router'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/datos'>Datos Personales</Link></li>
                <li><Link to='/estudios'>Formación y Habilidades</Link></li>
                <li><Link to='/laboral'>Vida Laboral</Link></li>
            </ul>

            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/datos' element={<DatosComponent cabecera="Datos Personales:"/>}></Route>
                <Route path='/estudios' element={<EstudiosComponent cabecera="Formación y Habilidades:"/>}></Route>
                <Route path='/laboral' element={<LaboralComponent cabecera="Vida Laboral:"/>}></Route>
            </Routes>
        </div>
    )

    function Home(){
        return <h1 className='cabeceraRouter'>Página Principal</h1>
    }

}