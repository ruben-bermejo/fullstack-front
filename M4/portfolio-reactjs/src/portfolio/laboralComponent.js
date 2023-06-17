import React, { useState } from "react";
import "./laboralComponent.scss";

export default function LaboralComponent(props) {
  const [show, showProjects] = useState(false);
  return (
    <div>
      <div className="cabeceraLaboral">
        <h2>{props.cabecera}</h2>
        <button onClick={() => showProjects(!show)}>Mostrar/Ocultar proyectos</button> 
      </div>
      <div className="laboral" >
        <dl>
          <dt>Getronics (2017 - Actualidad):</dt>
          <dd>Analista-Programador</dd>
          { show &&
          <dl>
            <dd>Servicio de Soporte | Ayto. Valladolid</dd>
            <dd>Movipol | Policía Movilidad Ayto. Madrid', 'Albedo | GSS JCyL'</dd>
            <dd>Albedo | GSS JCyL</dd>
          </dl>
          }
          <dt>Atos (2007 - 2017):</dt>
          <dd>Programador Senior</dd>
          { show &&
          <dl>
            <dd>Servicios de tarificación | Orange España</dd>
            <dd>Web de logística | SEUR</dd>
            <dd>Oficina virtual | Correos</dd>
          </dl>
          }
        </dl>
      </div>
      
    </div>
  );
}

