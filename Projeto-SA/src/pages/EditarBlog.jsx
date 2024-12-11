import { useState } from 'react';
import React from 'react'
import HamburgerMenu from '../components/HamburgerMenuAdmin'
import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';


function EditarBlog() {

    const {objeto_a_armazenar_informacoes_do_blog, set_objeto_a_armazenar_informacoes_do_blog} = useContext(GlobalContext);

    const [informacoes_do_blog, set_informacoes_do_blog] = useState({titulo: objeto_a_armazenar_informacoes_do_blog.titulo, autor: objeto_a_armazenar_informacoes_do_blog.autor, link: objeto_a_armazenar_informacoes_do_blog.descricao, imagem_selecionada: objeto_a_armazenar_informacoes_do_blog.imagem});   
 

    return (
    <div>
      
        <HamburgerMenu/>

        <div className="titulo_editar_blog">

            <h1>Editar Blog</h1>
            <div className='editar_blog_titulo_underline'></div>

        </div>

        <div>

            <select>Imagem

            <option value="">Imagem 1</option>
            <option value="">Imagem 2</option>
            <option value="">Imagem 3</option>
            <option value="">Imagem 4</option>
            </select>
        
            <img src={informacoes_do_blog.imagem_selecionada} className="Imagem_do_blog" alt="Imagema" />
        
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
