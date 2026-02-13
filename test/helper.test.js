const {sum,multiply,substract} = require("../src/helper");

describe("Helpers function",()=>{
    test('2+2=4',()=>{
        expect(sum(2,2)).toBe(3)
    })

    test('0+0=0 ',()=>{
        expect(sum(0,0)).toBe(0)
    })

});

describe("Multiply function",()=>{
    test('2*2=4',()=>{
        expect(multiply(2,2)).toBe(3)
    })

    test('0*0=0',()=>{
        expect(multiply(0,0)).toBe(0)
    })

});
describe("Substract function",()=>{
    test('2-2=0',()=>{
        expect(substract(2,2)).toBe(0)
    })

    test('0-0=0',()=>{
        expect(substract(0,0)).toBe(0)
    })

});