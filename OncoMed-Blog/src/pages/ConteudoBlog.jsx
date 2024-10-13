import React from 'react'
import "./ConteudoBlog.css"
import Header from '../components/Header'
import Footer from '../components/Footer'

function ConteudoBlog() {
  return (
    <div className='container-alinhamento'>

      <Header />

      {/* /* Primeiro container - Titulos */}
      <div className="titulos">
        <div className="text">
          <h1>Medicina alternativa ou medicina convencional? Junção dos dois.</h1>
          <p className='publicado'>
            por Doutor Mauricio Campos
            <br /> <strong>Publicado em:</strong> 22/09/2024
          </p>

        </div>

        <img src="Doctor.svg" alt="Doctor e paciente" />

      </div>
      {/* /* Primeiro container - Titulos */}

      {/* Segundo container - Texto */}
      <div className="text">
        <p className='introdução'>   A medicina é um campo amplo, que inclui
          abordagens tradicionais e alternativas para o tratamento de doenças. Este artigo
          explora as diferenças entre medicina alternativa e convencional, além de discutir
          como a combinação dessas abordagens pode beneficiar pacientes em tratamento oncológico.  </p>

        <div className='container-um'>
          <h2>O que é Medicina Convencional?</h2>

          <p>A medicina convencional, também conhecida como alopática,
            é baseada em evidências científicas e inclui tratamentos como:</p>

          <div className="alinhamento">
            <ul><li>Quimioterapia</li>
              <li>Radioterapia</li>
              <li>Cirurgia</li></ul>

            <img src="Quimica.svg" alt="Cientista medico" />
          </div>

          <p>  Esses métodos têm como foco a
            erradicação do câncer e o alívio dos sintomas.
            É importante que os pacientes compreendam os
            benefícios e os efeitos colaterais associados a essas abordagens.</p>
        </div>

        <div className="container-dois">
          <h2>O que é Medicina Alternativa?</h2>

          <p>   A medicina alternativa envolve práticas que não são parte da medicina convencional, como:</p>

          <div className="alinhamento">
            <img src="Walk.svg" alt="Caminhada relaxante" />

            <ul>
              <li>Acupuntura</li>
              <li>Fitoterapia</li>
              <li>Terapias mente-corpo</li>
            </ul>
          </div>

          <p>   Essas práticas muitas vezes buscam tratar a pessoa como um todo, promovendo bem-estar físico e emocional. </p>
        </div>

        <div className="container-tres">
          <h2>A importância da integração, a junção da medicina alternativa e
            convencional pode proporcionar benefícios significativos:</h2>

          <p> <strong>Redução de Sintomas:</strong> Práticas alternativas podem ajudar a aliviar efeitos colaterais
            da quimioterapia, como náuseas e dor.

            <strong>Apoio Emocional:</strong> Terapias complementares podem melhorar a qualidade de vida,
            oferecendo suporte emocional e psicológico.

            <strong>Personalização do Tratamento:</strong> Cada paciente é único. A combinação de
            abordagens permite um tratamento mais adaptado às necessidades individuais.</p>

          <div className="alinhamento">
            <h2>Considerações Importantes</h2>

            <p> <strong>Comunicação:</strong> É fundamental que
              pacientes informem seus médicos sobre
              qualquer terapia alternativa que estejam
              considerando. Isso ajuda a evitar interações
              indesejadas entre tratamentos.</p>

            <img src="ConsideracoesImportantes.svg" alt="Considerações importantes" />
          </div>

          <p> <strong>Evidências Científicas:</strong> Escolha práticas alternativas com base em evidências.
            Procure profissionais qualificados e reconhecidos.</p>

          <p>A medicina não é uma abordagem única. A combinação de medicina alternativa e
            convencional pode oferecer uma abordagem holística ao tratamento do câncer,
            focando no corpo e na mente. Sempre consulte profissionais de saúde qualificados
            ao considerar novas terapias.</p>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default ConteudoBlog