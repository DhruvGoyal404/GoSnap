import express, { json } from 'express';
import cors from 'cors';
import imageRoutes from './routes/imageRoutes.js';

const app = express();
const port = 5000;

// Middleware
const allowedOrigins = ['https://go-snap-frontend.vercel.app'];
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST'], // Add other methods as needed
    credentials: true // If you need to support credentials
}));

app.use(json());

// Use routes
app.use('/api/image', imageRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
