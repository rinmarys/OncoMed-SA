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
    const { blogRecente, setblogRecente } = useContext(GlobalContext);

    // Lista de imagens disponíveis 
    const imagensDisponiveis = [
        { id: 1, nome: 'Imagem 1', caminho: 'breakfast 1.png' },
        { id: 2, nome: 'Imagem 2', caminho: 'Meditation.svg' },
        { id: 3, nome: 'Imagem 3', caminho: 'carinha 1.svg' },
        { id: 4, nome: 'imagem 4', caminho: 'Doctor.svg' },
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
                setblogRecente(informacoesBlog)
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
                                   <h2 className="Label-EscolhaIMG" htmlFor="imagem">Escolha uma imagem:</h2>
                                   <select
                                      className="Select-IMGLabel"
                                      id="imagem"
                                      value={imagemSelecionada}
                                      onChange={e => setImagemSelecionada(e.target.value)}
                                    >
                                        <option cvalue="">Selecione uma imagem</option>
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
                                    <h2 className='title-IMGSelect'>Imagem Selecionada:</h2>
                                    <img src={imagemSelecionada} alt="Imagem escolhida" className="imagem-preview" />
                                </div>
                            )}
                        </div>


                   <div className="alinhamento-container-dois">
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
                                <input
                                    value={valorAutor}
                                    onChange={e => setValorAutor(e.target.value)}
                                    className='inpt-textAutor'
                                />
                            </div>

                      
                            <div className='alinhamento-linkInpt'>
                                {/* CONTEÚDO */}
                                <h2 className="titles-descricaoTags">Link Externo</h2>
                                <input
                                    value={valorDescricao}
                                    onChange={e => setValorDescricao(e.target.value)}
                                    name="textArea"
                                    cols="30"
                                    rows="17"
                                    className='input-descricao-artigo'
                                    />
                            </div>
                        
                   </div>

                                {/* BOTÕES */}

                                <div className="buttons-container">
                                    <button className='publicar-button' type='submit'>PUBLICAR</button>
                                    <button className='cancelar-button'>CANCELAR</button>
                                </div>

                            
                       

                    </div>


                 </div> *
            </form>
        </div>
    );
}

export default CriarPostagem;