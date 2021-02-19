import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Server is runnin on port ${PORT}`));
