import supertest from 'supertest';
import routes from '../../routes/index';
import express from 'express';

const app = express();
app.use('/', routes);
const req = supertest(app);

describe('Router is working correctly', () => {
  it('checks if the router respond correctly', (done) => {
    req.get('/').then((res) => {
      expect(res.statusCode).toEqual(200);
    });
    done();
  });
});
