const stringLength = require('./stringLength');
describe('stringLength', ()=>{
  test('check for stringLength exception', ()=> {
    // Arrange
    const string= "Hello, world!";

      expect(()=>stringLength(string)).toThrow();
      expect(()=>stringLength(string)).toThrow(Error);
  });

  test('give a string value: "Hello" and check what is his length', () => {
  // Arrange
    const string= "Hello";

    // Act
    const result = stringLength(string);

    // Assert
  expect(result).toBe(5);
   });

})
