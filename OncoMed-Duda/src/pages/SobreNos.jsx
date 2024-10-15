import React from 'react'
import "/Maria/Repos/OncoMed-SA/OncoMed-Duda/src/components/SobreNos.css"
import Navbar from "../components/Navbar"

function SobreNos() {
  return (

    <div className='NavBar'>
        <Navbar />
    <div className='Texto-Nos'>
      
       <h1>Nossa Equipe</h1>
       <div className='Linha-Dois'></div>
       <div className='Nossa-Equipe'>
        <img src="StarGirl.jpg" alt="" />
       </div>

      <div className='Sobre-Nos'>
         <h1>Sobre Nós</h1>
         <div className='Linha'></div>
         <p>O projeto propõe a criação de um aplicativo móvel que visa facilitar o agendamento de consultas
          e fornecer informações de qualidade para pacientes com câncer, abordando a necessidade de um 
          processo mais eficiente e d educação contínua sobre a doença.</p>
      </div>

      <div className='Missao'>
      <h1>Missão</h1>
         <div className='Linha-Dois'></div>
         <p>Nossa missão é garantir que todas as pessoas tenham acesso a informações claras,
            precisas e atualizadas sobre oncologia, empoderando-as na tomada de decisões sobre sua saúde.
            Comprometemo-nos a oferecer um atendimento humanizado e respeitoso, promovendo a educação em
            saúde e apoiando a prevenção e o tratamento do câncer com dedicação e excelência.</p>
      </div>

      <div className='Compromissos'>
      <h1>Compromissos</h1>
         <div className='Linha'></div>
         <p>Acessibilidade:
          Garantir que todos tenham acesso às informações e serviços oferecidos, promovendo uma navegação 
          intuitiva e facilitada em nosso site, além de disponibilizar recursos em diferentes formatos.</p>

            <div className="SegundoParagrafo">
            <p>Educação Continuada:
            Investir na formação contínua de nossa equipe, promovendo treinamentos e workshops que mantenham
             nossos profissionais atualizados sobre as melhores práticas e novidades na oncologia.</p>
            </div>

                <div className="SegundoParagrafo">
                <p>Ética e a Transparência:
                Manter uma postura ética em todas as nossas ações, com transparência em relação a tratamentos,
                custos e resultados, sempre priorizando o bem-estar dos pacientes.</p>
                </div>
                      
                     <div className="SegundoParagrafo">
                     <p>Comunidade:
                     Engajar-se com a comunidade local, participando de eventos e iniciativas que visem à promoção
                     da saúde e à conscientização sobre o câncer, contribuindo para um ambiente mais saudável para todos.</p>
                     </div>
      </div>

    </div>

    </div>

  )
}

export default SobreNos
