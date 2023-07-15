const { Triangle, Square, Circle } = require("./shapes.js");

describe("Circle test", () => {
    test("Test for a black circle with ARD in white text", () => {
        const shape = new Circle('black', 'white', 'ARD');
        expect(shape.render()).toEqual(
            '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="115" r="80" fill="black" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="white">ARD</text></svg>'
        );
    });
});

describe("Square test", () => {
    test("Test for a red square with RAD in blue text", () => {
        const shape = new Square('red', 'blue', 'RAD');
        expect(shape.render()).toEqual(
            '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="red" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="blue">RAD</text></svg>'
        );
    });
});

describe("Triangle test", () => {
    test("Test for a green triangle with DAR in yellow text", () => {
        const shape = new Triangle('green', 'yellow', 'DAR');
        expect(shape.render()).toEqual(
            '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="green" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="yellow">DAR</text></svg>'
        );
    });
});