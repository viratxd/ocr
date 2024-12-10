import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import ocrRoutes from './routes/ocrRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', ocrRoutes);

// Error handling
app.use(errorHandler);

// For Vercel, export the app instead of starting the server directly
if (process.env.NODE_ENV !== 'production') {
  app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
  });
}

export default app;