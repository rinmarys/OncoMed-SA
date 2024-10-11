import React from 'react'
import Header from '../components/Header'
import './BlogInicio_Paciente.css'
import Footer from '../components/Footer'

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

          <div className="container-artigos">
            <img src="Doctor.svg" alt="Doutor" />

            <div className="alinhamento-texto">
              <a>Medicina alternativa ou medicina convencional? Junção dos dois.</a>
              <p>por Doutor Mauricio Campos</p>
            </div>
          </div>

          <div className="container-artigos">
            <img src="Alimentacao.svg" alt="Evento especial Nutrição" />

            <div className='alinhamento-texto'>
              <a>Como a sua alimentação afeta no desenvolvimento contra o câncer?</a>
              <p>por Nutricionista Mara Fernandez</p>
            </div>
          </div>

          <div className="container-artigos">
            <img src="DireitosLegais.svg" alt="Mantenha-se informado" />

            <div className='alinhamento-texto'>
              <a>Por que é tão importante manter-se informado? Direitos legais
                para pacientes oncológicos.</a>
              <p>por Porto, Severino e Cunha ADV</p>
            </div>
          </div>

          <div className="container-artigos">
            <img src="Meditation.svg" alt="Meditação" />

            <div className="alinhamento-texto">
              <a>O psicologico é importante?
                Veja aqui!</a>
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
