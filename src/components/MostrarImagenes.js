import React from 'react'
import styled from '@emotion/styled';

const Img = styled.img`
    max-height: 10rem;
`;

const MostrarImagenes = ( { resultado } ) => {

    // destrucuring al resultado
    const { largeImageURL, likes, previewURL, tags, views } = resultado;

    return (  
        <div className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card mb-4">
                <Img 
                    className="card-img-top" 
                    src={previewURL} 
                    alt={tags}
                >
                </Img>

                <div className="card-body">
                    <p 
                        className="card-text"
                    > 
                        {likes} Me Gusta
                    </p>
                    <p 
                        className="card-text"
                    > 
                        {views} Vistas
                    </p>
                </div>

                <div className="card-footer text-center">
                    <a
                        href={ largeImageURL }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-lg bg-danger text-white font-weight-bold"
                    >
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MostrarImagenes;