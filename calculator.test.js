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