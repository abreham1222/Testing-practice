const calculator=require('./calculator');
describe('new calculator add method', ()=>{
  test('adds 1 + 2  to equal 3', ()=>{
    //Arrange
    const calculate= new calculator(1,2);
      const result = calculate.add(1, 2);

    //Assert
    expect(result).toBe(3);
  });