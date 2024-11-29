import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';
import { useState } from 'react';
import './CriarPostagem.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';



function CriarPostagem() {

    // inserir imagem
    const [imagem, setImagem] = useState(null);

    const handleImageChange = (event) => {
        setImagem(event.target.files[0]); // Armazena o primeiro arquivo
    };
    // inserir imagem


    const [categoria, setCategoria] = useState('');

    const categorias = [
        'Saúde Mental',
        'Tratamentos Alternativos',
        'Tratamentos Convencionais',
        'Nutrição',
        'Direitos dos Pacientes',
        'Reabilitação e Recuperação',
        'Pesquisa e Inovação',
        'Atividades Físicas e Exercícios'
    ];

    

    const [artigo, setArtigo] = useState({titulo: '' });


//PARTE DO BLOG PEGAR TABELA NO BANCO DE DADOS
const {registroBlog, setRegistroBlog} = useContext (GlobalContext)

const [valorTitulo, setValorTitulo] = useState ('')
const [valorAutor, setValorAutor] = useState ('')
const [valorConteudo, setValorConteudo] = useState ('')

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
    conteudo: valorConteudo
}

//ATUALIZANDO NO BANCO DE DADOS
try {
    const enviarInformacoes = await axios.post ('http://localhost:3000/blog', informacoesBlog)
    if(enviarInformacoes.status == 201){

        fetchBlog()
        setValorAutor ('')
        setValorConteudo('')
        setValorTitulo('')
    }

} catch (err) {
    console.error('Erro ao adicionar o blog ;(', err)

}

}



    return (
        <div>
            <form onSubmit={enviarBlog}>
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
                        {/* Inserir imagem */}

                        <label htmlFor="file-upload" className="custom-file-upload">
                            Inserir imagem  <img src="External Link.svg" alt="Inserir imagem com link externo" />
                        </label>

                        <input
                            id='file-upload'
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className='input-inserirImagem'
                        />

                        {imagem && (
                            <div>
                                <h3 className='titles-inserirImagem'>Pré-visualização da Imagem:</h3>
                                <img
                                    src={URL.createObjectURL(imagem)}
                                    alt="Pré-visualização"
                                    style={{ maxWidth: '300px', maxHeight: '300px' }}
                                />
                            </div>
                        )}
                        {/* Inserir imagem */}
                    </div>

                    {/* titulo do post */}
                    <input value= {valorTitulo} onChange= {e => setValorTitulo (e.target.value)}  type="text" className='input-titulo-artigo' placeholder='Título do post' />
                   

                    {/* // Conteudo  */}
                    <textarea value= {valorConteudo} onChange= {e => setValorConteudo (e.target.value)} name="textArea" cols="30" rows="17" placeholder='Conteúdo do artigo' className='text-area'></textarea>
                    
                </div>

             

                   
                    {/* hashtags */}
                    <div className="alinhamento-container-tres">
                        <h2 className="titles-categoriaTags">Hashtags</h2>

                        <textarea  value= {valorAutor} onChange= {e => setValorAutor (e.target.value)} name="" ></textarea>
                    </div>
                    {/* hashtags */}

                </div>

                {/* botões */}
                <div className="alinhamento-buttons">
                    <div className="buttons-container">

                        <button className='publicar-button' type = 'submit' >PUBLICAR</button>

                        <button className='cancelar-button'>CANCELAR</button>
                    </div>
                </div>
                
         
            </form>
        </div>
    )
}

export default CriarPostagem
