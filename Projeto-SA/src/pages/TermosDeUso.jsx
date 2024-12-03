import Header from "../components/Header"
import React from 'react'
import Footer from "../components/Footer"
import './TermosDeUso.css'
import { Link } from "react-router-dom"

function TermosUso() {
   return (
      <div className='Nav-Bar'>
      <Header />

      <div className='Politica-Privacidade'>
        <h1>TERMOS DE USO</h1>
        <div className='Linha-Dois'></div>
        <Link className='link-termosUso' to='/politicaPrivacidade'>POLÍTICA E PRIVACIDADE</Link>

        <div className='Texto-Um'>
          <p>Bem-vindo ao site da Clínica Médica OncoMed. Ao acessar e utilizar nosso site,
            você concorda com os seguintes termos e condições. Se não concordar com estes termos,
            por favor, não utilize nosso site.</p>
        </div>

        <div className='Texto-Dois'>
          <h2 className="Title-ColetaInfo">1. Aceitação dos Termos</h2>
          <p>Ao acessar nosso site, você declara que tem pelo menos 18 anos de idade
             ou que está utilizando o site sob a supervisão de um responsável legal.
             Você concorda em cumprir todos os termos e condições aqui descritos.</p>
        </div>

        <div className="Texto-Tres">
          <h2 className="Title-Info">2. Uso do Site</h2>
          <p className="Text-Info">O conteúdo deste site é destinado a informações gerais
           sobre os serviços oferecidos pela Clínica Médica OncoMed. Você se compromete 
           a utilizar o site apenas para fins legais e de acordo com todas as leis aplicáveis.</p>
        </div>

        <div className="Texto-Quatro">
          <h2 className="Title-UsoInfo">3. Propriedade Intelectual</h2>
          <p className="Text-UsoInfo">Todo o conteúdo deste site, incluindo textos, gráficos, 
          logotipos, ícones e imagens, é de propriedade da Clínica Médica OncoMed ou de seus 
          licenciadores e está protegido por leis de direitos autorais e propriedade intelectual. 
          É proibida a reprodução, distribuição ou modificação do conteúdo sem autorização prévia por escrito.</p>
        </div>

        <div className="Texto-Cinco">
          <h2 className="Title-UsoInfo">4. Limitação de Responsabilidade</h2>
          <p className="Text-UsoInfo">A Clínica Médica OncoMed não se responsabiliza por qualquer dano direto ou 
          indireto resultante do uso do site, incluindo, mas não se limitando a, erros, omissões ou interrupções nos serviços.</p>
        </div>

        <div className="Texto-Seis">
          <h2 className="Title-UsoInfo">5. Links Externos</h2>
          <p className="Text-UsoInfo">Este site pode conter links para sites de terceiros.
           Esses links são fornecidos apenas para sua conveniência. A Clínica Médica OncoMed 
           não se responsabiliza pelo conteúdo ou pela precisão de sites de terceiros.</p>
        </div>

        <div className="Texto-Sete">
          <h2 className="Title-UsoInfo">6. Agendamento de Consultas</h2>
          <p className="Text-UsoInfo">Os agendamentos de consultas feitos através do site estão
           sujeitos à disponibilidade. A Clínica Médica OncoMed reserva-se o direito de alterar 
           ou cancelar consultas, comunicando o usuário previamente.</p>
        </div>
      </div>

      {<Footer />}
    </div>
   )
}

export default TermosUso