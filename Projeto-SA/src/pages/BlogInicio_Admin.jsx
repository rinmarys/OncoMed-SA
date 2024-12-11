import React, { useState, useContext, useEffect } from 'react'
import Footer from '../components/Footer'
import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './BlogInicio_Admin.css'

function BlogInicio_Admin() {

    const [mostrarPopDeletar, setMostrarPopDeletar] = useState(false)
    const [blogIdParaDeletar, setBlogIdParaDeletar] = useState(null) // Para armazenar o ID do blog a ser deletado
    const { registroBlog, setRegistroBlog } = useContext(GlobalContext);
    const {objeto_a_armazenar_informacoes_do_blog, set_objeto_a_armazenar_informacoes_do_blog} = useContext(GlobalContext);

    function buttonDeletar(id) {
        setBlogIdParaDeletar(id); // Armazenando o ID do blog a ser deletado
        setMostrarPopDeletar(true);
    }

    function naoDeletarBlog() {
        setMostrarPopDeletar(false);
        setBlogIdParaDeletar(null); // Limpando o ID ao cancelar
    }

    // Função para deletar o blog
    const deleteBlog = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/blog/${id}`);
            if (response.status === 200) {
                fetchBlog(); // Atualiza a lista do blog após a exclusão
                setMostrarPopDeletar(false);
            }
        } catch (error) {
            console.error('Erro ao deletar Blog:', error);
        }
    };

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

    const navigate = useNavigate ('')
    
    const pegar_informacoes_do_blog = (blog) => {

        set_objeto_a_armazenar_informacoes_do_blog({

            id: blog.id,
            autor: blog.autor,
            imagem: blog.imagem,
            titulo: blog.titulo,
            descricao: blog.descricao
        });

        console.log(`Blog a editar`, objeto_a_armazenar_informacoes_do_blog);

        navigate(`/editarBlog`);

    };
    
    return (
        <div>
            <div className="blog-alinhamento">
                <div className="alinhamento-hamburger">
                    <HamburgerMenuAdmin />
                </div>

                <div className="alinhamentoTudo-gerenciarPostagens">
                    <div className="titulo-admin">
                        <div>
                            <h1>GERENCIAR POSTAGENS DO BLOG</h1>
                            <div className='line-admin'></div>
                        </div>
                        <Link to='/criarPostagem' className='link-addNew'> <img src="Add New.svg" alt="Adicionar artigo" /> </Link>
                    </div>

                    <div className="artigos-alinhamento">

                        <div className="consultas-solicitacao">
                            {registroBlog.length > 0 ? (
                                registroBlog.map((informacoesBlog) => (
                                    <div className="container-artigos" onClick={() => pegar_informacoes_do_blog(informacoesBlog)}  key={informacoesBlog.id}>
                                        
                                        <img
                                            className="Img-ReviwBlogADM"
                                            src={informacoesBlog.imagem}
                                            alt="Evento especial Nutrição"
                                            
                                        /> 
                                        <div className='alinhamento-texto'>

                                            <div className='Descricao-ReviwBlogADM'>
                                                <p className='titulos-artigos'>{informacoesBlog.titulo}</p>
                                                <p className='doutores-blog'>{informacoesBlog.autor}</p>
                                            <div className="button-container">
                                                <button className='button-deletar' onClick={() => buttonDeletar(informacoesBlog.id)}>
                                                    <img src="Trash.svg" alt="Deletar artigo" />
                                                </button>
                                            </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            ) : (
                               <p className='msg-NaoPostagem'>Ainda não à postagens! :( </p>
                            )}
                        </div>


                    </div>

                    {/* Pop-up de confirmação de exclusão */}
                    {mostrarPopDeletar && blogIdParaDeletar && (
                        <div className='Container-PopUpBlog'>
                            <h2 className='FontePopUpBlog'>Deseja mesmo deletar este arquivo?</h2>
                            <div className='ButtonsPopUpBlog'>
                                <button className='buttonNaoDeletar' onClick={naoDeletarBlog}>NÃO</button>
                                <button className='buttonDeletar' onClick={() => deleteBlog(blogIdParaDeletar)}>SIM</button>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default BlogInicio_Admin