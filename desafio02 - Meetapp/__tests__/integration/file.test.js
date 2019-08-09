import request from 'supertest';
import { format } from 'date-fns';
import { resolve } from 'path';

import app from '../../src/app';
import truncate from '../util/truncate';
import fetchUserAuthorization from '../fetchUserAuthorization';

describe('File', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should upload a file', async () => {
    const token = await fetchUserAuthorization();

    const response = await request(app)
      .post('/files')
      .attach('file', resolve(__dirname, '..', 'assets', 'wack.png'))
      .set('Authorization', `bearer ${token}`);

    expect(response.body).toHaveProperty('url');
  });
});
