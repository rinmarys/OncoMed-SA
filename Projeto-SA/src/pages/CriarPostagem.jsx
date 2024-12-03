import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';
import { useState } from 'react';
import './CriarPostagem.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';



function CriarPostagem() {

    



    const [artigo, setArtigo] = useState({titulo: '' });


//PARTE DO BLOG PEGAR TABELA NO BANCO DE DADOS
const {registroBlog, setRegistroBlog} = useContext (GlobalContext)

const [valorTitulo, setValorTitulo] = useState ('')
const [valorAutor, setValorAutor] = useState ('')
const [valorDescricao, setValorDescricao] = useState ('')

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

//COLOCAR O BLOG NO BANCO   
const enviarBlog = async (event) => {

event.preventDefault()
const informacoesBlog = {

    titulo: valorTitulo,
    autor: valorAutor,
    descricao: valorDescricao
}

//ATUALIZANDO NO BANCO DE DADOS
try {
    const enviarInformacoes = await axios.post ('http://localhost:3000/blog', informacoesBlog)
    if(enviarInformacoes.status == 201){

        fetchBlog()
        setValorAutor ('')
        setValorDescricao('')
        setValorTitulo('')
    }

} catch (err) {
    console.error('Erro ao adicionar o blog ;(', err)

}

}



    return (
        <div>
            <form onSubmit={enviarBlog}>
                <div className='Container-CriarArtigo'>
            <div className="alinhamento-titulo-criarPostagem">
                <div className="titulo-criarPostagem">
                    <h1>CRIAR NOVA POSTAGEM</h1>
                    <div className='line-criarPostagem'></div>
                </div>
                    <HamburgerMenuAdmin/>
            </div>

            <div className="alinhamento-pagina">

                <div className="alinhamento-container-um">
                    <div className="inserirImagem">
                 
               <input type="text" />

                 
                    </div>

                    {/* titulo do post */}
                    <input value= {valorTitulo} onChange= {e => setValorTitulo (e.target.value)}  type="text" className='input-titulo-artigo' placeholder='Título do post' />
                   

                    {/* // Conteudo  */}
                    <textarea value= {valorDescricao} onChange= {e => setValorDescricao (e.target.value)} name="textArea" cols="30" rows="17" placeholder='Conteúdo do artigo' className='input-autor-artigo'></textarea>
                    
                </div>

             

                   
                    {/* hashtags */}
                    <div className="alinhamento-container-tres">
                        <h2 className="titles-categoriaTags">Hashtags</h2>

                        <textarea  value= {valorAutor} onChange= {e => setValorAutor (e.target.value)} name="" ></textarea>
                    </div>
                    {/* hashtags */}
                <div className="alinhamento-buttons">
                    <div className="buttons-container">

                        <button className='publicar-button' type = 'submit' >PUBLICAR</button>

                        <button className='cancelar-button'>CANCELAR</button>
                    </div>
                </div>

                </div>

                {/* botões */}
                
                </div>
            </form>
        </div>
    )
}

export default CriarPostagem
