const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

db.sequelize.sync()
    .then(() => console.log('Database berhasil disinkronisasi'))
    .catch(err => console.error('Koneksi gagal:', err));

app.get('/', (req, res) => {
    res.send('Selamat datang di API Sequelize');
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
