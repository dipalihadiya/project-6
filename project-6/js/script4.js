class shop {
    constructor() {}

    Recanngle(width, height) {
        document.getElementById('circle').innerHTML = `Rectangle Area: ${width * height}`
    }

    Circle(radius) {    
        document.getElementById('rectangle').innerHTML = `Circle Area: ${3.14 * radius * radius}`
    }
}

let sh1 = new shop();
sh1.Recanngle(5, 8);

let sh2 = new shop();
sh2.Circle(3);
