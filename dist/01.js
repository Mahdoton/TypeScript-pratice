let num = 10;
function sum(a, b) {
    console.log(a + b);
    console.log("neibu");
}
sum(1, 2);
let a;
a = true;
let s;
s = a;
console.log(s);
// (function n(): never {
//   throw new Error('报错了');
// })()
let o;
o = { name: "fdfsaf", b: true };
let n;
n = function (a, b) {
    console.log(this);
    return 10;
};
// 数组类型
let a1;
let a2;
// 元组类型 
let a3;
// 枚举类型
var sex;
(function (sex) {
    sex[sex["male"] = 0] = "male";
    sex[sex["female"] = 1] = "female";
})(sex || (sex = {}));
;
let i;
i = { name: 'fdsfsd', sex: sex.male };
console.log(i);
let new2 = 2;
