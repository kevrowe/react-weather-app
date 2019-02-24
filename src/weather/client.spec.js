import { result } from './client';

describe('client', () => {
  describe('result', () => {
    it('returns a successful result on resolve', async () => {
      const value = await result(
        new Promise(res => {
          res(4);
        }),
      );

      expect(value).toEqual([, 4]);
    });
    it('returns an error in first position on reject', async () => {
      const mockError = new Error('failed request');
      const value = await result(
        new Promise((_, rej) => {
          rej(mockError);
        }),
      );

      expect(value).toEqual([mockError]);
    });
  });
});
