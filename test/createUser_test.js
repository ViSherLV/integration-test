/* eslint-disable no-undef */
const assert = require('assert');
const { expect } = require('chai');
const { createUser } = require('../controllers');
// const app = require('../app');
describe('Creating records', async () => {
  // it('saves a user1', () => {
  //   assert(1 + 1 === 2);
  // });
  it('saves a user', async () => {
    const userData = {
      login: 'testLogin',
      firstName: 'testFirstName',
      lastName: 'testLastName',
      email: 'testEmail',
      password: 'testPassword',
    };
    const newUser = await createUser(userData);
    expect(newUser.login).to.equal(userData.login);
    expect(newUser.firstName).to.equal(userData.firstName);
    expect(newUser.lastName).to.equal(userData.lastName);
    expect(newUser.email).to.equal(userData.email);
    expect(newUser.password).to.exist;
    // newUser[login] === useData[login];
    console.log('newUser', newUser);
  });
});
