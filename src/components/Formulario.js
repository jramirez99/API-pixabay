import React, { useState } from 'react'
import Error from './Error';

const Formulario = ( { setImagenes } ) => {

    const [busqueda, guardarBusqueda] = useState('')
    const [error, setError] = useState(false);

    const validarInput = e => {
        e.preventDefault();

        if ( busqueda.trim() === '' ) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        };
        setError(false);
        setImagenes(busqueda);
    };

    return (
        <form
            onSubmit={ validarInput }
        >
            { error 
                ? <Error mensaje="El campo es obligatorio" />
                : null 
            }
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen Ej: futbol, cafe"
                        onChange={ e => guardarBusqueda( e.target.value )}
                    />
                </div>

                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
        </form>
    )
};

export default Formulario;

