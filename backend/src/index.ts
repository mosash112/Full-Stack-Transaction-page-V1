import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import userRoutes from './routes/users'
import donationRoutes from './routes/donations'

const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoutes)
app.use('/api/donations', donationRoutes)

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

process.on('SIGINT', () => {
    console.log('Received SIGINT. Closing server...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
