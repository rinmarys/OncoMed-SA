import Header from '../components/Header.jsx';
import './Home.css';
import Popup from '../components/Pop_up.jsx';
import { useEffect, useState, useContext } from 'react';
import Faq_a from '../components/Faq_a.jsx';
import Faq_b from '../components/Faq_b.jsx';
import Faq_c from '../components/Faq_c.jsx';
import Faq_d from '../components/Faq_d.jsx';
import Carrossel_Comentario from '../components/Carrossel_Comentario.jsx';
import Aritgo_Um_Home from '../components/Aritgo_Um_Home.jsx';
import Artigo_Dois_Home from '../components/Artigo_Dois_Home.jsx';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Pop_up_de_boas_vindas from '../components/Pop_up_de_boas_vindas.jsx';
import { GlobalContext } from '../contexts/GlobalContext.jsx';
import axios from 'axios';

function Home() {

  const {pop_aberto, set_pop_aberto} = useContext(GlobalContext);
  const navegacao_de_pagina = useNavigate(``);

  const [faq_a_aberto, set_faq_a_aberto] = useState(false);
  const [faq_b_aberto, set_faq_b_aberto] = useState(false);
  const [faq_c_aberto, set_faq_c_aberto] = useState(false);
  const [faq_d_aberto, set_faq_d_aberto] = useState(false);

  const [altura_faq_a, set_altura_faq_a] = useState(`8vh`);
  const [altura_faq_b, set_altura_faq_b] = useState(`8vh`);
  const [altura_faq_c, set_altura_faq_c] = useState(`8vh`);
  const [altura_faq_d, set_altura_faq_d] = useState(`8vh`);

  let faq_a_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
  let faq_b_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
  let faq_c_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
  let faq_d_botao = <img src='FAQ_feixado.png' className='faq_aberto'></img>;
    
  const {tempo_do_pop_up_de_boas_vindas, set_tempo_do_pop_up_de_boas_vindas} = useContext(GlobalContext);
  const {usuario_logado} = useContext(GlobalContext);

  function evento_faq_a(){

    
    set_faq_a_aberto(!faq_a_aberto);

    set_altura_faq_a(faq_a_aberto ? `8vh` : `26vh`);

    set_faq_b_aberto(false);
    set_altura_faq_b(`8vh`);

    set_faq_c_aberto(false);
    set_altura_faq_c(`8vh`);

    set_faq_d_aberto(false);
    set_altura_faq_d(`8vh`);
  };

  function evento_faq_b(){

    set_faq_b_aberto(!faq_b_aberto);
    set_altura_faq_b(faq_b_aberto ? `8vh` : `28vh`);

    set_faq_a_aberto(false);
    set_altura_faq_a(`8vh`);

    set_faq_c_aberto(false);
    set_altura_faq_c(`8vh`);

    set_faq_d_aberto(false);
    set_altura_faq_d(`8vh`);
  };

  function evento_faq_c(){

    set_faq_c_aberto(!faq_c_aberto);
    set_altura_faq_c(faq_c_aberto ? `8vh` : `28vh`);

    set_faq_b_aberto(false);
    set_altura_faq_b(`8vh`);

    set_faq_a_aberto(false);
    set_altura_faq_a(`8vh`);

    set_faq_d_aberto(false);
    set_altura_faq_d(`8vh`);
  };

  function evento_faq_d(){

    set_faq_d_aberto(!faq_d_aberto);
    set_altura_faq_d(faq_d_aberto ? `8vh`: `29vh`);

    set_faq_b_aberto(false);
    set_altura_faq_b(`8vh`);

    set_faq_c_aberto(false);
    set_altura_faq_c(`8vh`);

    set_faq_a_aberto(false);
    set_altura_faq_a(`8vh`);
  };

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

    useEffect(() => {

      console.log(usuario_logado);

      if(usuario_logado.length == 0){

        set_tempo_do_pop_up_de_boas_vindas(false);
        
      } else{

        setTimeout(() => {
          
          set_tempo_do_pop_up_de_boas_vindas(false);

        }, 3000);

      };

    }, []);    

    const notify = () => toast("Favor fazer o login!");

  return (

    <div>

      {tempo_do_pop_up_de_boas_vindas && <Pop_up_de_boas_vindas/>}

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
          <button className="carrossel_conteudo_entrar" onClick={() => navegacao_de_pagina(`/login`)}>ENTRAR</button>

          </div>

          </div>

        </div>    


        <div className="carrossel_container_imagem">

          <img src="Imagem_Carrossel.svg" alt="Imagem de Carrossel" />

        </div>

      
      </div>

      <div className="cta_comunidade_container">

        <div className="o_que_dizem_nossos_pacientes">

          <h2>O que dizem nossos pacientes?</h2>
         
          <div className="o_que_dizem_nossos_pacientes_underline"></div>

          {<Carrossel_Comentario/>}

        </div>

        <div className="container_comunidade">

          <div className="container_comunidade_imagem">
            
            <img src="Imagem_comunidade.svg" alt="Comunidade" />

          </div>

          <div className="container_comunidade_conteudo">

            <h3>Junte-se à nossa comunidade!</h3>
            
            <div className="container_comunidade_conteudo_underline_titulo"></div>

            <p>Conecte-se com outros pacientes e cuidadores para compartilhar expêriencias de apoio.</p>

            <Link className='hyperlink_de_comunidade_conteudo' target={`_blank`} to={`https://chat.whatsapp.com/Bmql2XCn7eI7Y4IpS2xecT`}>ACESSAR</Link>

          </div>

        </div>

      </div>

      <div className="container_artigos_recentes">

        <div className="container_artigos_recentes_alinhamento_titulo">

          <h2>Artigos Recentes</h2>
          <div className="container_artigos_recentes_underline"></div>

        </div>
        <div className="container_artigos_alinhamento">

          <Link to={`/conteudoBlog`} className='pop_up_artigo_um'>
          
            <Aritgo_Um_Home/>
          
          </Link>
          <div className="espacamento_dos_artigos"></div>

          <Link to={`/blog`} className='pop_up_artigo_dois'>
          
            <Artigo_Dois_Home/>
          
          </Link>

        </div>

      </div>

      <div className="container_estamos_aqui_para_ajudar">

        <div className="container_estamos_aqui_para_ajudar_titulo">

          <h2>Estamos aqui para ajudar!</h2>
          <div className="container_estamos_aqui_para_ajudar_titulo_underline"></div>

        </div>

        <div className="container_estamos_aqui_para_ajudar_alinhamento">

          <div className="container_estamos_aqui_para_ajudar_imagem">

            <img src="Estamos_Aqui_Para_Ajudar.svg" alt="Ajudar" />

          </div>

          <div className="container_estamos_aqui_para_ajudar_texto">

            <ul>

              <li>Envie suas dúvidas e comentários!</li>
              <li>Fale com nossos atendentes!</li>

            </ul>

            <p>Atendimento disponível de segunda a sexta, 24Hrs!</p>

          </div>

        </div>

      </div>

      <div className="container_faq">

        <div className="faq_titulo_alinhamento">
          
          <h2>Tem dúvidas?</h2>
          
          <div className="faixa_verde_titulo_faq"></div>

        </div>

        <div className="alinhamento_de_colunas_faq">

          <div className="container_faq_coluna_de_divs">

            <h3>Dúvidas Frequentes</h3>

            <div className="faq_a" style={{height: altura_faq_a}}>


            <div className="faq_a_alinhamento_de_titulo">
              
              <h4>Como funciona o tratamento de câncer?</h4>
              <button onClick={evento_faq_a} className='faq_a_botao'>{faq_a_botao}</button>
           
            </div>

            {faq_a_aberto && <Faq_a/>}

            </div>

            <div className="faq_b" style={{height: altura_faq_b}}>


              <div className="faq_b_alinhamento_de_titulo">
                
                <h4>Quais são os efeitos colaterais dos tratamentos?</h4>
                <button onClick={evento_faq_b} className='faq_b_botao'>{faq_b_botao}</button>
              
              </div>

              {faq_b_aberto && <Faq_b/>}

            </div>

            <div className="faq_c" style={{height: altura_faq_c}}>


              <div className="faq_c_alinhamento_de_titulo">
                
                <h4>Quais são os sinais de alerta de câncer?</h4>
                <button onClick={evento_faq_c} className='faq_c_botao'>{faq_c_botao}</button>
             
              </div>

              {faq_c_aberto && <Faq_c/>}

            </div>

            <div className="faq_d" style={{height: altura_faq_d}}>


              <div className="faq_d_alinhamento_de_titulo">
                
                <h4>Quais são os tipos mais comuns de câncer?</h4>
                <button onClick={evento_faq_d} className='faq_d_botao'>{faq_d_botao}</button>
             
              </div>

              {faq_d_aberto && <Faq_d/>}

            </div>

          </div>

          <div className="container_faq_cta">

            <div className="container_faq_cta_imagem">
              
              <img src="./faq_img.svg" alt="FAQ Images" />
           
            </div>

            <p>Continua com dúvidas?</p>

            <Link target='_blank' to={`https://chat.whatsapp.com/Bmql2XCn7eI7Y4IpS2xecT`}>CONTATE-NOS</Link>

          </div>

        </div>

      </div>

      {<Footer/>}

   </div>
  )
}

export default Home
