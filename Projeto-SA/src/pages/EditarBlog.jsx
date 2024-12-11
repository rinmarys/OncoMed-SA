import { useState } from 'react';
import React from 'react'
import HamburgerMenu from '../components/HamburgerMenuAdmin'
import { useEffect } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';
import axios  from 'axios';


function EditarBlog() {

    const {objeto_a_armazenar_informacoes_do_blog, set_objeto_a_armazenar_informacoes_do_blog} = useContext(GlobalContext);
    const {usuario_administrador, set_usuario_administrador} = useContext(GlobalContext);

    const [informacoes_do_blog, set_informacoes_do_blog] = useState({id: objeto_a_armazenar_informacoes_do_blog.id, titulo: objeto_a_armazenar_informacoes_do_blog.titulo, autor: objeto_a_armazenar_informacoes_do_blog.autor, descricao: objeto_a_armazenar_informacoes_do_blog.descricao, imagem: objeto_a_armazenar_informacoes_do_blog.imagem});   
 

    const evento_do_formulario = async (e) => {

        e.preventDefault();
        console.log(informacoes_do_blog);

        try {
            
            const resposta = await axios.put(`http://localhost:3000/blog/${informacoes_do_blog.id}`, informacoes_do_blog);

            console.log(`Enviado para o pg!`, resposta.data);
            if(resposta.status == 200){

                console.log(`Atualizado com sucesso!`);
            };
        
        } catch (erro) {
            
            console.error(`Erro ao atualizar o blog!`, erro);
        }

    };

    return (
    <div>
      
        <HamburgerMenu/>

        <div className="titulo_editar_blog">

            <h1>Editar Blog</h1>
            <div className='editar_blog_titulo_underline'></div>

        </div>

        <form onSubmit={evento_do_formulario}>
            <div>

            <select value={informacoes_do_blog.imagem} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, imagem: e.target.value})}>
                
            Imagem

            <option value="breakfast 1.png">Imagem 1</option>
            <option value="Meditation.svg">Imagem 2</option>
            <option value="carinha 1.svg">Imagem 3</option>
            <option value="Doctor.svg">Imagem 4</option>
            </select>
        
            <img src={informacoes_do_blog.imagem} className="Imagem_do_blog" alt="Imagema" />
        
        </div>

        <div>

        <label>Titulo</label>
        <input type="text" value={informacoes_do_blog.titulo} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, titulo: e.target.value})}/>

        <label>Autor</label>
        <input type="text" value={informacoes_do_blog.autor} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, autor: e.target.value})}/>

        <label>Link</label>
        <input type="text" value={informacoes_do_blog.descricao} onChange={e => set_informacoes_do_blog({...informacoes_do_blog, descricao: e.target.value})}/>
        
        </div>

        <div>

            <button type="submit">Editar</button>
            
        </div>

        </form>

    </div>
  )
}

export default EditarBlog
