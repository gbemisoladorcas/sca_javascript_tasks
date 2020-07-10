// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor (attributes) {
      this.length = attributes.length;
      this.width = attributes.width;
      this.height = attributes.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height); 
    }
  }
  
  const cuboid = new CuboidMaker ({
    "length": 4,
    "width": 5,
    "height": 5,
  });
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
console.log(cuboid.volume());
console.log(cuboid.surface_area()); 
