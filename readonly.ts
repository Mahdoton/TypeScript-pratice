class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }

  // 等价于上面的写法
  // constructor(public readonly name:string){}
}
let dad = new Octopus("Man with the 8 strong legs");
console.log(dad.name);
// dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.