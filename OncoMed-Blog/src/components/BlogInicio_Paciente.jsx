import React from 'react'
import Header from './Header'
import './BlogInicio_Paciente.css'

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
        <div className="artigos">

          <div className="medicina-alternativa-artigo">
            <img src="Doctor.svg" alt="Doutor" />

            <div className="alinhamento-texto">
              <button>Medicina alternativa ou medicina convencional? Junção dos dois.</button>
              <p>por Doutor Mauricio Campos</p>
            </div>
          </div>

          <div className="alimentacao-artigo">
            <img src="Alimentacao.svg" alt="Evento especial Nutrição" />

            <button>Como a sua alimentação afeta no desenvolvimento contra o câncer?</button>
            <p>por Nutricionista Mara Fernandez</p>
          </div>

          <div className="direitos-legais-artigo">
            <img src="DireitosLegais.svg" alt="Mantenha-se informado" />

            <button>Por que é tão importante manter-se informado? Direitos legais
              para pacientes oncológicos.</button>
            <p>por Porto, Severino e Cunha ADV</p>
          </div>

          <div className="psicologia-artigo">
            <img src="Meditation.svg" alt="Meditação" />

            <button>O psicologico é importante?
              Veja aqui!</button>
            <p>por Psicologa Vannessa Suarez</p>
          </div>

        </div>
        {/* Artigos do blog */}

      </div>
    </div>
  )
}

export default BlogInicio
