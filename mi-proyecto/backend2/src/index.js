// src/index.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 🔹 TEST
app.get('/api/health', (req, res) => {
  res.json({ mensaje: 'Backend funcionando' });
});

// 🔹 LOGIN
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await prisma.login.findFirst({
    where: { username, password }
  });

  if (!user) {
    return res.status(401).json({ mensaje: 'Error login' });
  }

  res.json(user);
});

app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});