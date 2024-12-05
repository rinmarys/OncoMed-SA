import { useContext, useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Cadastro_Paciente.css'
import { GlobalContext } from '../contexts/GlobalContext';
import axios from 'axios';
import emailjs from 'emailjs-com';

function Cadastro_Paciente() {

  const formRef = useRef(); 

  const { lista_de_pacientes, set_lista_de_pacientes } = useContext(GlobalContext);
  const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);
  const [form, setForm] = useState({ nome: '', cpf: '', cep: '', email: '', genero: '', data_de_nascimento: '', senha: '', imagem_de_perfil: ''});
  const [confirmar_senha, set_confirmar_senha] = useState(``);

  const [valor_checkbox, set_valor_checkbox] = useState(``);

  const {pop_aberto, set_pop_aberto} = useContext(GlobalContext);

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


  const fetch_pacientes = async () => {

    try {

      const response = await axios.get('http://localhost:3000/pacientes');

      set_lista_de_pacientes(response.data);
    } catch (error) {

      console.error('Erro ao buscar pacientes:', error);
    };
  };

  const fetch_medicos = async () => {

    try {

      const response = await axios.get('http://localhost:3000/medicos');

      set_lista_de_medicos(response.data);

    } catch (error) {

      console.error('Erro ao buscar medicos:', error);
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

    fetch_pacientes();
    fetch_medicos();

    if(pop_aberto){

      set_pop_aberto(false);
    };
  }, []);

  useEffect(() => {
    
    emailjs.init('pMLofLFwNCAInJwVH');
  }, []);

  const handleSubmit = async (e) => {

    e.preventDefault();

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

        form.genero == `Feminino` ? form.imagem_de_perfil = `Imagem de Perfil Feminino (Paciente).svg` : form.imagem_de_perfil = `Imagem de Perfil Masculino (Paciente).svg`;

          const enviar_email = await  emailjs.sendForm('service_0eg4zpm', 'template_bmlda01', formRef.current, 'pMLofLFwNCAInJwVH')

          const response = await axios.post('http://localhost:3000/pacientes', form);

          console.log('Mensagem enviada', enviar_email.status, enviar_email.text);

          if (response.status === 201) {

            fetch_pacientes();
            navegacao_de_pagina(`/login`);

            formRef.current.reset();
          };

      } catch (error) {

        console.error('Erro ao adicionar/atualizar paciente:', error);
      };
    } else {

      switch(true){

        case cpf_ja_cadastrado == false && email_ja_cadastrado == true:

        set_mensagem_de_erro(`Email já cadastrado!`);
        break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == false:

        set_mensagem_de_erro(`CPF já cadastrado!`);
        break;

        case cpf_ja_cadastrado == true && email_ja_cadastrado == true:

        set_mensagem_de_erro(`CPF e Email já cadastrado!`);
        break;

        case senhas_sao_iguais == false:

        set_mensagem_de_erro(`As senhas devem ser iguais!`);
        break;

        case checkbox_selecionado == false:

        set_mensagem_de_erro(`Favor aceitar os termos de uso!`);
        break;
      };
    };

  };
  return (
    <div>
      <form onSubmit={handleSubmit} ref={formRef}>
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
                  <input type="text" name='nome' required placeholder='Digite seu nome' value={form.nome || ''} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
                
                </div>

                <div className="input_cpf_paciente">
                
                  <label>CPF</label>
                  <input type="text" name='cpf' required minLength={14} maxLength={14} placeholder='012.234.567-89' value={form.cpf || ''} onChange={(e) => setForm({ ...form, cpf: e.target.value })} />
                
                </div>

                <div className="input_genero_paciente">
                  
                  <label className='titulo_label_inpt'>Gênero</label>
                  
                  <div className='input_genero_paciente_alinhar_radios'>
                    
                    <div className='input_genero_paciente_alinhar_radios_masculino'>
                    
                      <input type="radio" name='genero' value={'Masculino'} onChange={(e) => setForm({ ...form, genero: e.target.value })} />
                      <label className='input_genero_paciente_alinhar_label'>Masculino</label>
                    
                    </div>

                    <div className='input_genero_paciente_alinhar_radios_feminino'>
                    
                      <input type="radio" name='genero' value={'Feminino'} onChange={(e) => setForm({ ...form, genero: e.target.value })} />
                      <label className='input_genero_paciente_alinhar_label'>Feminino</label>
                    
                    </div>

                  </div>

                </div>


                <div className="input_senha_paciente">
                  
                  <label>Senha</label>

                  <div className="input_senha_paciente_dv">
                  
                    <input type={valor_do_olinho_um} name='senha' required minLength={7} maxLength={12} placeholder='Digite sua senha' value={form.senha || ''} onChange={(e) => setForm({ ...form, senha: e.target.value })} />
                    <button type='button' onClick={() => set_estado_do_olinho_um(!estado_do_olinho_um)}>{imagem_olinho_um}</button>
                  
                  </div>

                </div>

              </div>

              <div className="coluna_de_inputs_dois_paciente">

                <div className="input_cep_paciente">
                
                  <label>CEP</label>
                  <input type="text" name='cep' minLength={9} maxLength={9} required placeholder='12345-678' value={form.cep || ''} onChange={(e) => setForm({ ...form, cep: e.target.value })} />
                
                </div>

                <div className="input_email_paciente">
                
                  <label>Email</label>
                  <input type="email" name='email' required placeholder='exemplo@gmail.com' re value={form.email || ''} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                
                </div>

                <div className="input_data_de_nascimento_paciente">
                
                  <label>Data Nascimento</label>
                  <input type="date" name='data_de_nascimento' required placeholder='Data de nascimento' value={form.data_de_nascimento || ''} onChange={(e) => setForm({ ...form, data_de_nascimento: e.target.value })} />
                
                </div>

                <div className="input_confirmar_senha_paciente">
                
                  <label>Confirmar Senha</label>

                  <div className="input_confirmar_senha_paciente_dv">
                
                    <input type={valor_do_olinho} name='confirmar_senha' required minLength={7} maxLength={12} placeholder='Confirme sua senha' value={confirmar_senha} onChange={(e) => set_confirmar_senha(e.target.value)} />
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