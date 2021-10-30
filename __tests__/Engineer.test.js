const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('John', 1, 'dog@cow', 'john22');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('dog@cow');
    expect(engineer.github).toBe('john22');
});