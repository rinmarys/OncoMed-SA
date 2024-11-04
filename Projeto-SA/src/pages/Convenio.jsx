import {useContext} from 'react'
import Header from '../components/Header'
import './Convenio.css'
import { GlobalContext } from '../contexts/GlobalContext'
import Footer from '../components/Footer'


function Convenio() {
  return (
    <div className='Nav-Bar'>
      <Header />

   
      <div className='Titulo-Convenio-Container'>
        <h1 className="TituloConvenio">CONVÊNIOS E PROFISSIONAIS PARCEIROS</h1>
        <div className='Linha'></div>
      </div>

      <div className='Convenio-Container'>
        <div className='Paragrafo-Um'>
          <p>Na Clínica OncoMed, valorizamos uma abordagem integral no tratamento oncológico,
            oferecendo serviços complementares por meio de convênios com profissionais qualificados,
            que apoiam a saúde e o bem-estar dos nossos pacientes.</p>
        </div>

       
          <img src="imagemQuatro.png" alt=""  className='imagemQuatro'/>
        
          <img className='ImagemDois' src="imagemDois.png" alt="" />
      </div>

  

          <div className='Container-Convenio-Completo'>

              <img src="imagemTres.png" alt="" className='imagemTres'/>
           
          <div className='Titulo-Convenio-Disponivel-Container'>
              <h1 className='TituloConvenio'>CONVÊNIOS DISPONÍVEIS </h1>
              <div className='Linha'></div>
          </div>
          
             <div className='Convenio-Disponivel-Container'>

              <div className='Primeira-Frase'>
                <h2 className='Titulo-Azul'>Dra. Ana Paula Ferreira</h2>
                <h2>Especialidade: Nutrição</h2>
              </div>

            <div className='Segundo-Paragrafo'>
              <p>Nutricionista especializada em dietas saudáveis e acompanhamento nutricional.</p>
            </div>

               <div className='Segunda-Frase'>
                  <h2>Contato:</h2>
                  <p>Telefone: (11) 92345-6789</p>
                  <p>E-mail: ana.ferreira@clinicapartner.com</p>
               </div>
 
             </div>
           <img src="imagemUm.png" alt="" className='imagemUm'/>
          </div>

                
               <div className='Container-Convenio-Completo-Segundo'>
           
              <div className='Convenio-Disponivel-Container-Segundo'>
 
               <div className='Primeira-Frase'>
                 <h2 className='Titulo-Azul'>Dr. Felipe Martins</h2>
                 <h2>Especialidade: Direito da Saúde</h2>
               </div>
 
               <div className='Segundo-Paragrafo'>
              <p>Advogado especializado em questões relacionadas à saúde e direitos dos pacientes.</p>
            </div>
 
                <div className='Segunda-Frase'>
                   <h2>Contato:</h2>
                   <p>Telefone: (11) 95678-9012</p>
                   <p>E-mail: felipe.martins@clinicapartner.com </p>
                   
                </div>
  
              </div>
               <img src="imagemCinco.png" alt="" className='imagemCinco'/>

              </div>


              <div className='Container-Convenio-Completo-Terceiro'>

              <img src="imagemTres.png" alt="" className='imagemSete'/>
           
         
              <div className='Convenio-Disponivel-Container-Terceiro'>
 
               <div className='Primeira-Frase'>
                 <h2 className='Titulo-Azul'>Centro de Diagnósticos Saúde Plena</h2>
                 <h2>Serviços: Exames de rotina e diagnósticos.</h2>
               </div>
 
 
                <div className='Segunda-Frase'>
                   <h2>Contato:</h2>
                   <p>Telefone: (11) 6666-7777</p>
                   <p>E-mail: contato@saudeplena.com</p>
                   <p>Site:  www.saudeplena.com</p>
                </div>
  
              </div>
            <img src="imagemSeis.png" alt="" className='imagemSeis'/>

              </div>
              <Footer />
    </div>
  )
}

export default Convenio;