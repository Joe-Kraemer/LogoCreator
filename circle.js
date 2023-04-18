import shape from "./shape.js"
class circle extends shape{
    constructor(type, color, text, radius=80, x=150, y=100){
        super(type, color, text)
     this.radius = radius
     this.x = x
     this.y = y 
    }

}
export default circle