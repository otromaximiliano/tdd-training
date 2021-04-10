import request from 'supertest';
import app from '../src/app';

describe('/register', () => {
  describe('GET /register', () => {
    it('Request /register should returno object with username and password example', async () => {
      const data = {username: "yourUsername", password:"yourPassword"};
      const result = await request(app).get('/register').send();
      expect(result.status).toBe(200);
      expect(result.body).toEqual(data);
    });
  });
  describe('POST /register', () => {
    it('Response /register should return object with id of user', async () => {
      const data = {username: "otromaximiliano", password:"10783729"};
      const result = await request(app).get('/register').send(data);
      expect(result.status).toBe(200);
      expect(result.body).toHaveProperty('id',1);
    });
    it('Response /register should return object with error msg when incorrect exist username', async () => {
      const data = {username: "otromaximiliano", password:"10783729"};
      const msg = {error: "username no valid"};
      const result = await request(app).get('/register').send(data);
      expect(result.status).toBe(403);
      expect(result.body).toEqual(msg);
    });
  });
});

describe('/auth', () => {
  describe('GET /auth', () => {
    it('Response /auth should return msg should username and password example', async () => {
      const data = {username: "yourUsername", password:"yourPassword"};
      const result = await request(app).post('/auth').send(data);
      expect(result.status).toBe(200);
      expect(result.body).toEqual(data);
    });
  });
  describe('POST /auth', () => {
    it('Response /auth should return object with msg authebticated when password and username correct', async () => {
      const data = {username: "otromaximiliano", password:"10783729"};
      const result = await request(app).post('/auth').send(data);
      expect(result.status).toBe(200);
      expect(result.body).toEqual({status: "authenticated"});
    });
  });
});