const add = require("./add");

test("2+5 = 7 이 맞남?", () => {
    expect(add(2,5)).toBe(7);
});

test("3+5 = 8 이 맞남?", () => {
    expect(add(3,5)).toBe(8);
});