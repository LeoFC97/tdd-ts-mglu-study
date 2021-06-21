import StringValidator from './stringValidator';

describe('stringValidator Util', () => {
  test('Send wrong email, should return false', () => {
    const returnOfFunction = StringValidator.validadeEmailForSpartPost('test@wrongString.com');
    expect(returnOfFunction).toBe(false);
  });
  test('Send correct email, should return false', () => {
    const returnOfFunction = StringValidator.validadeEmailForSpartPost('test@sparkpostbox.com');
    expect(returnOfFunction).toBe(true);
  });
});
