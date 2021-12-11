const { add, sub, mul } = require("./add");

test("2+5 = 7 이 맞남?", () => {
    expect(add(2,5)).toBe(7);
});

test("3*5 = 15 이 맞남?", () => {
    expect(mul(3,5)).toBe(15);
});

test("4-2 = 2 이 맞남?", () => {
    expect(sub(4,2)).toBe(2);
});