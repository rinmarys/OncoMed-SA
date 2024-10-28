import HamburgerMenu from '../components/HamburgerMenu'
import { useState } from 'react';
import './CriarPostagem.css'


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

    const handleChange = (event) => {
        setCategoria(event.target.value); // Atualiza o estado com a categoria selecionada
    };

    return (
        <div>
            <div className="alinhamento-titulo-criarPostagem">
                <div className="titulo-criarPostagem">
                    <h1>CRIAR NOVA POSTAGEM</h1>
                    <div className='line'></div>
                </div>
                <HamburgerMenu />
            </div>

            <div className="alinhamento-pagina">

                {/* Inserir imagem */}
                <h2 className='titles-inserirImagem'>Inserir imagem</h2>
                <input
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
                            style={{ maxWidth: '150px', maxHeight: '150px' }}
                        />
                    </div>
                )}
                {/* Inserir imagem */}

                {/* titulo do post */}
                <input type="text"
                    className='input-titulo'
                    placeholder='Título do post' />
                {/* titulo do post */}

                {/* Conteudo */}
                <textarea name="textArea" id="" cols="30" rows="10" placeholder='Conteúdo do artigo'></textarea>
                {/* Conteudo */}

                <div className="alinhamento-categoriaTags">
                    <div className="alinhamento-container-um">
                        <h2 className='titles-categoriaTags'>Categoria</h2>

                        {/* select */}
                        <select value={categoria} onChange={handleChange}>
                            <option value="">Selecione uma categoria</option>
                            {categorias.map((cat, index) => (
                                <option key={index} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        {categoria && <p>Categoria selecionada: {categoria}</p>}
                        {/* select */}
                    </div>

                    {/* hashtags */}
                    <div className="alinhamento-container-dois">
                        <h2 className="titles-categoriaTags">Tags</h2>

                        <input type="text"
                            placeholder='Agregar hashtags ajudara no engajamento do seu post.
                        Exemplo de hashtags: #Alimentação, #Saúde, #Nutrição.' />
                    </div>
                    {/* hashtags */}

                    {/* botões */}
                    <button>SALVAR RASCUNHO</button>

                    <button>PUBLICAR</button>

                    <button>CANCELAR</button>
                    {/* botões */}
                </div>
            </div>

        </div>
    )
}

export default CriarPostagem
