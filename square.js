import shape from "./shape.js"

class square extends shape{
    constructor(type, color, text, x=150, y=100, width=160, height=160){
        super(type, color, text)
     this.x = x
     this.y = y
     this.width = width
     this.height = height 
    }
}

export default square