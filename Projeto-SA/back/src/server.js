const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres', // Substitua pelo seu usuário do PostgreSQL
    host: 'localhost',
    database: 'template', // Nome da sua database
    password: 'senai', // Substitua pela sua senha
    port: 5432, // Porta padrão do PostgreSQL
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

// Rota para buscar todos os clientes
app.get('/pacientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pacientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
});

// Rota para buscar um paciente por ID
app.get('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM pacientes WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar paciente' });
    }
});

// Rota para adicionar um paciente
app.post('/pacientes', async (req, res) => {
    const {  nome, cpf, cep, email,genero, data_de_nascimento, senha, minhas_consultas } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO pacientes (nome, cpf, cep, email,genero, data_de_nascimento, senha, minhas_consultas) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [nome, cpf, cep, email,genero, data_de_nascimento, senha, minhas_consultas]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar pacientes' });
    }
});

// Rota para atualizar um pacientes
app.put('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, cep, email,genero, data_de_nascimento, senha, minhas_consultas } = req.body;
    try {
        const result = await pool.query(
            'UPDATE pacientes SET nome = $1, cpf = $2, cep = $3, email = $4, genero = $5, data_de_nascimento = $6, senha = $7, minhas_consultas = $8 WHERE id = $5 RETURNING *',
            [nome, cpf, cep, email,genero, data_de_nascimento, senha, minhas_consultas, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar paciente' });
    }
});

// Rota para deletar um Paciente
app.delete('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM pacientes WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente não encontrado' });
        }
        res.json({ message: 'Paciente deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar paciente' });
    }
});

// Médicos

// Rota para buscar todos os medicos
app.get('/medicos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM medicos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar medicos' });
    }
});

// Rota para buscar um medico por ID
app.get('/medicos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM medicos WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Medico não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar medico' });
    }
});

// Rota para adicionar um medico
app.post('/medicos', async (req, res) => {
    const {  nome, cpf, crm, email,genero, data_de_nascimento, senha } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO medicos (nome, cpf, crm, email,genero, data_de_nascimento, senha) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [nome, cpf, crm, email,genero, data_de_nascimento, senha]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar medicos' });
    }
});

// Rota para atualizar um medico
app.put('/medicos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, crm, email,genero, data_de_nascimento, senha } = req.body;
    try {
        const result = await pool.query(
            'UPDATE medicos SET nome = $1, cpf = $2, crm = $3, email = $4, genero = $5, data_de_nascimento = $6, senha = $7 WHERE id = $5 RETURNING *',
            [nome, cpf, crm, email,genero, data_de_nascimento, senha, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Medico não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar medico' });
    }
});

// Rota para deletar um medico
app.delete('/medicos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM medicos WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Medico não encontrado' });
        }
        res.json({ message: 'Medico deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar medico' });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
