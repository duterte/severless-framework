const { it, expect } = require('@jest/globals');
const { parseJson } = require('./event-parser');

describe('Event Parser', () => {
  it('should be a function', () => {
    expect(typeof parseJson).toBe('function');
  });
  it('returns an object', () => {
    expect(
      parseJson('{"name" : "German", "lastName" : "Ochea"}')
    ).toMatchObject({ name: 'German', lastName: 'Ochea' });
  });
  it('returns an object', () => {
    expect(
      parseJson('{"name" : "German", "lastName" : "Oaschea",}')
    ).toMatchObject({ name: 'German', lastName: 'Oaschea' });
  });
});
