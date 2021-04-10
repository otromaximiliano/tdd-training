import request from 'supertest';
import app from '../src/app';

describe('GET /auth', () => {
  it('Request /auth should return msg should username and password ', async () => {
    const data = {username: "yourUsername", password:"yourPassword"};
    const result = await request(app).get('/auth').send();
    expect(result.status).toBe(200);
    expect(result.body).toEqual(data);
  });
});

describe('POST /auth', () => {
  it('Request /auth should return msg should username and password ', async () => {
    const data = {username: "otromaximiliano", password:"10783729"};
    const result = await request(app).post('/auth').send(data);
    expect(result.status).toBe(200);
    expect(result.body).toEqual(data);
  });
  
});