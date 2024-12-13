import { useState } from 'react';
import { useContext } from 'react';
import axios from 'axios';
import './Cadastro_Medico.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import emailjs from 'emailjs-com';
import InputMask from 'react-input-mask';

function Cadastro_Medico() {

  const formRef = useRef();

  const { lista_de_pacientes, set_lista_de_pacientes } = useContext(GlobalContext);
  const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);
  const [form, setForm] = useState({ nome: '', cpf: '', crm: '', email: '', genero: '', data_de_nascimento: '', senha: '', imagem_de_perfil: '', telefone: '' });
  const [confirmar_senha, set_confirmar_senha] = useState(``);

  const [valor_checkbox, set_valor_checkbox] = useState(``);

  const { pop_aberto, set_pop_aberto } = useContext(GlobalContext);

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
  let crm_ja_cadastrado = false;
  let senhas_sao_iguais = false;

  let checkbox_selecionado = false;

  const fetch_lista_de_medicos = async () => {

    try {

      const response = await axios.get('http://localhost:3000/medicos');

      set_lista_de_medicos(response.data);

    } catch (error) {

      console.error('Erro ao buscar medicos:', error);
    };
  };

  const fetch_lista_de_pacientes = async () => {

    try {

      const response = await axios.get('http://localhost:3000/pacientes');

      set_lista_de_pacientes(response.data);

    } catch (error) {

      console.error('Erro ao buscar pacientes:', error);
    };
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

    fetch_lista_de_medicos();
    fetch_lista_de_pacientes();

    if (pop_aberto) {

      set_pop_aberto(false);
    };
  }, []);


  useEffect(() => {
    console.log(lista_de_medicos);
  }, [lista_de_medicos]);

  useEffect(() => {
    emailjs.init('f7Um9X990n_XKlPyh');
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].email == form.email) {

        email_ja_cadastrado = true;
      };
    };

    for (let i = 0; i < lista_de_pacientes.length; i++) {

      if (lista_de_pacientes[i].email == form.email) {

        email_ja_cadastrado = true;
      };
    };



    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].cpf == form.cpf) {

        cpf_ja_cadastrado = true;
      };
    };

    for (let i = 0; i < lista_de_pacientes.length; i++) {

      if (lista_de_pacientes[i].cpf == form.cpf) {

        cpf_ja_cadastrado = true;
      };
    };



    for (let i = 0; i < lista_de_medicos.length; i++) {

      if (lista_de_medicos[i].crm == form.crm) {

        crm_ja_cadastrado = true;
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
      console.log(senhas_sao_iguais);
    };

    if (email_ja_cadastrado == false && cpf_ja_cadastrado == false && senhas_sao_iguais == true && checkbox_selecionado == true && crm_ja_cadastrado == false) {

      try {

        form.genero == `Feminino` ? form.imagem_de_perfil = `Imagem de Perfil Feminino (Medico).svg` : form.imagem_de_perfil = `Imagem de Perfil Masculino (Medico).svg`;

        const enviar_email = await  emailjs.sendForm('service_2di0djl', 'template_nt06uyy', formRef.current, 'f7Um9X990n_XKlPyh')
        console.log('Mensagem enviada', enviar_email.status, enviar_email.text);

        const response = await axios.post('http://localhost:3000/medicos', form);

        // console.log('Mensagem enviada', enviar_email.status, enviar_email.text);

        if (response.status === 201) {

          fetch_lista_de_medicos();

          setForm({ nome: '', cpf: '', crm: '', email: '', genero: '', data_de_nascimento: '', senha: '' });

          if (response.status === 201) {

            fetch_lista_de_medicos();

            setForm({ nome: '', cpf: '', crm: '', email: '', genero: '', data_de_nascimento: '', senha: '' });

            navegacao_de_pagina(`/login`)
          };

        }
      } catch (error) {

        console.error('Erro ao adicionar/atualizar medico:', error);
      };
    } else {

      switch (true) {

        case cpf_ja_cadastrado == true && email_ja_cadastrado == false && crm_ja_cadastrado == false:

          set_mensagem_de_erro(`CPF já cadastrado`);
          break;

        case cpf_ja_cadastrado == false && email_ja_cadastrado == true && crm_ja_cadastrado == false:

          set_mensagem_de_erro(`Email já cadastrado!`);
          break;

        case cpf_ja_cadastrado == false && email_ja_cadastrado == false && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`CRM já cadastrado!`);
          break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == true && crm_ja_cadastrado == false:

          set_mensagem_de_erro(`CPF e Email já cadastrados!`);
          break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == false && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`CPF e CRM já cadastrados!`);
          break;

        case cpf_ja_cadastrado == false && email_ja_cadastrado == true && crm_ja_cadastrado == true:

          set_mensagem_de_erro(`Email e CRM já cadastrados`);
          break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == true && crm_ja_cadastrado:

          set_mensagem_de_erro(`CPF, Email e CRM já cadastrados!`);
          break;

        case senhas_sao_iguais == false:

          set_mensagem_de_erro(`As senhas devem ser iguais!`);
          break;

        case checkbox_selecionado == false:

          set_mensagem_de_erro(`Favor Aceitar os Termos de Uso!`);
          break;
      };
    };
  };

  return (

    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className='dv_cadastro_medico'>

          <div className='container_img_medico'>

            <img src="Imagem_tres.svg" alt="Imagem de Acolhimento" className='imagem_cadastro' />

          </div>

          <div className='container_informacoes_medico'>

            <div className='titulo_medico'>

              <h2>CADASTRO - MÉDICO</h2>

              <Link to={'/'} className='container_informacoes_logo_paciente'><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo_paciente' /></Link>

              <div className="faixa_verde_medico"></div>

            </div>

            <div className='posicao_inputs_medico'>

              <div className='coluna_de_inputs_um_medico'>

                <div className='input_nome_medico'>

                  <label>Nome Completo</label>

                  <input type="text" name='nome' required placeholder='Digite seu nome' value={form.nome || ''} onChange={(e) => setForm({ ...form, nome: e.target.value })} />

                </div>

                <div className="input_cpf_medico">

                  <label>CPF</label>

                  <InputMask mask='999.999.999-99' name='cpf' placeholder='012.345.678-91' required value={form.cpf || ''} onChange={(e) => setForm({ ...form, cpf: e.target.value })} />

                </div>

                <div className="input_genero_medico">

                  <label className='titulo_label_inpt'>Gênero</label>

                  <div className='input_genero_medico_alinhar_radios'>

                    <div className='input_genero_medico_alinhar_radios_masculino'>

                      <input type="radio" required name='genero' value={'Masculino'} onChange={(e) => setForm({ ...form, genero: e.target.value })} />
                      <label className='input_genero_medico_alinhar_label'>Masculino</label>

                    </div>

                    <div className='input_genero_medico_alinhar_radios_feminino'>

                      <input type="radio" required name='genero' value={'Feminino'} onChange={(e) => setForm({ ...form, genero: e.target.value })} />
                      <label className='input_genero_medico_alinhar_label'>Feminino</label>

                    </div>

                  </div>

                </div>

                <div className="input_senha_medico">

                  <label>Senha</label>

                  <div className="input_senha_medico_dv">

                    <input type={valor_do_olinho_um} name='senha' required minLength={7} maxLength={12} placeholder='Digite sua senha' value={form.senha || ''} onChange={(e) => setForm({ ...form, senha: e.target.value })} />

                    <button type='button' onClick={() => set_estado_do_olinho_um(!estado_do_olinho_um)}>{imagem_olinho_um}</button>

                  </div>

                </div>

              </div>

              <div className="coluna_de_inputs_dois_medico">

                <div className="input_crm_medico">

                  <label>CRM</label>

                  <InputMask mask='CRM/aa 999999' name='crm' placeholder='CRM/SP 123456' required value={form.crm || ''} onChange={(e) => setForm({ ...form, crm: e.target.value })} />

                </div>

                <div className="input_email_medico">

                  <label>Email</label>

                  <input type="text" name='email' required placeholder='exemplo@gmail.com' value={form.email || ''} onChange={(e) => setForm({ ...form, email: e.target.value })} />

                </div>

                <div className="input_data_de_nascimento_medico">

                  <label>Data Nascimento</label>

                  <input type="date" name='data_nascimento' required placeholder='Data de nascimento' value={form.data_de_nascimento || ''} onChange={(e) => setForm({ ...form, data_de_nascimento: e.target.value })} />

                </div>

                <div className="input_confirmar_senha_medico">

                  <label>Confirmar Senha</label>

                  <div className="input_confirmar_senha_medico_dv">

                    <input type={valor_do_olinho} name='confirmar_senha' required minLength={7} maxLength={12} placeholder='Confirme sua senha' value={confirmar_senha} onChange={(e) => set_confirmar_senha(e.target.value)} />
                    <button type='button' onClick={() => set_estado_do_olinho(!estado_do_olinho)}>{imagem_olinho}</button>

                  </div>

                </div>

              </div>

            </div>

            <div className='caminho_para_termos_e_politica_medico'>

              <input type="checkbox" id='checkbox_cadastro_medico' value={valor_checkbox} onChange={(e) => set_valor_checkbox(e.target.checked)} />

              <label htmlFor='checkbox'> Leio e concordo com os <Link to={`/termosdeuso`} className='termos_de_uso_medico'>Termos de uso</Link> & <Link to={`/politicadeprivacidade`} className='politica_de_privacidade_medico'>Política de Privacidade</Link></label>

            </div>

            <div className='alinhamento_botao_cadastrar_medico'>

              <button className='botao_cadastrar_medico' type='submit'>CADASTRAR</button>

              <div className="error_medico">

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

export default Cadastro_Medico
