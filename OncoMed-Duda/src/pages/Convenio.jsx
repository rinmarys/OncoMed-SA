import React from 'react'
import "/Maria/Repos/OncoMed-SA/OncoMed-Duda/src/components/Convenio.css"
import Navbar from "../components/Navbar"

function Convenio() {
  return (
    <div className='Nav-Bar'>
    <Navbar />

    <div className='Titulo-Convenio-Container'>
    <h1 class="TituloConvenio">CONVÊNIOS E PROFISSIONAIS PARCEIROS</h1>
    <div className='Linha'></div>
    </div>

    
       <div className='Convenio-Container'>
       <div className='Paragrafo-Um'>
         <p>Na Clínica OncoMed, valorizamos uma abordagem integral no tratamento oncológico,
           oferecendo serviços complementares por meio de convênios com profissionais qualificados,
           que apoiam a saúde e o bem-estar dos nossos pacientes. </p>
       </div>  

      <div className='ImagemVerde-Container'>
        <img src="RetanguloVerde.png" alt="" />
        
      </div>
        <img className='ImagemUm' src="imagemUm.png" alt="" />
      </div>
    
           <div className='Titulo-Convenio-Container'>
           <h1 class="TituloConvenio">CONVÊNIOS DISPONIVEIS</h1>
           <div className='Linha'></div>
           </div>

           <div className='ConveniosDisponiveis-Container'>
            <h1 class="NomeDoutor-h1">Dra. Ana Paula Ferreira</h1>
            <h1 class="EspecialidadeDoutor-h1">Especialidade: Nutrição</h1>

            <p class="MiniTexto-p">Nutricionista especializada em dietas
             saudáveis e acompanhamento nutricional.</p>

             <h1 class="EspecialidadeDoutor-h1">Contato:</h1>
             <div className='MiniTextoDois-p'>
             <p >Telefone: (11) 92345-6789
             E-mail: ana.ferreira@clinicapartner.com</p>
             </div>

             <img class="ImagemDois"src="RetanguloAzul.png" alt="" />
           </div>


    

  </div>
  )
}

export default Convenio
