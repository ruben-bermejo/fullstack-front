import React from 'react';
import './datosComponent.scss';

export default class DatosComponent extends React.Component {
    render() {
        return (
            misDatos(this.props)
        );
    }
}

function misDatos(props) {
    return(
        <div>
            <div className="cabeceraDatos">
                <h2>{props.cabecera}</h2>
            </div>
            <div className="datos">
                <dl>
                    <dt>Nombre:</dt>
                    <dd>José Rubén</dd>
                    <dt>Apellidos:</dt>
                    <dd>Bermejo Sanz</dd>
                    <dt>Fecha nacimiento:</dt>
                    <dd>12/03/1977</dd>
                    <dt>Ciudad:</dt>
                    <dd>Valladolid</dd>
                </dl>
                <dl>
                    <dt>Dirección:</dt>
                    <dd>Calle Miño 5 (Laguna de Duero)</dd>
                    <dt>Teléfono:</dt>
                    <dd>983555555</dd>
                    <dt>E-mail:</dt>
                    <dd>jose-ruben.bermejo@getronics.com</dd>
                    <dt>DNI:</dt>
                    <dd>12345678Z</dd>
                </dl>
            </div>
        </div>


    );
}