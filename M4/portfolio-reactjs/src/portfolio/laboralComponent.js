import React from "react";
import "./laboralComponent.scss";

export default class LaboralComponent extends React.Component {
  render() {
    return misTrabajos();
  }
}

function misTrabajos() {
  return (
    <div>
      <div className="cabeceraLaboral">
        <h2>Vida Laboral:</h2>
      </div>
      <div className="laboral">
        <dl>
          <dt>Getronics (2017 - Actualidad):</dt>
          <dd>Analista-Programador</dd>
          <dt>Atos (2007 - 2017):</dt>
          <dd>Programador Senior</dd>
        </dl>
      </div>
    </div>
  );
}
