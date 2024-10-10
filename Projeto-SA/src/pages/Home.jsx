import Header from '../components/Header.jsx'
import './Home.css'

function Home() {
  return (

  
    <div>

    {/* NavBar */}

      <Header/>
      
      <div className='carrossel_container'>

        <div className='carrossel_container_conteudo'>
          
          <div className="carrossel_container_alinhamento_de_conteudo">

          <h2>Sua jornada no combate ao
          câncer começa aqui!</h2>

          <div className="carrossel_container_conteudo_faixa_verde"></div>

          <p>Marque consulta, acesse conteúdo, lembretes
          e notificações, visualize seu progresso. 
          Tudo em um só lugar!</p>

          <div className="carrossel_container_alinhamento_botoes">

          <button className="carrossel_conteudo_cadastrar" onClick={() => window.location.href=`/cadastropaciente`}>CADASTRE-SE</button>
          <button className="carrossel_conteudo_entrar" onClick={() => window.location.href=`/login`}>ENTRAR</button>

          </div>

          </div>

        </div>    

        <div className="carrossel_container_imagem">

          <img src="Imagem_Carrossel.svg" alt="Imagem de Carrossel" />

        </div>

      </div>

      <div className="container_cta_comunidade">

        <div className="o_que_dizem_nossos_clientes">

        </div>

        <div className="alinhamento_de_conteudo_cta">

          <div className="conteudo_cta_comunidade_imagem">

          <img src="Imagem_comunidade.svg" alt="Imagem da comunidade" />

          </div>

          <div className="conteudo_cta_comunidade">

            <h3>Junte-se à nossa comunidade!</h3>
            <div className="conteudo_cta_comunidade_faixa_verde"></div>

            <p>Conecte-se com outros pacientes e cuidadores para compartilhar experiências e apoio.</p>

            <div className="conteudo_cta_comunidade_botao_dv">
              <button className="conteudo_cta_comunidade_botao">ACESSAR</button>
            </div>

          </div>

        </div>

      </div>

   </div>
  )
}

export default Home
