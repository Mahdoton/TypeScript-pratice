(() => {
  class Animal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
  }

  // new Animal("Cat").name; // 错误: 'name' 是私有的.
})();