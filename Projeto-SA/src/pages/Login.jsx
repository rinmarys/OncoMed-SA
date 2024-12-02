import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css';
import Pop_up from "../components/Pop_up.jsx";
import { GlobalContext } from "../contexts/GlobalContext";
import axios from "axios";

function Login() {

  const [valor_inpt_nome, set_valor_inpt_nome] = useState('');
  const [valor_inpt_email, set_valor_inpt_email] = useState('');
  const [valor_inpt_senha, set_valor_inpt_senha] = useState('');
  const [pop_up_aberto, set_pop_aberto] = useState(false);
  const [mensagem_de_erro, set_mensagem_de_erro] = useState('');

  const { lista_de_pacientes, set_lista_de_pacientes } = useContext(GlobalContext);
  const { lista_de_medicos, set_lista_de_medicos } = useContext(GlobalContext);
  const { usuario_administrador, set_usuario_administrador } = useContext(GlobalContext);
  const { set_usuario_logado } = useContext(GlobalContext);
  const { set_tempo_do_pop_up_de_boas_vindas } = useContext(GlobalContext);

  const [imagem_olinho, set_imagem_olinho] = useState(<img src='input_olho_fechado.png' alt='Olinho' />);
  const [estado_do_olinho, set_estado_do_olinho] = useState(false);
  const [valor_do_olinho, set_valor_do_olinho] = useState('password');

  const navegacao_de_pagina = useNavigate();

  useEffect(() => {

    if (estado_do_olinho) {

      set_imagem_olinho(<img src='input_olho_aberto.png' alt='Olinho' />);

      set_valor_do_olinho('text');

    } else {

      set_imagem_olinho(<img src='input_olho_fechado.png' alt='Olinho' />);

      set_valor_do_olinho('password');

    };

  }, [estado_do_olinho]);

  const fetch_pacientes = async () => {

    try {

      const pegar_lista = await axios.get(`http://localhost:3000/pacientes`);
      set_lista_de_pacientes(pegar_lista.data);

    } catch (err) {

      console.error(`Erro ao buscar tabela`, err);
    };
  };

  const fetch_medicos = async () => {

    try {

      const pegar_lista = await axios.get(`http://localhost:3000/medicos`);
      set_lista_de_medicos(pegar_lista.data);

    } catch (err) {

      console.error(`Erro ao buscar médicos`, err);
    };
  };

  const fetch_admin = async () => {

    try {

      const pegar_tabela = await axios.get(`http://localhost:3000/admin`);
      set_usuario_administrador(pegar_tabela.data);

    } catch (err) {

      console.error(`Erro ao buscar o ADM`, err);
    };
  };

  useEffect(() => {

    set_tempo_do_pop_up_de_boas_vindas(true);

    fetch_pacientes();
    fetch_medicos();
    fetch_admin();

  }, []);

  class Fazer_login {

    constructor(nome_do_usuario, email_do_usuario, senha_do_usuario) {

      this.nome = nome_do_usuario,
        this.email = email_do_usuario,
        this.senha = senha_do_usuario

      if (usuario_administrador[0].nome == this.nome && usuario_administrador[0].email == this.email && usuario_administrador[0].senha) {

        set_usuario_logado({

          id_admin: usuario_administrador[0].id_admin,
          nome: this.nome,
          email: this.email,
          senha: this.senha
        });

        navegacao_de_pagina(`/espacoDeControleAdmin`);
      };

      for (let i = 0; i < lista_de_pacientes.length; i++) {

        if (lista_de_pacientes[i].nome == this.nome && lista_de_pacientes[i].email == this.email && lista_de_pacientes[i].senha == this.senha) {

          set_usuario_logado({

            id_paciente: lista_de_pacientes[i].id_paciente,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            cpf: lista_de_pacientes[i].cpf,
            cep: lista_de_pacientes[i].cep,
            genero: lista_de_pacientes[i].genero,
            data_de_nascimento: lista_de_pacientes[i].data_de_nascimento,
            imagem_de_perfil: lista_de_pacientes[i].imagem_de_perfil

          });

          navegacao_de_pagina(`/`);
        };
      };

      for (let i = 0; i < lista_de_medicos.length; i++) {

        if (lista_de_medicos[i].nome == this.nome && lista_de_medicos[i].email == this.email && lista_de_medicos[i].senha == this.senha) {

          set_usuario_logado({

            id_medico: lista_de_medicos[i].id_medico,
            nome: this.nome,
            email: this.email,
            senha: this.senha,
            cpf: lista_de_medicos[i].cpf,
            crm: lista_de_medicos[i].crm,
            genero: lista_de_medicos[i].genero,
            data_de_nascimento: lista_de_medicos[i].data_de_nascimento,
            imagem_de_perfil: lista_de_medicos[i].imagem_de_perfil

          });

          navegacao_de_pagina(`/`);
        };
      };

      set_mensagem_de_erro(`Usuário ou senha incorretos!`);
    };

  };
  return (
    <div className="dv_login">

      <div className="container_img_login">

        <img src="Imagem_tres.svg" alt="Imagem de Login" />

      </div>

      <div className="container_informacoes_login">

        {pop_up_aberto && <Pop_up />}

        <div className="titulo_login">

          <div>

            <h2>LOGIN</h2>

            <div className="faixa_verde_login"></div>

          </div>

          <Link to={`/`}><img src="Logo_SA.png" alt="Logo.png" className='imagem_logo' /></Link>

        </div>

        <div className="container_inputs_login">

          <div className="posicao_dos_inputs_login">

            <div className="input_nome_login">

              <label>Nome</label>

              <input type="text" placeholder="Insira seu nome aqui" value={valor_inpt_nome} onChange={(e) => set_valor_inpt_nome(e.target.value)} />

            </div>

            <div className="input_email_login">

              <label>Email</label>

              <input type="email" placeholder="Insira seu email aqui" value={valor_inpt_email} onChange={(e) => set_valor_inpt_email(e.target.value)} />

            </div>

            <div className="input_senha_login">

              <label>Senha</label>

              <div className="input_senha_login_dv">

                <input type={valor_do_olinho} minLength={7} maxLength={12} placeholder="Insira sua senha aqui" value={valor_inpt_senha} onChange={(e) => set_valor_inpt_senha(e.target.value)} />

                <button onClick={() => set_estado_do_olinho(!estado_do_olinho)}>{imagem_olinho}</button>

              </div>

            </div>

          </div>

        </div>

        <div className="dv_do_botao_login">

          <button className="botao_login" onClick={() => new Fazer_login(valor_inpt_nome, valor_inpt_email, valor_inpt_senha)}>LOGIN</button>

          <div className="dv_massege_error">

            {mensagem_de_erro}

          </div>

        </div>

        <div className="nao_possui_conta">
          <p>Não possui uma conta? <button className="nao_possui_conta_link" onClick={() => set_pop_aberto(true)}>Cadastre-se</button></p>
        </div>

      </div>
    </div>
  );
}

export default Login;