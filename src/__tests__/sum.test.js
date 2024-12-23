import { sum } from "../components/sum";


test("sum of two numbers",()=>{
    // arrange
    const result = sum(3,4);
    // act

    // assert
    expect(result).toBe(7);
})