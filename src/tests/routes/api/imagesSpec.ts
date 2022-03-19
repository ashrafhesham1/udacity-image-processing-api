import supertest from 'supertest';
import route from '../../../routes/api/images';
import express from 'express';
import { isImgExist, generateImgData } from '../../../utilities/fileSys';

const app = express();
app.use('/', route);
const req = supertest(app);

describe('Route is working correctly', () => {
  it('checks if the router respond correctly', (done) => {
    req.get('/').then((res) => {
      expect(res.statusCode).toEqual(200);
    });
    done();
  });
});

describe('queries validity', () => {
  it('checks response for negative dimentions', (done) => {
    const [filename, width, height] = ['fjord', -3, 1];

    req
      .get(`/`)
      .query({
        filename,
        width,
        height,
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('checks response for non numerical dimentions', (done) => {
    const [filename, width, height] = ['fjord', 'x', 1];

    req
      .get(`/`)
      .query({
        filename,
        width,
        height,
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('checks response for  wrong formated queries', (done) => {
    const [filename, width, height] = ['fjord', 3, 1];

    req
      .get(`/`)
      .query({
        filename,
        width,
        heixght: height,
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });
});

describe('Respone to image processing requests', () => {
  it('checks response for non exitisted images', (done) => {
    const [filename, width, height] = ['fjxord', 3, 1];

    req
      .get(`/`)
      .query({
        filename,
        width,
        height,
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('Checks if resizing works corectly', (done) => {
    const [filename, width, height] = ['fjord', 3, 1];

    req
      .get(`/`)
      .query({
        filename,
        width,
        height,
      })
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      });
  });

  it('Checks if cashing works correctly', (done) => {
    const [filename, width, height] = ['fjord', 3, 1];

    const ImageData = generateImgData({ fileName: filename, width, height });

    req
      .get(`/`)
      .query({
        filename,
        width,
        height,
      })
      .then(() => {
        isImgExist(ImageData.newImgPath).then((res) => {
          expect(res).toBe(true);
          done();
        });
      });
  });
});
