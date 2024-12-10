import { useContext } from 'react'
import Header from '../components/Header'
import './Convenio.css'
import { GlobalContext } from '../contexts/GlobalContext'
import Footer from '../components/Footer'


function Convenio() {
  return (
    <div className='tudo-convenios'>
      <Header />

      <div className='Titulo-Convenio-Container'>
        <h1 className="TituloConvenio">CONVÊNIOS E PROFISSIONAIS PARCEIROS</h1>
        <div className="linha-convenios-um"></div>
      </div>


      <div className="alinhamento-primeiraparte">
        <div className='Convenio-Container'>
          <div className='Paragrafo-Um'>
            <p>Na Clínica OncoMed, valorizamos uma abordagem integral no tratamento oncológico,
              oferecendo serviços complementares por meio de convênios com profissionais qualificados,
              que apoiam a saúde e o bem-estar dos nossos pacientes.</p>
          </div>
          <div className="fundo-verde-convenios">
            <img src="imagemUm.png" alt="" className='imagemUMconvenios' />
          </div>
        </div>
      </div>

      <div className="Container-Convenio-Completo">

        <h1 className='TituloConvenios-disponiveis'>CONVÊNIOS DISPONÍVEIS </h1>
        <div className="linha-convenios-dois"></div>
        <div className="alinhamento-convenios-umm">
          <img src="imagemmUm.png" alt="" className='imagemAna-Paula' />
          <div className='Convenio-Disponivel-Container'>
            <h2 className='Titulo-Azul'>Dra. Ana Paula Ferreira</h2>
            <h2 className='especialidade-convenios' >Especialidade: Nutrição</h2>
            <p className='Segundo-Paragrafo'>Nutricionista especializada em dietas saudáveis e acompanhamento nutricional.</p>
            <h2>Contato:</h2>
            <p className='Segunda-Frase-telefone'>Telefone: (11) 92345-6789</p>
            <p className='Segunda-Frase-email'>E-mail: ana.ferreira@clinicapartner.com</p>
          </div>
        </div>
      </div>

      <div className="alinhando-imagem-convenios">
        <div className='Container-Convenio-Completo-Segundo'>
          <div className='Primeira-Frase'>
            <h2 className='Titulo-Azul-dois'>Dr. Felipe Martins</h2>
            <h2 className='especialidade-convenios'  >Especialidade: Direito da Saúde</h2>
          </div>
          <p className='Segundo-Paragrafo'>Advogado especializado em questões relacionadas à saúde e direitos dos pacientes.</p>
          <h2>Contato:</h2>
          <p className='Segunda-Frase-telefone'>Telefone: (11) 95678-9012</p>
          <p className='Segunda-Frase-email'>E-mail: felipe.martins@clinicapartner.com </p>

        </div>

        <img src="imagemCinco.png" alt="" className='imagemCinco' />

      </div>

      <div className="alinhar-imagem-dois-convenios">

      <img src="imagemSeis.png" alt="" className='imagemSeis' />
      
        <div className='Container-Convenio-Completo-Terceiro'>
          <img src="imagemTres.png" alt="" className='imagemSete' />
          <div className='Convenio-Disponivel-Container-Terceiro'>
            <div className='Primeira-Frase'>
              <h2 className='Titulo-Azul-tres'>Centro de Diagnósticos Saúde Plena</h2>
              <h2 className='servicos-convenios' >Serviços: Exames de rotina e diagnósticos.</h2>
            </div>
            <div className='Segunda-Frase'>
              <h2>Contato:</h2>
              <p className='Segunda-Frase-telefone'>Telefone: (11) 6666-7777</p>
              <p className='Segunda-Frase-email'>E-mail: contato@saudeplena.com</p>
              <p className='Segunda-Frase-site'>Site:  www.saudeplena.com</p>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default Convenio;