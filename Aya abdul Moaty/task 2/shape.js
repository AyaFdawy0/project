class Shape {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    area() {
        return (this.height) * (this.width);
    }
    permiter() {
        return ((this.height) * (this.width)) + 2;
    }
    toString(){
        return ("Shape permiter= " + this.permiter()+  " Shape area= " + this.area())
    }
}
export class Rect extends Shape {
    constructor(rect_w, rect_h) {
        super(rect_w, rect_h);
    }
    area() {
        return (this.height) * (this.width);
    }
    permiter() {
        return ((this.height) * (this.width)) + 2;
    }
}
export class Square extends Shape {
    constructor(width) {
        super(width);
    }
    area() {
        return (this.width) * (this.width);
    }
    permiter() {
        return (this.width) * 4;
    }
}
export class Circle extends Shape {
    constructor(width) {
        super(width);
    }
    area() {
        return (Math.PI * (this.width) * (this.width));
    }
    permiter() {
        return (2* Math.PI * (this.width));
    }
}

var rect = new Rect(2, 3);
var sqr = new Square(2);
console.log(sqr.area());
console.log(rect.area());

console.log(rect.toString());
console.log(sqr.toString());
// {
//     console.log("Rect hieght= " + this.height + " Rect width= " + this.width + " Rect area= " + this.area() + " Rect permiter= " + this.permiter())
// }