import React from 'react'
import Header from '../components/Header'
import './BlogInicio_Paciente.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function BlogInicio() {
  return (
    <div>
      <Header />

      <div className="blog-alinhamento">

        {/* Titulo */}
        <div className="titulo">
          <h1>MANTENHA-SE INFORMADO</h1>
          <div></div>
        </div>
        {/* Titulo */}

        {/* Artigos do blog */}
        <div className="artigos-alinhamento">
          
          <Link to="/conteudoBlog">
            <div className="container-artigos">
              <img src="Doctor.svg" alt="Doutor" />
              <div className="alinhamento-texto">
                <p className='titulos-artigos'>Medicina alternativa ou medicina convencional? Junção dos dois.</p>
                <p>por Doutor Mauricio Campos</p>
              </div>
            </div>
          </Link>
          
          

          <div className="container-artigos">
            <img src="Alimentacao.svg" alt="Evento especial Nutrição" />

            <div className='alinhamento-texto'>
              <p className='titulos-artigos'>Como a sua alimentação afeta no desenvolvimento contra o câncer?</p>
              <p>por Nutricionista Mara Fernandez</p>
            </div>
          </div>

          <div className="container-artigos">
            <img src="DireitosLegais.svg" alt="Mantenha-se informado" />

            <div className='alinhamento-texto'>
              <p className='titulos-artigos'>Por que é tão importante manter-se informado? Direitos legais
                para pacientes oncológicos.</p>
              <p>por Porto, Severino e Cunha ADV</p>
            </div>
          </div>

          <div className="container-artigos">
            <img src="Meditation.svg" alt="Meditação" />

            <div className="alinhamento-texto">
              <p className='titulos-artigos'>O psicologico é importante?
                Veja aqui!</p>
              <p>por Psicologa Vannessa Suarez</p>
            </div>
          </div>

        </div>
        {/* Artigos do blog */}

        <Footer/>

      </div>
    </div>
  )
}

export default BlogInicio
