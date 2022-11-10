const reverseString= require('./reverseString');
describe('reverseString', ()=>{
  test(' when we have a string "Hello" it should retrurn "olleH" ',()=>{
     //Arrange
     const string="Hello";

     //Act
     const result = reverseString(string);

     //Assert
     expect(result).toBe("olleH");
  });

  test('when we have a string "Greetings from Earth" it should return "htraE morf sgniteerG" ',()=>{
    //Arrange
     const string="Greetings from Earth";

     //Act
     const result = reverseString(string);

     //Assert
     expect(result).toBe("htraE morf sgniteerG");
  
  });
})