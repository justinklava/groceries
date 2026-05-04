import express from 'express';
import path from 'path';
import cors from 'cors';
import apiRouter from './routes/router.js';


const app = express();
const PORT = process.env.PORT || 3434;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Log all fetch requests
app.use((req, res, next) => {
    console.log(req.method + ' ' + req.originalUrl);
    next();
});

// Routes
app.use('/api', apiRouter); //route api calls to api router.js
app.use(express.static(path.resolve('public'))); //serves public static files



app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('public', 'index.html'));  //serve frontend index
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
