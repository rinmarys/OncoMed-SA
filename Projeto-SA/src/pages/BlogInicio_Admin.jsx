import React from 'react'
import Footer from '../components/Footer'
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useEffect } from 'react'
import axios from 'axios'
import './BlogInicio_Admin.css'
import { useState } from 'react'

function BlogInicio_Admin() {

    const [mostrarPopDeletar, setMostrarPopDeletar] = useState(false)
    const {registroBlog, setRegistroBlog} = useContext (GlobalContext)


    function buttonDeletar() {

        setMostrarPopDeletar(true)

    }
    function naoDeletarBlog() {

        setMostrarPopDeletar(false)
    }
   

    let o;

//   for (let i = 0 ; i < registroBlog.length; i++){

//     if (registroBlog[i].id == informacoesBlog.id){
    
//         o = registroBlog[i].id;
//     }
//   }
    // FUNÇÃO PARA DELETAR BLOGS
    const deleteBlog = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/blog/${o}`);
            // const response = await axios.delete(`http://localhost:3000/blog/${id}`);
            if (response.status === 200) {
                fetchBlog(); // Atualiza a lista do blog após a exclusão
            }
        } catch (error) {
            console.error('Erro ao deletar Blog:', error);
        }
    };

    const fetchBlog = async ( ) => {


        try {
            const resposta = await axios.get ('http://localhost:3000/blog')
            setRegistroBlog (resposta.data)
        } catch (err) {
            console.error('Erro ao buscar tabela do blog ;(', err)
    
        }
    }
        useEffect( () => {
    
            fetchBlog()
            
        }, []) 



    return (
        <div>

            <div className="blog-alinhamento">

                <div className="alinhamento-hamburger">
                    <HamburgerMenuAdmin />
                </div>

                <div className="alinhamentoTudo-gerenciarPostagens">
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


                       



                    {/* POP UP NOVO BLOG */}
                   <div className="consultas-solicitacao">
    {registroBlog.length > 0 ? (
        registroBlog.map((informacoesBlog) => (
            <div className="container-artigos" key={informacoesBlog.id}>
                <img src={informacoesBlog.imagem}alt="Evento especial Nutrição"/>

                <div className='alinhamento-texto'>
                    <div className="button-container">
                        <button className='button-deletar' onClick={buttonDeletar}><img src="Trash.svg" alt="Deletar artigo" /></button>
                    </div>

                    <p className='titulos-artigos' value='valorTitulo'>{informacoesBlog.titulo}</p>
                    <p className='doutores-blog'>{informacoesBlog.autor}</p>
                </div>
            </div>
        ))
    ) : (
        // Não renderiza nada quando registroBlog estiver vazio
      null
    )}
</div>
                     

                      
                    </div>

                    {/* POP UP BLOG BUTTON DELETAR */}
                    {mostrarPopDeletar && (
                        <div className='Container-PopUpBlog'>
                            <h2 className='FontePopUpBlog'>Deseja mesmo deletar este arquivo?</h2>
                            <div className='ButtonsPopUpBlog'>
                                <button className='buttonNaoDeletar' onClick={naoDeletarBlog}>NÃO</button>
                                <button className='buttonDeletar' onClick={() =>deleteBlog (registroBlog.id)}>SIM</button>
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
