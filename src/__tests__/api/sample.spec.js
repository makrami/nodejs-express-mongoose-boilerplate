import controller from '../../api/sample/controller.js';
import User from '../../models/user.model.js';
import { jest } from '@jest/globals';

jest.mock('../../models/user.model.js');

const request = {
  username: 'fake_username',
};

describe('Sample controller', () => {
  describe('register', () => {
    it('should send status code of 400 when user exists', async () => {
      // User.findOne.mockImplementationOnce(() => ({
      //   id: 1,
      //   username: 'fake_username',
      // }));

      await controller.sampleRegister(request);
    });
  });
});
