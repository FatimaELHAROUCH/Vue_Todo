
const sum = require('./sum')


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test ('ObjectA Match to ObjectB', () => {
    const objectA = { name : 'foo', age : 'bar', password : 'baz' };

    const objectB = { name : 'foo', age : 'bar'};

    // toMatchObject verify that objectB contains the objectA, toMatchObject can be applied to arrays
    expect(objectA).toMatchObject(objectB)
});

test('ObjectA equal to ObjectB', () => {
    const objectA = { name : 'foo', age : 'bar', password : 'baz' };

    const objectB = { name : 'foo', age : 'bar'};

    expect(objectA).not.toEqual(objectB)
});



