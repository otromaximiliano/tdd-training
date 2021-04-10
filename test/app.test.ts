import request from 'supertest';
import app from '../src/app';

describe('GET /auth', () => {
  it('Request /auth should return ', async () => {
    const data = {dataAgregada: "Dta dhgdhdhd"};
    const result = await request(app).get('/auth').send();
    expect(result.status).toBe(200);
    expect(result.body).toEqual(data);
  });
});