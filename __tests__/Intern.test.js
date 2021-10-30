const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('John', 1, 'dog@cow', 'Harvard');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('dog@cow');
    expect(intern.school).toBe('Harvard');
});

test('returns intern github', () => {
    const intern = new Intern('John', 1, 'dog@cow', 'Harvard');

    expect(intern.getSchool()).toEqual(expect.stringContaining('Harvard'));
});

test('returns intern role', () => {
    const intern = new Intern('John', 1, 'dog@cow', 'Harvard');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});