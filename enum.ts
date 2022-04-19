// 联合枚举与枚举成员的类型
function unionEnum() {
  enum ShapeKind {
    Circle,
    Square,
  }

  interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
  }

  interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
  }

  let c: Circle = {
    kind: ShapeKind.Circle,
    // kind: ShapeKind.Square;
    //    ~~~~~~~~~~~~~~~~ Error!
    radius: 100,
  }
  console.log(c);
}
unionEnum();


enum FileAccess {
  // constant members
  None,
  Read    = 1 << 1,
  Write   = 1 << 2,
  ReadWrite  = Read | Write,
  // computed member
  G = "123".length
}
console.log()


function fn(){
  var b =3;
  console.log(b);
}