const fastExp = require('./fast-exp')
describe("fast-exp works",()=>{
    it("should correctly output for right value for simple exponation",()=>{
        expect(fastExp(2,10)).toBe(1024)
    })
    it("should correctly output right value for complex exponation",()=>{
        expect(fastExp(8,9)).toBe(134217728)
    })
    it("should output correct output for the first number as negative",()=>{
        expect(fastExp(-8,9)).toBe(-134217728)
    })
    it("should ouput correctly for the second number as a nagative",()=>{
        expect(fastExp(2,-10)).toBe(0.0009765625)
    })
    it("should not accept invalid input",()=>{
        expect(()=>fastExp("a","b")).toThrowError()
        expect(()=>fastExp(1.22,2.33)).toThrowError()
        expect(()=>fastExp("1,22","2.33")).toThrowError()
    })
}
)