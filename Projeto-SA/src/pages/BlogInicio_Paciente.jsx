import React, { useState, useContext, useEffect } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom';

function BlogInicio() {

  const { registroBlog, setRegistroBlog } = useContext(GlobalContext)
  const { blogRecente, setblogRecente } = useContext(GlobalContext);

  const mudarPag = useNavigate(blogRecente.valorDescricao)
  
  const handleRedirect = () => {
    
  }

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
}, [])
  return (
    <div>
      <Header />

      <div className="blog-alinhamento">

        {/* Titulo */}
        <div className="titulo">
          <h1>MANTENHA-SE INFORMADO</h1>
          <div></div>
        </div>
        {/* Titulo */}

        {/* Artigos do blog */}
        <div className="artigos-alinhamento">

<div className="consultas-solicitacao">
    {registroBlog.length > 0 ? (
        registroBlog.map((informacoesBlog) => (
          <Link to={informacoesBlog.valorDescricao} target="_blank"> <div className="container-artigos" key={informacoesBlog.id} >
           <img src={informacoesBlog.imagem} alt="Evento especial Nutrição" />
                <div className='alinhamento-texto'>
                    <p className='titulos-artigos'>{informacoesBlog.titulo}</p>
                    <p className='doutores-blog'>{informacoesBlog.autor}</p>
                </div>
            </div></Link>
        ))
    ) : (
        <p>Infelizmente ainda não há postagens! :(</p>
    )}
</div>


</div>
        {/* Artigos do blog */}

        <Footer />

      </div>
    </div>
  )
}

export default BlogInicio
