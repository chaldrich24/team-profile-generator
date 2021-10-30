const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('John', 1, 'dog@cow');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('dog@cow');
});

test('returns employee name', () => {
    const employee = new Employee('John', 1, 'dog@cow');

    expect(employee.getName()).toEqual(expect.stringContaining('John'));
});

test('returns employee id', () => {
    const employee = new Employee('John', 1, 'dog@cow');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
});

test('returns employee email', () => {
    const employee = new Employee('John', 1, 'dog@cow');

    expect(employee.getEmail()).toEqual(expect.stringContaining('dog@cow'));
});

test('returns employee role', () => {
    const employee = new Employee('John', 1, 'dog@cow');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});