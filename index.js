import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.routes.js';
import fileRoutes from './routes/file.routes.js';
import mailRoutes from './routes/mail.routes.js'

dotenv.config();

const app = express();
const port = 5000;

app.use(express.json());
//mounting
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/mails', mailRoutes);


connectDB();

app.get('/', (req, res) => {
    res.send('Cold Mailer API is running');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});