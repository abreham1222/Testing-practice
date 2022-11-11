const calculator=require('./calculator');
describe('new calculator add method', ()=>{
  test('adds 1 + 2  to equal 3', ()=>{
    //Arrange
    const calculate= new calculator(1,2);