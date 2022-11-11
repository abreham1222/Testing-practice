const calculator=require('./calculator');
describe('new calculator add method', ()=>{
  test('adds 1 + 2  to equal 3', ()=>{
    //Arrange
    const calculate= new calculator(1,2);
      const result = calculate.add(1, 2);

    //Assert
    expect(result).toBe(3);
  });

   test('adds 1.5 + 2.5  to equal 4', ()=>{
    //Arrange
    const calculate= new calculator(1.5,2.5);

    //Act
    const result = calculate.add();

    //Assert
    expect(result).toBeCloseTo(4);
  });
   test('adds -1 + 2  to equal 1', ()=>{
    //Arrange
    const calculate= new calculator(-1,2);

    //Act
    const result = calculate.add();

    //Assert
    expect(result).toBe(1);
  });
  
});

describe('new calculator substract method', ()=>{
  test('substracts 2 - 1  to equal 1', ()=>{
    //Arrange
    const calculate= new calculator(2,1);

    //Act
    const result = calculate.substract();

    //Assert
    expect(result).toBe(1);
  });

  test('substracts 1 - 2  to equal -1', ()=>{
    //Arrange
    const calculate= new calculator(1,2);

    //Act
    const result = calculate.substract();

    //Assert
    expect(result).toBe(-1);
  });

  test('substracts 2.5 - 1  to equal 1.5', ()=>{
    //Arrange
    const calculate= new calculator(2.5,1);

    //Act
    const result = calculate.substract();

    //Assert
    expect(result).toBeCloseTo(1.5);
  });

});

describe('new calculator divide method', ()=>{
  test('divids 1 / 2  to equal 0.5', ()=>{
    //Arrange
    const calculate= new calculator(1,2);

    //Act
    const result = calculate.divide();

    //Assert
    expect(result).toBeCloseTo(0.5);
  });

  test('divids 0 / 1  to equal 0', ()=>{
    //Arrange
    const calculate= new calculator(0);

    //Act
    const result = calculate.divide();

    //Assert
    expect(result).toBe(0);
  });

  test('divids -1 / -4  to equal 0.25', ()=>{
    //Arrange
    const calculate= new calculator(-1,-4);

    //Act
    const result = calculate.divide();

    //Assert
    expect(result).toBeCloseTo(0.25);
  });

});

describe('new calculator multiply method', ()=>{
  test('multiplies 0 * 2  to equal 0', ()=>{
    //Arrange
    const calculate= new calculator(0,2);

    //Act
    const result = calculate.multiply();

    //Assert
    expect(result).toBe(0);
  });


  test('multiplies -1 * 2  to equal -2', ()=>{
    //Arrange
    const calculate= new calculator(-1,2);

    //Act
    const result = calculate.multiply();

    //Assert
    expect(result).toBe(-2);
  });

  test('multiplies -4 * -2  to equal 8', ()=>{
    //Arrange
    const calculate= new calculator(-4,-2);

    //Act
    const result = calculate.multiply();

    //Assert
    expect(result).toBe(8);
  });
});