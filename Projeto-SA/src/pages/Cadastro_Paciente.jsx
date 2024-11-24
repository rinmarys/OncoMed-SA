import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Cadastro_Paciente.css'
import { GlobalContext } from '../contexts/GlobalContext';
import axios from 'axios';
function Cadastro_Paciente() {

  const { lista_de_pacientes, set_lista_de_pacientes } = useContext(GlobalContext);
  const { lista_de_medicos } = useContext(GlobalContext);
  const [form, setForm] = useState({ nome: '', cpf: '', cep: '', email: '', genero: '', data_de_nascimento: '', senha: ''});
  const [confirmar_senha, set_confirmar_senha] = useState(``);
  const [selectedCliente, setSelectedCliente] = useState(null); // Cliente selecionado para update

  const [valor_checkbox, set_valor_checkbox] = useState(``);

  const [imagem_olinho, set_imagem_olinho] = useState(<img src='input_olho_fechado.png' alt='Olinho' />);
  const [estado_do_olinho, set_estado_do_olinho] = useState(false);
  const [valor_do_olinho, set_valor_do_olinho] = useState(`password`);

  const [imagem_olinho_um, set_imagem_olinho_um] = useState(<img src='input_olho_fechado.png' alt='Olinho' />);
  const [estado_do_olinho_um, set_estado_do_olinho_um] = useState(false);
  const [valor_do_olinho_um, set_valor_do_olinho_um] = useState(`password`);

  const [mensagem_de_erro, set_mensagem_de_erro] = useState(``);

  const navegacao_de_pagina = useNavigate(`/`);

  let email_ja_cadastrado = false;
  let cpf_ja_cadastrado = false;
  let senhas_sao_iguais = false;

  let checkbox_selecionado = false;

  // Função para buscar todos os clientes
  const fetch_pacientes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/pacientes');
      set_lista_de_pacientes(response.data);
    } catch (error) {
      console.error('Erro ao buscar pacientes:', error);
    }
  };

  useEffect(() => {

    if (estado_do_olinho == true) {

      set_imagem_olinho(<img src='input_olho_aberto.png' alt='Olinho' />);
      set_valor_do_olinho(`text`);

    } else {

      set_imagem_olinho(<img src='input_olho_fechado.png' alt='Olinho' />);
      set_valor_do_olinho(`password`);
    };
  }, [estado_do_olinho]);

  useEffect(() => {

    if (estado_do_olinho_um == true) {

      set_imagem_olinho_um(<img src='input_olho_aberto.png' alt='Olinho' />);
      set_valor_do_olinho_um(`text`);

    } else {

      set_imagem_olinho_um(<img src='input_olho_fechado.png' alt='Olinho' />);
      set_valor_do_olinho_um(`password`);
    };
  }, [estado_do_olinho_um]);


  useEffect(() => {
    fetch_pacientes();
  }, []);


  useEffect(() => {
    console.log(lista_de_pacientes);
  }, [lista_de_pacientes]);

  // Função para lidar com o envio do formulário (adicionar ou atualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email ja existente4

    for (let i = 0; i < lista_de_pacientes.length; i++) {

      if (lista_de_pacientes[i].email == form.email) {

        email_ja_cadastrado = true;
      };
    };

    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].email == form.email) {

        email_ja_cadastrado = true;
      };
    };

    // CPF já existentee

    for (let i = 0; i < lista_de_pacientes.length; i++) {

      if (lista_de_pacientes[i].cpf == form.cpf) {

        cpf_ja_cadastrado = true;
      };
    };

    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].cpf == form.cpf) {

        cpf_ja_cadastrado = true;
      };
    };

    if (valor_checkbox) {

      checkbox_selecionado = true;

    } else {

      checkbox_selecionado = false;
    };

    if (form.senha == confirmar_senha) {

      senhas_sao_iguais = true;

    } else {

      senhas_sao_iguais = false;
    };

    if (email_ja_cadastrado == false && cpf_ja_cadastrado == false && senhas_sao_iguais == true && checkbox_selecionado == true) {

      try {
        if (selectedCliente) {
          // Atualizar pacientes existente (PUT)
          const response = await axios.put(`http://localhost:3000/pacientes/${selectedCliente.id}`, form);
          if (response.status === 200) {
            fetch_pacientes(); // Atualiza a lista de pacientes após a edição
            setForm({ nome: '', cpf: '', cep: '', email: '', genero: '', data_de_nascimento: '', senha: '' }); // Limpa o formulário
            setSelectedCliente(null); // Reseta o paciente selecionado
          };
        } else {
          // Adicionar novo cliente (POST)
          const response = await axios.post('http://localhost:3000/pacientes', form);
          if (response.status === 201) {
            fetch_pacientes(); // Atualiza a lista de pacientes após a adição
            setForm({ nome: '', cpf: '', cep: '', email: '', genero: '', data_de_nascimento: '', senha: '' }); // Limpa o formulário

            navegacao_de_pagina(`/login`)
          };
        };
      } catch (error) {
        console.error('Erro ao adicionar/atualizar paciente:', error);
      };
    } else {
      // Configura a mensagem de erro
      if (cpf_ja_cadastrado == true && email_ja_cadastrado == true) {
        set_mensagem_de_erro("CPF e Email já cadastrados!");
      } else if (email_ja_cadastrado == true) {
        set_mensagem_de_erro("Email já cadastrado!");
      } else if (cpf_ja_cadastrado == true) {
        set_mensagem_de_erro("CPF já cadastrado!");
      } else if (senhas_sao_iguais == true) {
        set_mensagem_de_erro("As senhas devem ser iguais!");
      } else if (!valor_checkbox) {
        set_mensagem_de_erro("Favor aceitar os Termos de Uso!");
      }
    }

  };

  // Função para buscar cliente por ID
  const fetchClienteById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/pacientes/${id}`);
      setSelectedCliente(response.data); // Seleciona o cliente para edição
      setForm(response.data); // Preenche o formulário com os dados do cliente
    } catch (error) {
      console.error('Erro ao buscar cliente por ID:', error);
    }
  };

  // Função para deletar cliente
  const delete_paciente = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/pacientes/${id}`);
      if (response.status === 200) {
        fetch_pacientes(); // Atualiza a lista de clientes após a exclusão
      }
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='dv_cadastro_paciente'>

          <div className='container_img_paciente'>

            <img src="Image_um.png" alt="Imagem de Acolhimento" className='imagem_cadastro' />

          </div>

          <div className='container_informacoes_paciente'>

            <div className='titulo_paciente'>

              <h2>CADASTRO - PACIENTE</h2>

              <Link to={'/'} className='container_informacoes_logo_paciente'><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo_paciente' /></Link>

              <div className="faixa_verde_paciente"></div>

            </div>

            <div className='posicao_inputs_paciente'>

              <div className='coluna_de_inputs_um_paciente'>

                <div className='input_nome_paciente'>

                  <label>Nome Completo</label>

                  <input type="text" placeholder='Digite seu nome' value={form.nome || ''} onChange={(e) => setForm({ ...form, nome: e.target.value })} />

                </div>

                <div className="input_cpf_paciente">

                  <label>CPF</label>

                  <input type="text" minLength={14} maxLength={14} placeholder='012.234.567-89' value={form.cpf || ''} onChange={(e) => setForm({ ...form, cpf: e.target.value })} />

                </div>

                <div className="input_genero_paciente">

                  <label>Gênero</label>

                  <input type="text" placeholder='Digite seu gênero' value={form.genero || ''} onChange={(e) => setForm({ ...form, genero: e.target.value })} />

                </div>

                <div className="input_senha_paciente">

                  <label>Senha</label>

                  <div className="input_senha_paciente_dv">

                    <input type={valor_do_olinho_um} minLength={7} maxLength={12} placeholder='Digite sua senha' value={form.senha || ''} onChange={(e) => setForm({ ...form, senha: e.target.value })} />

                    <button type='button' onClick={() => set_estado_do_olinho_um(!estado_do_olinho_um)}>{imagem_olinho_um}</button>

                  </div>

                </div>

              </div>

              <div className="coluna_de_inputs_dois_paciente">

                <div className="input_cep_paciente">

                  <label>CEP</label>

                  <input type="text" minLength={9} maxLength={9} placeholder='12345-678' value={form.cep || ''} onChange={(e) => setForm({ ...form, cep: e.target.value })} />

                </div>

                <div className="input_email_paciente">

                  <label>Email</label>

                  <input type="text" placeholder='exemplo@gmail.com' value={form.email || ''} onChange={(e) => setForm({ ...form, email: e.target.value })} />

                </div>

                <div className="input_data_de_nascimento_paciente">

                  <label>Data Nascimento</label>

                  <input type="date" placeholder='Data de nascimento' value={form.data_de_nascimento || ''} onChange={(e) => setForm({ ...form, data_de_nascimento: e.target.value })} />

                </div>

                <div className="input_confirmar_senha_paciente">

                  <label>Confirmar Senha</label>

                  <div className="input_confirmar_senha_paciente_dv">

                    <input type={valor_do_olinho} minLength={7} maxLength={12} placeholder='Confirme sua senha' value={confirmar_senha} onChange={(e) => set_confirmar_senha(e.target.value)} />
                    <button type='button' onClick={() => set_estado_do_olinho(!estado_do_olinho)}>{imagem_olinho}</button>

                  </div>

                </div>

              </div>

            </div>

            <div className='caminho_para_termos_e_politica_paciente'>

              <input type="checkbox" id='checkbox_cadastro_paciente' value={valor_checkbox} onChange={(e) => set_valor_checkbox(e.target.checked)} />

              <label htmlFor='checkbox'> Leio e concordo com os <Link to={`/termosdeuso`} className='termos_de_uso_paciente'>Termos de uso</Link> & <Link to={`/politicadeprivacidade`} className='politica_de_privacidade_paciente'>Política de Privacidade</Link></label>

            </div>

            <div className='alinhamento_botao_cadastrar_paciente'>

              <button className='botao_cadastrar_paciente' type='submit'>CADASTRAR</button>

              <div className="error_paciente">

                {mensagem_de_erro}

              </div>

            </div>

            <div className="possui_conta">

              <p>Já possui uma conta? <Link to={`/login`} className='possui_conta_link'>Log-In</Link></p>

            </div>


          </div>

        </div>
      </form>
    </div>
  )
}


export default Cadastro_Paciente
