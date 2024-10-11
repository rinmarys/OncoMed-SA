import Header from '../components/Header.jsx'
import './Home.css'
import Popup from '../components/Pop_up.jsx'
import { useState } from 'react'
import Faq_a from '../components/Faq_a.jsx'
import Faq_b from '../components/Faq_b.jsx'
import Faq_c from '../components/Faq_c.jsx'
import Faq_d from '../components/Faq_d.jsx'

function Home() {

  const [pop_aberto, set_pop_aberto] = useState(false);
  const [faq_a_aberto, set_faq_a_aberto] = useState(false);
  const [faq_b_aberto, set_faq_b_aberto] = useState(false);
  const [faq_c_aberto, set_faq_c_aberto] = useState(false);
  const [faq_d_aberto, set_faq_d_aberto] = useState(false);

  let faq_a_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
  let faq_b_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
  let faq_c_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
  let faq_d_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;

  if(faq_a_aberto == true){

    faq_a_botao = <img src='FAQ_aberto.png' className='faq_fechado'></img>;
  };

  if(faq_b_aberto == true){

    faq_b_botao = <img src='FAQ_aberto.png' className='faq_fechado'></img>;
  };

  if(faq_c_aberto == true){

    faq_c_botao = <img src='FAQ_aberto.png' className='faq_fechado'></img>;
  };

  if(faq_d_aberto == true){

    faq_d_botao = <img src='FAQ_aberto.png' className='faq_fechado'></img>;
  };

  return (

    

    <div>

    {/* NavBar */}

      <Header/>

          <div className="alinhamento_popup_na_home">
          {pop_aberto && <Popup/>}

          </div>
      
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

          <button className="carrossel_conteudo_cadastrar" onClick={() => set_pop_aberto(true)}>CADASTRE-SE</button>
          <button className="carrossel_conteudo_entrar" onClick={() => window.location.href=`/login`}>ENTRAR</button>

          </div>

          </div>


        </div>    


        <div className="carrossel_container_imagem">

          <img src="Imagem_Carrossel.svg" alt="Imagem de Carrossel" />

        </div>

      
      </div>

      <div className="cta_comunidade_container"></div>

      <div className="container_faq">

        <div className="faq_titulo_alinhamento">
          
          <h2>Tem dúvidas?</h2>
          
          <div className="faixa_verde_titulo_faq"></div>

        </div>

        <div className="alinhamento_de_colunas_faq">

          <div className="container_faq_coluna_de_divs">

            <h3>Dúvidas Frequentes</h3>

            <div className="faq_a">


            <div className="faq_a_alinhamento_de_titulo">
              <h4>Como funciona o tratamento de câncer?</h4>
              <button onClick={() => set_faq_a_aberto(true)} className='faq_a_botao'>{faq_a_botao}</button>
            </div>

            {faq_a_aberto && <Faq_a/>}

            </div>

            <div className="faq_b">


              <div className="faq_b_alinhamento_de_titulo">
                <h4>Quais são os efeitos colaterais dos tratamentos?</h4>
                <button onClick={() => set_faq_b_aberto(true)} className='faq_b_botao'>{faq_b_botao}</button>
              </div>

              {faq_b_aberto && <Faq_b/>}

            </div>

            <div className="faq_c">


              <div className="faq_c_alinhamento_de_titulo">
                <h4>Quais são os sinais de alerta de câncer?</h4>
                <button onClick={() => set_faq_c_aberto(true)} className='faq_c_botao'>{faq_c_botao}</button>
              </div>

              {faq_c_aberto && <Faq_c/>}

            </div>

            <div className="faq_d">


              <div className="faq_d_alinhamento_de_titulo">
                <h4>Quais são os tipos mais comuns de câncer?</h4>
                <button onClick={() => set_faq_d_aberto(true)} className='faq_d_botao'>{faq_d_botao}</button>
              </div>

              {faq_d_aberto && <Faq_d/>}

            </div>

          </div>

          <div className="container_faq_cta">

            <img src="./faq_img.svg" alt="FAQ Images" />

            <p>Continua com dúvidas?</p>

            <button>CONTATE-NOS</button>

          </div>

          </div>

      </div>


   </div>
  )
}

export default Home
