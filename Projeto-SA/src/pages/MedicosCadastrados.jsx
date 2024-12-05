import './MedicosCadastrados.css'
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'

function MedicosCadastrados() {

  const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);
  const [opcoes_de_medicos, set_opcoes_de_medicos] = useState(``);
  const { usuario_logado } = useContext(GlobalContext)

  const fetch_medicos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/medicos`);
      set_lista_de_medicos(response.data)
    } catch (error) {
      console.error('Erro ao buscar médicos:', error);
    };
  };

  const adicionarMedico = async (novoMedico) => {
    try {
      const response = await axios.post('http://localhost:3000/medicos', novoMedico);
      set_lista_de_medicos((prevLista) => [...prevLista, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar médico:', error);
    }
  };
  


  console.log(usuario_logado);

  useEffect(() => {
    fetch_medicos()
  }, []);


  return (
    <div>

      <div className="alinhamento-hamburger-perfilMedico">
        {/* mudar isso dps */}
        <HamburgerMenuAdmin />
      </div>

      <h1 className='titulo-medicoscadastrados'>MÉDICOS CADASTRADOS</h1>
      <div className="faixaVerdeMedicosCadastrados"></div>

      <div className="alihamento-cards-medicosCadastrados">
        {lista_de_medicos.length > 0 ? (
          lista_de_medicos.map((medicos) => (

            <div className='ficha_do_medico'>
              <div className="alinhamento_nome-imagem-medicoscadastrados">
                <img src={medicos.imagem_de_perfil} alt="" className='foto-do-perfil-medico' />
                <div className="alinhamento-nome-email-medicoscadastrados">
                  <p className='nome_medico_cadastrado'>{medicos.nome}</p>
                  <p className='email_medico_cadastrado'>{medicos.email}</p>
                </div>
              </div>
              <p className='especialidade_medico_cadastrado'>CARDIOLOGIA</p>
              <div className="alinhamento-numero-crm-medicocadastrado">
                <p className='numero_medico_cadastrado'>+55 (48) 996992276</p>
                <div className="alinhamento-cmr-cpf-medicocadastrado">
                  <p className='crm_medico_cadastrado'>{medicos.crm}</p>
                  <p className='cpf_medico_cadastrado'>{medicos.cpf}</p>
                </div>
              </div>
            </div>


          ))
        ) : (
          <p className='semSolicitacoes-texto'>Sem medicos cadastrados.</p>
        )}

      </div>
      </div>
      )
}

      export default MedicosCadastrados
