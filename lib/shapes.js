//Parent class shape which predefines variables and setters needed for the variables
class Shape {
    constructor(sColor, tColor, tInput){
        this.shapeColor = sColor;
        this.textColor = tColor;
        this.text = tInput;
        this.svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`; //Same starting string for all
    }

    setShapeColor(sColor){
        this.shapeColor = sColor;
    }

    setTextColor(tColor){
        this.textColor = tColor;
    }

    setText(tInput){
        this.text = tInput;
    }
}

class Circle extends Shape{
    render(){
        this.svg += `<circle cx="150" cy="115" r="80" fill="${this.shapeColor}" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`;

        return this.svg;
    }
}

class Square extends Shape{
    render(){
        this.svg += `<rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`;

        return this.svg;
    }
}

class Triangle extends Shape{
    render(){
        this.svg += `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textColor}">${this.text}</text></svg>`;

        return this.svg;
    }
}

module.exports = { Triangle, Square, Circle };