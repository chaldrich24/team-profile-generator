const Manager = require('../lib/Manager');

test('return manager object', () => {
    const manager = new Manager('John', 1, 'dog@cow', 56);

    expect(manager.name).toBe('John');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('dog@cow');
    expect(manager.officeNumber).toBe(56);
});

test('returns manager id', () => {
    const manager = new Manager('John', 1, 'dog@cow', 56);

    expect(manager.getId()).toEqual(expect.stringContaining('1'));
});

test('returns manager role', () => {
    const manager = new Manager('John', 1, 'dog@cow', 56);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});