import React from "react";
import "./estudiosComponent.scss";

export default class EstudiosComponent extends React.Component {
  render() {
    return misEstudios();
  }
}

function misEstudios() {
  return (
    <div>
      <div className="cabeceraEstudios">
        <h2>Formación y Habilidades:</h2>
      </div>
      <div className="estudios">
        <dl>
          <dt>Títulos académicos:</dt>
          <dd>Licenciado en Química por la Universidad de Valladolid</dd>
          <dt>Certificaciones:</dt>
          <dd>Professional Scrum Master I | Scrum.org</dd>
          <dd>
            ISTQB Certified Tester, Foundation Level | International Software
            Quality Institute
          </dd>
          <dt>Formación complementaria:</dt>
          <dd>(en curso) Máster en Full Stack Developer | Naxer</dd>
          <dt>Lenguajes de programación:</dt>
          <dd>Java, Typescript, python, SQL, pl/sql, Shell Script</dd>
        </dl>
        <dl>
          <dt>Frameworks y herramientas:</dt>
          <dd>Spring, Angular, ReactJS, Hibernate, Maven</dd>
          <dt>Servidores de Aplicaciones e IDEs:</dt>
          <dd>Tomcat, Jboss/Wildfly, eclipse, IntelliJ, Visual Studio</dd>
          <dt>Bases de Datos:</dt>
          <dd>Oracle, SQL Server, MySQL/MariaDB</dd>
        </dl>
      </div>
    </div>
  );
}
