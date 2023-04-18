// {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">5

//   <circle cx="150" cy="100" r="80" fill="green"/>

//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg> */}

import fs from "fs"
import path from "path"
import inquirer from "inquirer"
import circle from "./lib/circle.js"
import square from "./lib/square.js"
import triangle from "./lib/triangle.js"

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'choose a shape',
        choices: ['circle', 'square', 'triangle']
      },  

    {
      type: 'input',
      name: 'color',
      message: 'Please enter hexcode without #',
    },

    {
        type: 'input', 
        name: 'text',
        message: 'Please type 3 charachters'
      },
  
  ]
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
  }

function init(){  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    let shape
    let svgString = ""
switch (answers.shape) {
    case 'triangle': ('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    shape = new triangle(answers.type, answers.text, answers.color)
    svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <polygon points=${shape.points} fill=#${shape.color}/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text[0]}${answers.text[1]}${answers.text[2]}</text>
    </svg>`
        break;
        case "square":
        shape = new square(answers.type, answers.text, answers.color)
        svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <${shape.type} x=${shape.x} y=${shape.y} width=${shape.width} height=${shape.height} fill=#${shape.color}/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text[0]}${answers.text[1]}${answers.text[2]}</text>
        </svg>`
        break;
        case 'circle':
        shape = new circle(answers.type, answers.text, answers.color)
        svgString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <${shape.type} cx=${shape.x} cy=${shape.y} r=${shape.radius} fill=#${shape.color}/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${answers.text[0]}${answers.text[1]}${answers.text[2]}</text>
        </svg>`
        break;
    default:
        break;
}
writeToFile('logo.svg', svgString)
  })
}
init()