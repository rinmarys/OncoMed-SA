import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import './PoliticaPrivacidade.css';
import Footer from "../components/Footer";


function PoliticaPrivacidade() {
  const navigate = useNavigate('');  
  
  // Função que será chamada ao clicar no botão
  function outraPag() {
    navigate('/termosDeUso');  // Redireciona para a página de Termos de Uso
  }

  return (
    <div className='Nav-Bar'>
      <Header />

      <div className='Politica-Privacidade'>
        <h1>POLITICA DE PRIVACIDADE</h1>
        <div className='Linha-Dois'></div>
        <button className='button-Navigate' onClick={outraPag}>TERMOS DE USO</button>

        <div className='Texto-Um'> 
          <p>Na Clínica Médica OncoMed, respeitamos sua privacidade e estamos comprometidos
            em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos,
            usamos, armazenamos e protegemos seus dados quando você visita nosso site.</p>
        </div>

        <div className='Texto-Dois'>
          <h2 className="Title-ColetaInfo">1. Coleta de Informações</h2>
          <p>Coletamos informações pessoais de diversas maneiras, incluindo:</p>
          <p> Informações que você nos fornece: Ao agendar consultas, preencher 
            formulários ou entrar em contato conosco, podemos coletar seu nome, 
            endereço de e-mail, número de telefone e outras informações relevantes.
            Informações de navegação: Coletamos dados automaticamente sobre sua 
            visita ao nosso site, como seu endereço IP, tipo de navegador, páginas
             visitadas e o tempo gasto em cada página.</p>
        </div>

        <div className="Texto-Tres">
          <h2 className="Title-Info">2. Uso das Informações</h2>
          <p className="Text-Info">As informações coletadas são utilizadas para:</p>
          <p className="Text-Info1">° Agendar e confirmar consultas médicas.</p>
          <p className="Text-Info2">° Melhorar a experiência do usuário em nosso site.</p>
          <p className="Text-Info3">° Enviar comunicações sobre nossos serviços, promoções e novidades.</p>
          <p className="Text-Info4">° Garantir a segurança e a integridade de nossos serviços.</p>
        </div>

        <div className="Texto-Quatro">
          <h2 className="Title-UsoInfo">3. Compartilhamento de Informações</h2>
          <p className="Text-UsoInfo">Não vendemos, trocamos ou transferimos suas informações pessoais a terceiros, exceto nas seguintes situações:</p>
          <p className="Text-UsoInfo1">° Quando necessário para cumprir obrigações legais ou atender a solicitações judiciais.</p>
          <p className="Text-UsoInfo2">° Para prestadores de serviços que ajudam na operação do nosso site e negócios, desde que concordem em manter essas informações em sigilo.</p>
        </div>

        <div className="Texto-Cinco">
          <h2 className="Title-UsoInfo">4. Segurança das Informações</h2>
          <p className="Text-UsoInfo">Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado, uso indevido ou divulgação. No entanto, nenhum método de transmissão pela internet ou armazenamento eletrônico é 100% seguro. Portanto, embora nos esforcemos para proteger suas informações, não podemos garantir sua segurança absoluta.</p>
        </div>

        <div className="Texto-Seis">
          <h2 className="Title-UsoInfo">5. Seus Direitos</h2>
          <p className="Text-UsoInfo">Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Caso deseje exercer esses direitos, entre em contato conosco através dos canais fornecidos abaixo.</p>
        </div>

        <div className="Texto-Sete">
          <h2 className="Title-UsoInfo">6. Alterações nesta Política de Privacidade</h2>
          <p className="Text-UsoInfo">Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento. Recomendamos que você revise esta página periodicamente para estar ciente de quaisquer alterações.</p>
        </div>
      </div>

      {<Footer />}
    </div>
  );
}

export default PoliticaPrivacidade;