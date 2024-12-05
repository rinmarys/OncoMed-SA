import React from 'react'
import './DadosPessoaisAdmin.css'
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';

function DadosPessoaisAdmin() {
    return (
        <div>
            <div className="alinhamento-dadosPessoaisAdmin">
                <div className="alinhamento-titulo-hamburger-dadosPessoaisAdmin">
                    <div className="alinhamento-titulo-dadosPessoaisAdmin">
                        <h1>PERFIL ADMINISTRADOR</h1>
                        <div className="line-dadosPessoaisAdmin"></div>
                    </div>

                    <div className='hamburger-alinhamento-dadosPessoaisAdmin'>
                        <HamburgerMenuAdmin />
                    </div>
                </div>

                <div className="alinhamento-inputs-dadosPessoaisAdmin">
                    <div className="input-button-dadosPessoais">
                        <label>Nome</label>
                        <input type="text" />

                        <label>Email</label>
                        <input type="text" />

                        <label>Senha</label>
                        <input type="password" />

                        <button>EDITAR</button>
                    </div>

                    {/* <div className="alinhamento-imagem-conteudo-dadosPessoais">
                        <img src="DadosPessoaisAdmin-photo.svg" alt="Admin" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DadosPessoaisAdmin
