# <img src="https://github.com/nicholas-sc-08/Projeto-SA-2a-Modulo-SENAI/blob/main/Projeto-SA/public/Logo_Footer.svg" width='200px' height='100px'/>

<p>Seja bem vindo a este repositório!! OncoMed é uma plataforma digital que facilita o agendamento de consultas oncológicas e oferece acesso a informações educativas de qualidade, visando melhorar a experiência dos pacientes e profissionais de saúde no combate ao câncer.</p>

## 🚀 Características do projeto

<p>Lista de características destacadas no projeto:</p>

<ul>
  <li>Agendar e cancelar consultas.</li>
  <li>Blog educativo sobre tipos de câncer e tratamentos.</li>
  <li>Organização por meio do histórico de consultas e exames.</li>
  <li>Funcionalidades de administração.</li>
</ul>

## 🛠 Tecnologías utilizadas
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Postegree](https://img.shields.io/badge/postgresql-4169e1?style=for-the-badge&logo=postgresql&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=black)
![Figma](https://img.shields.io/badge/Figma-090909?style=for-the-badge&logo=figma&logoColor=white)


## 👑 Nossa Equipe 

<p>Aqui esta a nossa equipe, caso você queira acessar o GitHub de alguns dos membros deste projeto, pesquise os nomes no github que estão logo abaixo! 😋 </p>

<img src='https://github.com/nicholas-sc-08/Projeto-SA-2a-Modulo-SENAI/blob/main/Imagens_Readme/Equipe_SA.png'/>

## 💻 Desenvolvimento visual

<p>Usamos o figma para o design da interface e protótipos da aplicação.</p>
<a href='https://www.figma.com/design/VizoKBMnKxm9Z9LTnxk8gb/OncoMed-S.A?t=AahHoVgF3qlPIBWa-1'>Acesse o Figma </a>🎨

<br>
<br>

<p>Criamos Slides no Canva para melhor explicação do projeto em geral, nossos objetivos, público-alvo e a marca.</p>
<a href='https://www.canva.com/design/DAGYQwcE80E/F1Kz9ie8plXei4bH6ZJQZg/edit?utm_content=DAGYQwcE80E&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>Acesse os Slides</a>🖼

<br>
<br>

<p>Fizemos uma documentação técnica e guias de uso e requisitos do projeto.</p>
<a href='https://docs.google.com/document/d/1JCgDHtOrIPcDpeNMzDOljcKf5PUUvkDxb4L_-Jmbklg/edit?usp=sharing'>Acesse a documentação</a>📚

<br>
<br>

<p>E por ultimo, usamos o Trello para a gestão das tarefas e progresso do projeto.</p>
<a href='https://trello.com/invite/b/66c38d75f0383a9b4fff14a2/ATTI08d0886c91f67d0432ab87d2253e250cE512EBA3/projeto'>Acesse nosso Trello</a>🗂️

## <img src='http://media.giphy.com/media/MzX5hCfR5nP20/giphy.gif' width='25px' height='25px'/> Instalação do Projeto

<p>Indo para instalaçãoi do projeto, é bem simples! Primeiro o que você deve fazer, é escolher algum lugar no explorador de arquivos de seu computador para colocar o projeto em sua maquina! Então clique na barra aonde mostra o caminho dos arquivos, e digite "cmd" então pressione "Enter" para abrir o prompt de commando.</p>

<img src='https://github.com/user-attachments/assets/6b7c8a4a-0386-4aa4-9e01-2e54d330e622'/>

<p>Após abrir o prompt de commando com o caminho que você queira, selecionado, execute o seguinte commando:</p>

```git
  git clone https://github.com/nicholas-sc-08/Projeto-SA-2a-Modulo-SENAI.git
```

<p>Após clonar o projeto em seu computador, você ainda precisa instalar algumas dependências do NodeJS no projeto.</p>

<p>Abrindo o prompt de comando novamente porem, desta vez dentro da pasta "Projeto-SA" aonde localiza-se o projeto. Digite os seguintes comandos:</p>

```git
  npm i
```

```git
  npm i axios
```

```git
  npm i react-input-mask
```

```git
  npm i react-router-dom
```

```git
  npm i emailjs-com
```

```git
  npm i @fullcalendar/react
```

```git
  npm i @fullcalendar/daygrid
```

```git
  npm i @fullcalendar/timegrid
```

```git
  npm i @fullcalendar/interaction
```

<h4>Explicação:</h4>

<p>O "npm i", é para instalar as o node em seu projeto, assim podendo inicializar o servidor podendo abrir no navegador o projeto localmente. Já o axios é uma biblioteca cujo neste projeto tem como função de passar os dados do front para o backend. Caso queira acessar o axios deixarei o link abaixo:</p>

<a href='https://axios-http.com/ptbr/docs/intro'>Acesse o Axios</a>

<p>Então iremos para o "npm i react-input-mask" tendo como função de criar inputs que já possuem algunas caracteres já inseridos e também entre outras funcionalidades. Um belo exemplo é para inputs de CPF ou Telefone. O "npm i react-router-dom" serve para ter a interlocação do usuário entre outras páginas do projeto (Links Internos), ou até mesmo transferência de dados através do arquivo "GlobalContext.jsx". Indo para o "npm i emailjs-com", é uma biblioteca cujo possui sua funcionalidade de enviar um email para o ADM do site, com as informações dos cadastrantes seja paciente ou médico (no caso deste pojeto);</p>

<p>Caso queira acessar o Site do EmailJS acesse o link abaixo:</p>
<a href='https://www.emailjs.com/'>Acesse o EmailJS</a>
<br>

<p>Já os npm's "@fullcalendar" é uma biblioteca do react de um calendário, utilizado neste projeto para marcar alguma consulta e registrando a data escolhida para a marcação de consulta no banco de dados!</p>

<p>Após a instalação de toodas estas bibliotecas, vamos agora instalar as bibliotecas do backend, agora você abrira a pasta "back" no explorador de arquivos e abra o prompt de commando. Feito isso, digite os seguintes commandos:</p>

```git
  npm i 
```

```git
  npm i pg
```

```git
  npm i express
```

<p>E por fim a instalação das dependências do backend! O "npm i" para a instalação do NodeJS no backend, podendo rodar o servidor do back na porta 3000. "npm i pg" é uma biblioteca que permite você inserir comandos SQL no código. Então o "npm i express" é outra biblioteca, ela serve para você criar rotas do backend para o banco de dados, assim podenedo ocorrer a transferência de dados do back para o PostgreSQL.</p>

## <img src='https://github.com/nicholas-sc-08/Projeto-SA-2a-Modulo-SENAI/blob/main/Imagens_Readme/PostgreSQL_Logo.png' width='50px' height='50px'/> Configurando o Banco de Dados

<p>Indo para o banco de dados, crie um database com o nome que desejar. Nele você criará um script, inserindo os seguintes comandos:</p>

```sql
 CREATE TABLE pacientes(

 id_paciente SERIAL PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 cpf CHAR(14) UNIQUE NOT NULL,
 cep CHAR(9)  NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 data_de_nascimento DATE NOT NULL,
 genero VARCHAR(20) NOT NULL,
 senha VARCHAR(14) NOT NULL,
 imagem_de_perfil VARCHAR(5000) NOT NULL,
 telefone VARCHAR(20)
 );

 CREATE TABLE medicos(

 id_medico SERIAL PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 cpf CHAR(14) UNIQUE NOT NULL,
 crm CHAR(13) UNIQUE NOT NULL,
 email VARCHAR(100) UNIQUE NOT NULL,
 data_de_nascimento DATE NOT NULL,
 genero VARCHAR(20) NOT NULL,
 senha VARCHAR(14) NOT NULL,
 imagem_de_perfil VARCHAR(5000) NOT NULL,
 telefone VARCHAR(20)	
 );

CREATE TABLE marcarConsulta(

id_consulta SERIAL PRIMARY KEY,
data_agendamento DATE NOT NULL,
tipo_consulta VARCHAR(200) NOT NULL,
horario TIME NOT NULL,
observacoes VARCHAR(600) NOT NULL,
medico_designado VARCHAR(50),
	
id_paciente INT,
FOREIGN KEY (id_paciente) REFERENCES pacientes (id_paciente)
);

CREATE TABLE admin(

 id_admin SERIAL PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 email VARCHAR(50) NOT NULL,
 senha VARCHAR(20) NOT NULL
);

CREATE TABLE blog (

 id_blog SERIAL PRIMARY KEY,
 titulo VARCHAR(100) NOT NULL,
 descricao VARCHAR(300) NOT NULL,
 data_publicacao DATE NOT NULL,
 autor VARCHAR(100) NOT NULL,
 categoria VARCHAR (100) NOT NULL,
 id_admin INT,
 FOREIGN KEY (id_admin) REFERENCES admin(id_admin)
 );

INSERT INTO admin VALUES (001, 'Admin', 'admin@gmail.com','123')
```

<p>Feito isso, somente clique no botão de play para cirar suas respectivas tabelas!</p>

## <img src='https://github.com/nicholas-sc-08/Projeto-SA-2a-Modulo-SENAI/blob/main/Imagens_Readme/Gif_Node.gif' width='25px' height='25px'/> Configurando o BackEnd 

<p>Após você já ter configurado o banco de dados, vamos então para a configuração do back!</p>

<p>Abra o arquivo do backend, neste projeto ele está nomeado como "server.js", nele haverá este código escrito:</p>

```js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'template',
    password: 'postgres',
    port: 5432,
});
```

<p>Você deve mudar algumas coisinhas ali, no "user:", você deve colocar seu nome de usuário do postgreSQL, já no host, como falei anteriormente, já que vamos utilizar o localhost como hospedagem, então deixe o "host:" do jeito que está!</p>

<p>O "database:", você deve colocar o nome do database na qual você criou todas aquelas tabelas, o "password:", seria sua senha do postgreSQL, e por fim o "port:", nele você deve colocar a porta na qual o postgres está sendo rodado, por padrão estas informações como user, password e até mesmo port já vem por padrão no SQL, caso suas informações do postgreSQL são exatamente como estão no projeto, não será necessário a mudança dos valores!</p>

## <img src='https://github.com/nicholas-sc-08/Projeto-SA-2a-Modulo-SENAI/blob/main/Imagens_Readme/Gif_React.gif' width='25px' height='25px'/> Inicialização do Projeto

<p>A algumas maneiras de inicializar o projeto, porém vou lhe dizer como faço para rodar o projeto na minha máquina.</p>

<p>Utilizando o Visual Studio Code, já com a pasta do "Projeto-SA" aberta, abra o terminal utilizando o ( CTRL + ' ) , então digite o seguinte o commando</p>

```git
  npm run dev
```

<p>Então ele deve abrir um link do localhost, segure a tecla CTRL e então clique no link, ele abrirá no seu navegador.</p>

<p>Já para inicialização do backend, no explorador de arquivos abra o prompt de comando da mesma maneira que ensinei anteriormente, abrimdo o cmd na pasta "back", aonde se localiza o arquivo chamado "server.js". Feito isso digite o seguinte commando:</p>

```git
  npm start
```

<p>A seguinte mensagem deve estar aparecendo: "Servidor rodando na porta 3000"</p>

<p>Se tudo estiver configurado certo já está pronto! Divirta-se!!</p>

