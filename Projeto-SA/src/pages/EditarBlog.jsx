import { useState } from 'react';
import React from 'react'
import HamburgerMenu from '../components/HamburgerMenuAdmin'
import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';


function EditarBlog() {


    const [informacoes_do_blog, set_informacoes_do_blog] = useState({titulo: '', autor: '', link: '', imagem_selecionada: ''});   
    // const { registroBlog, setRegistroBlog } = useContext(GlobalContext);

    // //PEGAR INFORMACOES DA TABELA BLOG
    // const fetchBlog = async () => {
    //     try {
    //         const resposta = await axios.get('http://localhost:3000/blog')
    //         setRegistroBlog(resposta.data)
    //     } catch (err) {
    //         console.error('Erro ao buscar tabela do blog ;(', err)
    //     }
    // }

    // //QUANDO CARREGAR A PAG FAZ A FUNÇÃO
    // useEffect(() => {
    //     fetchBlog()
    // }, [])

    // const deleteBlog = async (id) => {
    //     try {
    //         const response = await axios.delete(`http://localhost:3000/blog/${id}`);
    //         if (response.status === 200) {
    //             fetchBlog(); // Atualiza a lista do blog após a exclusão
    //             setMostrarPopDeletar(false);
    //         }
    //     } catch (error) {
    //         console.error('Erro ao deletar Blog:', error);
    //     }
    // };

    return (
    <div>
      
        <HamburgerMenu/>

        <div className="titulo_editar_blog">

            <h1>Editar Blog</h1>
            <div className='editar_blog_titulo_underline'></div>

        </div>

        <div>

        </div>

        <div>

        <label>Titulo</label>
        <input type="text" value={informacoes_do_blog.titulo} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, titulo: e.target.value})}/>

        <label>Autor</label>
        <input type="text" value={informacoes_do_blog.autor} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, autor: e.target.value})}/>

        <label>Link</label>
        <input type="text" value={informacoes_do_blog.link} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, link: e.target.value})}/>
        </div>

    </div>
  )
}

export default EditarBlog
