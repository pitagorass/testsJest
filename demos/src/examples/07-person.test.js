const Person = require('./07-person');
// Mantra Para Realizar Pruebas
// AAA
// Arrange - preparar o alistar nuestro escenario de pruebas
// Act - Ejecutar o poner a actuar a nuestro escenario
// Assert - Respondemos nuestras ipotesis
// AAA Tambien se conoce como:
// Given - Dado algo
// When - Cuando
// Then - Entonces

describe('Test For Person Class', () => {
  let person;
  /*
  Arrange - parte de preparar o alistar es decir
  que es lo que necesito yo para escribir mis
  pruebas, en este ejemplo es una instancia.
  En este caso nuestro beforeEach crea una instancia
  nueva para cada caso e prueba
  */
  beforeEach(() => {
    person = new Person('David', 48, 1.8);
  });
  test('should return down', () => {
    /* Arrange Aun asi tambien tenemos esta linea e codigo
    donde tenemos o estamos configurando preparando para este
    caso de pruebas un peso especifico
    */
    person.weight = 45;
    /* Act - En este punto es cuando ejecutamos el metodo que queremos probar
    en este caos es el de calcular el indice de masa corporal */
    const imc = person.calcIMC();
    /* Assert - Hacer probar es donde resuelvo mis hipotesis o es donde diremos que
    nuestro resultado esperado sera toBe('down') */
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
