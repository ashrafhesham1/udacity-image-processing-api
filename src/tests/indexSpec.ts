import supertest from 'supertest';
import app from '..';

const req = supertest(app);

describe('API is working correctly', () => {
  it('checks if the api respond correctly', (done) => {
    req.get('/').then((res) => {
      expect(res.statusCode).toEqual(200);
    });
    done();
  });
});
