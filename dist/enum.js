// 联合枚举与枚举成员的类型
function unionEnum() {
    let ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    let c = {
        kind: ShapeKind.Circle,
        // kind: ShapeKind.Square;
        //    ~~~~~~~~~~~~~~~~ Error!
        radius: 100,
    };
    console.log(c);
}
unionEnum();
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log();
function fn() {
    var b = 3;
    console.log(b);
}
