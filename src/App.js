import { useEffect, useState } from 'react';
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [imagenes, setImagenes] = useState('');
  const [resultadoApi, guardarResultadoApi] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  useEffect(() => {
    
    const consultarApi = async () => {
      // evitamos que ejecute la primera vez
      if ( imagenes === '' ) return;

      // cantidad de imagens que se mostraran por pagina
      const imagenesPorPagina = 30;
      const apiKey = '21272241-7f476c758e183ea1c3cb29f97';
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${imagenes}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const resultado = await fetch(url);
      const datos = await resultado.json();

      guardarResultadoApi(datos.hits);

      const calcularTotalPaginas = Math.ceil( datos.totalHits / imagenesPorPagina );
      setTotalPaginas(calcularTotalPaginas);

      const jumbotron = document.querySelector('.jumbotron');
      // este metodo hace que se vaya hacia arriba
      jumbotron.scrollIntoView( { behavior: 'smooth' } );
    };

    consultarApi();
  }, [imagenes, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    if ( nuevaPaginaActual === 0 ) return;

    setPaginaActual(nuevaPaginaActual)
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;
    if ( nuevaPaginaActual > totalPaginas ) return;

    setPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de imagenes </p>

        <Formulario 
          setImagenes={ setImagenes }
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes 
          resultadoApi={resultadoApi}
        />

        { paginaActual === 1 ? null 
          : <button
              type="button"
              className="btn btn-info mr-2"
              onClick={ paginaAnterior }
            >
              Anterior &laquo;
            </button>
        }

        { 
          paginaActual === totalPaginas ? null 
          : <button
              type="button"
              className="btn btn-info"
              onClick={paginaSiguiente}
            >
              Siguiente &raquo;
            </button> 
        }
      </div>
    </div>
  );
};

export default App;
