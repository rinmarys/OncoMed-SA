import HamburgerMenuAdmin from '../components/HamburgerMenuAdmin';
import { useState, useEffect, useContext } from 'react';
import './CriarPostagem.css'
import axios from 'axios';
import { GlobalContext } from '../contexts/GlobalContext';

function CriarPostagem() {
    // Definindo os estados
    const [valorTitulo, setValorTitulo] = useState('');
    const [valorAutor, setValorAutor] = useState('');
    const [valorDescricao, setValorDescricao] = useState('');
    const [imagemSelecionada, setImagemSelecionada] = useState('');  // Estado para armazenar a imagem selecionada

    // Dados do blog
    const { registroBlog, setRegistroBlog } = useContext(GlobalContext);

    // Lista de imagens disponíveis (exemplo de URLs)
    const imagensDisponiveis = [
        { id: 1, nome: 'Imagem 1', caminho: 'breakfast 1.png' },
        { id: 2, nome: 'Imagem 2', caminho: 'Meditation.svg' },
        { id: 3, nome: 'Imagem 3', caminho: 'Alimentacao.svg' },
    ];

    // Função para buscar blogs do banco de dados
    const fetchBlog = async () => {
        try {
            const resposta = await axios.get('http://localhost:3000/blog');
            setRegistroBlog(resposta.data);
        } catch (err) {
            console.error('Erro ao buscar tabela do blog ;(', err);
        }
    }

    useEffect(() => {
        fetchBlog();
    }, []);

    // Função para enviar o blog
    const enviarBlog = async (event) => {
        event.preventDefault();
        const informacoesBlog = {
            titulo: valorTitulo,
            autor: valorAutor,
            descricao: valorDescricao,
            imagem: imagemSelecionada, // Adicionando a imagem selecionada ao objeto
        }

        try {
            const enviarInformacoes = await axios.post('http://localhost:3000/blog', informacoesBlog);
            if (enviarInformacoes.status === 201) {
                fetchBlog();
                setValorAutor('');
                setValorDescricao('');
                setValorTitulo('');
                setImagemSelecionada('');  // Resetando a imagem após o envio
            }
        } catch (err) {
            console.error('Erro ao adicionar o blog ;(', err);
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
                        <HamburgerMenuAdmin />
                    </div>

                    <div className="alinhamento-pagina">
                        <div className="alinhamento-container-um">
                            <div className="inserirImagem">
                                {/* SELECT ESCOLHER IMG*/}
                                <label htmlFor="imagem">Escolha uma imagem:</label>
                                <select
                                    id="imagem"
                                    value={imagemSelecionada}
                                    onChange={e => setImagemSelecionada(e.target.value)}
                                >
                                    <option value="">Selecione uma imagem</option>
                                    {imagensDisponiveis.map(imagem => (
                                        <option key={imagem.id} value={imagem.caminho}>
                                            {imagem.nome}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* MOSTRA IMG */}
                            {imagemSelecionada && (
                                <div className="imagem-selecionada">
                                    <h3>Imagem Selecionada:</h3>
                                    <img src={imagemSelecionada} alt="Imagem escolhida" className="imagem-preview" />
                                </div>
                            )}

                            <div className='Container-InputTitulo'>
                                {/* TÍTULO POST*/}
                                <h2 className="titles-titleTags">Titulo</h2>
                                <input
                                    value={valorTitulo}
                                    onChange={e => setValorTitulo(e.target.value)}
                                    type="text"
                                    className='input-titulo-artigo'

                                />
                            </div>
                            {/* AUTOR */}
                            <div className="alinhamento-container-tres">
                                <h2 className="titles-autorTags">Autor</h2>
                                <textarea value={valorAutor} onChange={e => setValorAutor(e.target.value)}  ></textarea>
                            </div>
                        </div>

                        {/* CONTEÚDO */}
                        <h2 className="titles-descricaoTags">Descricao</h2>
                        <textarea
                            value={valorDescricao}
                            onChange={e => setValorDescricao(e.target.value)}
                            name="textArea"
                            cols="30"
                            rows="17"
                            placeholder='Conteúdo do artigo'
                            className='input-descricao-artigo'></textarea>

                        <div className='Container-InputTitulo'>
                            {/* Título do post */}
                            <h2 className="titles-categoriaTags">Titulo</h2>
                            <input
                                value={valorTitulo}
                                onChange={e => setValorTitulo(e.target.value)}
                                type="text"
                                className='input-titulo-artigo'
                            />
                        </div>
                        {/* Conteúdo */}
                        <h2 className="titles-categoriaTags">Descricao</h2>
                        <textarea>
                            value={valorDescricao}
                            onChange={e => setValorDescricao(e.target.value)}
                            name="textArea"
                            cols="30"
                            rows="17"
                            placeholder='Conteúdo do artigo'
                            className='input-autor-artigo'
                        </textarea>

                        {/* BOTÕES */}
                        <div className="alinhamento-buttons">
                            <div className="buttons-container">
                                <button className='publicar-button' type='submit'>PUBLICAR</button>
                                <button className='cancelar-button'>CANCELAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CriarPostagem;