// function loggingIdentity<T>(arg: T[]): T[] {
//   console.log(arg.length);  // Array has a .length, so no more error
//   return arg;
// }

function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);  // Array has a .length, so no more error
  return arg;
}