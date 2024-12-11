import React, { useState, useContext, useEffect } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'

import './BlogInicio_Paciente.css'

function BlogInicio() {

  const { registroBlog, setRegistroBlog } = useContext(GlobalContext)
  // const { blogRecente, setblogRecente } = useContext(GlobalContext);

  // const mudarPag = useNavigate(blogRecente.valorDescricao)
  
  // const handleRedirect = () => {
    
  // }

  const fetchBlog = async () => {
    try {
        const resposta = await axios.get('http://localhost:3000/blog')
        setRegistroBlog(resposta.data)
    } catch (err) {
        console.error('Erro ao buscar tabela do blog ;(', err)
    }
}

useEffect(() => {

    fetchBlog()
}, []
)
  return (
    <div>
      <Header />

      <div className="alinhamentoPostagens">

        {/* TITULO DO BLOG*/}
        <div className="titulo-blog">
          <h1>MANTENHA-SE INFORMADO</h1>
          <div className='LinhaBlog'></div>
        </div>
        

        {/* Artigos do blog */}
        <div className="artigos-alinhamento">

<div className="artigos-blog">

                                   <div className="container-artigos" >
                                    <Link to='/ConteudoBlog'>
                                        <img
                                            className="Img-ReviwBlogADM"
                                            src='Doctor.svg'
                                            alt="Evento especial Nutrição"
                                        /> 
                                        <div className='alinhamento-texto'>

                                            <div className='Descricao-ReviwBlogADM'>
                                                <p className='titulos-artigos'>Medicina alternativa ou medicina convencional? Junção dos dois.</p>
                                                <p className='doutores-blog'>por Doutor Mauricio Campos</p>
                                           
                                            </div>

                                        </div>
                                        </Link>
                                    </div>

                              {registroBlog.length > 0 ? (
                                registroBlog.map((informacoesBlog) => (
                                        <a href={informacoesBlog.descricao} target="_blank" rel="noopener noreferrer">
                                    <div className="container-artigos" key={informacoesBlog.id}>
                                        <img
                                            className="Img-ReviwBlogADM"
                                            src={informacoesBlog.imagem}
                                            alt="Evento especial Nutrição"
                                        /> 
                                        <div className='alinhamento-texto'>

                                            <div className='Descricao-ReviwBlogADM'>
                                                <p className='titulos-artigos'>{informacoesBlog.titulo}</p>
                                                <p className='doutores-blog'>{informacoesBlog.autor}</p>
                                           
                                            </div>

                                        </div>
                                    </div></a>
                                ))
                            ) : (
                               null
                            )}
</div>


       </div>
       

        <Footer />

      </div>
    </div>
  )
}

export default BlogInicio
