import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send(`
        <h1>Image processing API</h1>
        <p>Please use the sub domain /api/images to start using our API</p>
    `);
});
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is working at http://localhost:${port}`);
});

export default app;
