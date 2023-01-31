// matchers - Assertions
// Cuando trabajamos con objetos usamos el metodo toEqual()

test('test obj', () => {
  const data = { name: 'Santiago' };
  data.lastname = 'Vargas';
  expect(data).toEqual({ name: 'Santiago', lastname: 'Vargas' });
});

test('null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('string', () => {
  expect('Christoph').toMatch(/stop/);
});

test('List / Arrays', () => {
  const numArray = [1, 2, 3, 4, 5];
  expect(numArray).toContain(3);
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK!');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use a string that must be contained in the error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);

  // Or you can match an exact error message using a regexp like below
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!'); // Test fails
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK!'); // Test pass
});
