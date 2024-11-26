import React from 'react'
import './EspacoControle_Admin.css'
import { Link } from 'react-router-dom'


function EspacoControle_Admin() {

    return (
        <div className='alinhamento-espacoControle'>
            <div className="titulo-espacoControle">
                <h2>Bem-vindo</h2>
                <h3>ao espaço de controle</h3>
            </div>

            <div className="alinhamento-containers-espacoControle">
            <div className="container-um-espacoControle">
                
                    <div className="style-container-espacoControle">
                        <div className="alinhamento-conteudo-espacoControle">

                        <img className='dadosPessoas-img' src="usuario-controle.svg" alt="Dados pessoais de administrador" /> 

                            <img className='img-espacoControle' src="usuario-controle.svg" alt="Dados pessoais de administrador" />

                            <h3>Dados pessoais</h3>
                        </div>
                    </div>
                   
                    <Link to='/blogInicioAdmin'>
                    <div className="style-container-espacoControle">
                        <div className="alinhamento-conteudo-espacoControle">
                            <img className='img-espacoControle' src="blog-controle.svg" alt="Gerenciar blog" />
                            <h3>Gerenciar blog</h3>
                        </div>
                    </div>
                    </Link>
                </div>


                <div className="container-dois-espacoControle">
                    <div className="style-container-espacoControle">
                        <Link to='/solicitacaoconsulta' className='link'>
                            <div className="alinhamento-conteudo-espacoControle">
                                <img className='img-espacoControle' src="solicitacao-controle.svg" alt="Solicitação de consulta" />
                                <h3>Solicitações</h3>
                            </div>
                        </Link>
                    </div>


                    <div className="style-container-espacoControle">
                        <div className="alinhamento-conteudo-espacoControle">
                            <img className='img-espacoControle' src="medico-controle.svg" alt="Medicos cadastrados" />
                            <h3>Médicos</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EspacoControle_Admin
