import shape from "./shape.js"

class triangle extends shape{
    constructor(type, color, text, points="150, 18 244, 182 56, 182"){
        super(type, color, text)
     this.points=points
    }

}

export default triangle