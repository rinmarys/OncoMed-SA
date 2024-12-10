import Header from "../components/Header"
import Footer from "../components/Footer"
import './SobreNos.css'

function SobreNos() {
  return (

    <div className='NavBar'>
        <Header />

       <div className='Container-SobreNos'>
      
       <h1 className="FonteNossaEquipe">NOSSA EQUIPE</h1>
       <div className='Linha-Dois'></div>

       <div className='Img-NossaEquipe'>
        <img src="fotoGrupo.jpg" height="700" width="1200" alt="" className="imagemGrupo" />
       </div>

            <div className="Paragrafo-Um">
              <h1 className="FonteSobreNos">SOBRE NÓS</h1>
              <div className="Linha"></div>
    
              <p className="Paragrafo-Um-Texto">O projeto propõe a criação de um aplicativo móvel que
              visa facilitar o agendamento de consultas e fornecer informações de qualidade para pacientes
              com câncer, abordando a necessidade de um processo mais eficiente e d educação contínua sobre a doença.</p>

              <img className="pessoasBalao" src="pessoasBalao.png" alt="" />
            </div>

                  <div className="Paragrafo-Dois">
                    <h1 className="FonteMissao">MISSÃO</h1>
                    <div className='Linha-Dois'></div>
                    
                    <p className="Paragrafo-Dois-Texto">Nossa missão é garantir que todas as pessoas tenham acesso
                    a informações claras, precisas e atualizadas sobre oncologia,
                    empoderando-as na tomada de decisões sobre sua saúde. Comprometemo-nos
                    a oferecer um atendimento humanizado e respeitoso, promovendo a educação
                    em saúde e apoiando a prevenção e o tratamento do câncer com dedicação e excelência.</p>

                  </div>

                       <div className="Paragrafo-Tres">
                       <h1 className="FonteCompromissos">COMPROMISSOS</h1>
                       <div className='Linha'></div>
                       </div>

                        <div className="Alinhamento-Containers">
                            <div className="Container-Acessibilidade">
                              <h2 className="FonteAcessibilidade">Acessibilidade</h2>
                              <p className="Paragrafo-Acessibilidade">
                              Garantir que todos tenham acesso às informações e serviços oferecidos,
                              promovendo uma navegação intuitiva e facilitada em nosso site, além de disponibilizar
                              recursos em diferentes formatos.</p>
                            </div>

                            <div className="Container-EducacaoContinuada">
                              <h2 className="FonteEducacaoContinuada">Educação Continuada</h2>
                              <p className="Paragrafo-EducacaoContinuada">
                               Investir na formação contínua de nossa equipe, promovendo treinamentos
                               e workshops que mantenham nossos profissionais atualizados sobre as
                               melhores práticas e novidades na oncologia. </p>
                            </div>
                        </div>

                        <div className="Alinhamento-ContainersDois">
                            <div className="Container-EticaTransparencia">
                              <h2 className="FonteEticaTransparencia">Ética e Transparência</h2>
                              <p className="Paragrafo-EticaTransparencia">
                               Manter uma postura ética em todas as nossas ações, com transparência
                               em relação a tratamentos, custos e resultados, sempre priorizando
                               o bem-estar dos pacientes.</p>
                            </div>

                            <div className="Container-Comunidade">
                              <h2 className="FonteComunidade">Comunidade</h2>
                              <p className="Paragrafo-Comunidade">
                              Engajar-se com a comunidade local, participando de eventos 
                              e iniciativas que visem à promoção da saúde e à conscientização sobre o câncer,
                             contribuindo para um ambiente mais saudável para todos.</p>
                            </div>


                        </div>

      </div>
      

    {<Footer />}
    </div>

  )
}

export default SobreNos

