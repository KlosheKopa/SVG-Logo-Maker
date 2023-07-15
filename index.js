const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

//Define inquirer prompt function question
const question = function () {
    inquirer
            .prompt([
                {
                    type: 'list',
				    name: 'shape',
				    message: 'What shape would you like your logo to be?',
				    choices: ['Circle', 'Square', 'Triangle'],
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'What color would you like the shape to be? Enter a hex code or name:',
                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'What three letters would you like to use for the logo?',
                    validate: function (input) {
                        return input.length === 3 ? true : 'Please enter exactly three characters';
                    },
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'What color would you like the text to be? Enter a hex code or name:',
                }
            ])
            .then((answers) => {
                console.log('Answers from prompt:', answers);
                let shapeColor = answers.shapeColor.toLowerCase();
                let textColor = answers.textColor.toLowerCase();
                let text = answers.text.toUpperCase();
                let logo;
                switch(answers.shape){
                    case 'Circle':
                        logo = new Circle(shapeColor, textColor, text);
                        break;
                    case 'Square':
                        logo = new Square(shapeColor, textColor, text);
                        break;
                    case 'Triangle':
                        logo = new Triangle(shapeColor, textColor, text);
                        break;
                    default:
                        console.log('Shape not listed:', answers.shape);
                        return;
                }
                const svg = logo.render();
                fs.writeFile('logo.svg', svg, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Your logo was generated as logo.svg');
                    }
                });
            }).catch((error) => {
                console.error('Error occurred:', error);
            });
}
//Call question function
question();