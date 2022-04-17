class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
console.log(dad.name);
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
