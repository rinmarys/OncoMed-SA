const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'template',
    password: 'senai',
    port: 5432,
});

// Habilitar CORS para todas as rotas
app.use(cors());
app.use(express.json());

app.get('/pacientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pacientes');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar pacientes' });
    }
});

app.get('/pacientes/:id', async (req, res) => {

    const { id } = req.params;

    try {

        const result = await pool.query('SELECT * FROM pacientes WHERE id_paciente = $1', [id]);

        if (result.rows.length === 0) {

            return res.status(404).json({ error: 'Paciente não encontrado' });
        }

        res.json(result.rows[0]);
    } catch (err) {

        console.error('Erro ao buscar paciente:', err.message);
        res.status(500).json({ error: 'Erro ao buscar paciente' });
    };
});

app.post('/pacientes', async (req, res) => {
    const { nome, cpf, cep, email, genero, data_de_nascimento, senha, imagem_de_perfil } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO pacientes ( nome, cpf, cep, email, genero, data_de_nascimento, senha, imagem_de_perfil) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [nome, cpf, cep, email, genero, data_de_nascimento, senha, imagem_de_perfil]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar pacientes' });
    }
});

app.put('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, cep, email, genero, data_de_nascimento, senha, imagem_de_perfil } = req.body;
    try {
        const result = await pool.query(

            'UPDATE pacientes SET nome = $1, cpf = $2, cep = $3, email = $4, genero = $5, data_de_nascimento = $6, senha = $7, imagem_de_perfil = $8 WHERE id_paciente = $1 RETURNING *',

            [nome, cpf, cep, email, genero, data_de_nascimento, senha, imagem_de_perfil, id]
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

app.delete('/pacientes/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM pacientes WHERE id_paciente = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Paciente não encontrado' });
        }
        res.json({ message: 'Paciente deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar paciente' });
    }
});

//Marcar consulta

app.get('/marcarConsulta', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT marcarConsulta.*, pacientes.nome AS paciente_nome
            FROM marcarConsulta
            JOIN pacientes ON marcarConsulta.id_paciente = pacientes.id_paciente
        `);
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar marcarConsulta' });
    }
});


app.get('/marcarConsulta/:id', async (req, res) => {
    const { id } = req.params;
    try {

        const result = await pool.query('SELECT * FROM marcarConsulta WHERE id = $1', [id]);

        if (result.rows.length === 0) {

            return res.status(404).json({ error: 'marcarConsulta não encontrado' });
        };

        res.json(result.rows[0]);

    } catch (err) {

        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar marcarConsulta' });
    };
});

app.post('/marcarConsulta', async (req, res) => {

    const { data_agendamento, tipo_consulta, horario, observacoes, medico_designado, id_paciente } = req.body;

    try {
        const result = await pool.query(

            // 'INSERT INTO marcarConsulta ( data_agendamento, tipo_consulta, horario, observacoes, medico_designado, id_paciente ) VALUES ($1, $2, $3, $4, $5) RETURNING *',

            'INSERT INTO marcarConsulta ( data_agendamento, tipo_consulta, horario, observacoes, medico_designado, id_paciente ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',

            [data_agendamento, tipo_consulta, horario, observacoes, medico_designado, id_paciente]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {

        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar marcarConsulta' });
    }
});

app.put('/marcarConsulta/:id', async (req, res) => {

    const { id } = req.params;
    const { data_agendamento, tipo_consulta, horario, observacoes, id_paciente } = req.body;

    try {
        const result = await pool.query(

            'UPDATE marcarConsulta SET data_agendamento = $1, tipo_consulta = $2, horario = $3, observacoes = $4, medico_designado = $5, id_paciente = $6 WHERE id = $1 RETURNING *',

            [data_agendamento, tipo_consulta, horario, observacoes, medico_designado, id_paciente, id]

            [data_agendamento, tipo_consulta, horario, observacoes, id_paciente, id]

        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'marcarConsulta não encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar marcarConsulta' });
    }
});

app.delete('/marcarConsulta/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM marcarConsulta WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'marcarConsulta não encontrado' });
        }
        res.json({ message: 'marcarConsulta deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar marcarConsulta' });
    }
});

// Médicos

app.get('/medicos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM medicos');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar medicos' });
    }
});

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

app.post('/medicos', async (req, res) => {
    const { nome, cpf, crm, email, genero, data_de_nascimento, senha, imagem_de_perfil } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO medicos (nome, cpf, crm, email,genero, data_de_nascimento, senha, imagem_de_perfil) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [nome, cpf, crm, email, genero, data_de_nascimento, senha, imagem_de_perfil]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar medicos' });
    }
});

app.put('/medicos/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, cpf, crm, email, genero, data_de_nascimento, senha } = req.body;
    try {
        const result = await pool.query(
            'UPDATE medicos SET nome = $1, cpf = $2, crm = $3, email = $4, genero = $5, data_de_nascimento = $6, senha = $7, imagem_de_perfil = $8 WHERE id = $1 RETURNING *',
            [nome, cpf, crm, email, genero, data_de_nascimento, senha, id]
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

//BLOG

app.get('/blog', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blog');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar a tabela blog ;(' });
    }
});

app.post('/blog', async (req, res) => {
    const { titulo, descricao, autor, imagem } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO blog (titulo, descricao, autor, imagem) VALUES ($1, $2, $3, $4) RETURNING *',
            [titulo, descricao, autor, imagem]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar medicos' });
    }
});

//ADMIN

app.get('/admin', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM admin');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar admin' });
    }
});
