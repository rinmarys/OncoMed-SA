import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import '/Maria/Repos/OncoMed-SA/Projeto-SA/src/components/Pop_upBlog.css'

import './BlogInicio_Admin.css'
import { useState } from 'react'

function BlogInicio_Admin() {

    const [mostrarPopDeletar, setMostrarPopDeletar] = useState(false)
   
    function buttonDeletar(){

        setMostrarPopDeletar(true)

    }
    function naoDeletarBlog(){
 
        setMostrarPopDeletar(false)
    }
    function deletarBlog(){
     
    }
    return (
        <div>
            
            <div className="blog-alinhamento">

                {/* Titulo */}
                <div className="titulo-admin">
                    <div>
                        <h1>GERENCIAR POSTAGENS DO BLOG</h1>
                        <div className='line-admin'></div>
                    </div>
                    <Link to='/criarPostagem' className='link-addNew'> <img src="Add New.svg" alt="Adicionar artigo" /> </Link>
                </div>

                {/* Titulo */}

                {/* Artigos do blog */}
                <div className="artigos-alinhamento">

                    
                        <div className="container-artigos">
                            <img src="Doctor.svg" alt="Doutor" />

                            <div className="alinhamento-texto">

                                <div className="button-container">
                                    <button className='button-deletar' onClick={buttonDeletar}><img src="Trash.svg" alt="Deletar artigo" /></button>
                                </div>

                                <div className='texto-artigo'>
                                    <p className='titulos-artigos'>Medicina alternativa ou medicina convencional? Junção dos dois.</p>
                                    <p className='doutores-blog'>por Doutor Mauricio Campos</p>
                                </div>

                            </div>
                        </div>
                    

                    <div className="container-artigos">
                        <img src="Alimentacao.svg" alt="Evento especial Nutrição" />

                        <div className='alinhamento-texto'>

                            <div className="button-container">
                                <button className='button-deletar' onClick={buttonDeletar}><img src="Trash.svg" alt="Deletar artigo" /></button>
                            </div>

                            <p className='titulos-artigos'>Como a sua alimentação afeta no desenvolvimento contra o câncer?</p>
                            <p className='doutores-blog'>por Nutricionista Mara Fernandez</p>
                        </div>
                    </div>

                    <div className="container-artigos">
                        <img src="DireitosLegais.svg" alt="Mantenha-se informado" />

                        <div className='alinhamento-texto'>

                            <div className="button-container">
                                <button className='button-deletar' onClick={buttonDeletar}><img src="Trash.svg" alt="Deletar artigo" /></button>
                            </div>

                            <p className='titulos-artigos'>Por que é tão importante manter-se informado? Direitos legais
                                para pacientes oncológicos.</p>
                            <p className='doutores-blog'>por Porto, Severino e Cunha ADV</p>
                        </div>
                    </div>

                    <div className="container-artigos">
                        <img src="Meditation.svg" alt="Meditação" />

                        <div className="alinhamento-texto">

                            <div className="button-container">
                                <button className='button-deletar' onClick={buttonDeletar}><img src="Trash.svg" alt="Deletar artigo" /></button>
                            </div>

                            <p className='titulos-artigos'>O psicologico é importante?
                                Veja aqui!</p>
                            <p className='doutores-blog'>por Psicologa Vannessa Suarez</p>
                        </div>
                    </div>

                  {/* POP UP BLOG BUTTON DELETAR */}
                    {mostrarPopDeletar && (
                        <div className='Container-PopUpBlog'>
                            <h2 className='FontePopUpBlog'>Deseja mesmo deletar este arquivo?</h2>
                            <div className='ButtonsPopUpBlog'>
                            <button className='buttonNaoDeletar'onClick={naoDeletarBlog}>NÃO</button>
                            <button className='buttonDeletar'onClick={deletarBlog}>SIM</button>
                            </div>
                        </div>
                    )}


                </div>
                {/* Artigos do blog */}

                <Footer />
            </div>
        </div>
    )
}

export default BlogInicio_Admin
