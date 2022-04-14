let num: number = 10;

function sum(a: number, b: number): void {
  console.log(a + b);
  console.log("neibu");
}
sum(1, 2);


let a: unknown;
a = true;
let s: string;
s=a as string;
console.log(s);

// (function n(): never {
//   throw new Error('报错了');
// })()


let o: { name: string, [propName: string]: any };
o = { name: "fdfsaf", b: true };


let n: (a: number, b: number) => number;
n = function (this:Window,a: number, b: number): number {
  console.log(this);
  return 10;
}

// 数组类型
let a1: string[];
let a2: Array<string>;

// 元组类型 
let a3: [string, string];


// 枚举类型
enum sex { male, female };
let i:{name:string,sex:sex};
i = { name :'fdsfsd', sex: sex.male};
console.log(i);

let new2:number = 2;