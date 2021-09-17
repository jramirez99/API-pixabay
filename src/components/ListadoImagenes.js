import React from 'react'
import MostrarImagenes from './MostrarImagenes';

const ListadoImagenes = ( { resultadoApi } ) => {

    return (  
        <div className="col-12 p-5 row">
            { resultadoApi.map( resultado => (
                <MostrarImagenes
                    key={resultado.id}
                    resultado={resultado}
                />
            )) }
        </div>
    );
}

export default ListadoImagenes;