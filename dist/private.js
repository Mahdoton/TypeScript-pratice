(() => {
    class Animal {
        constructor(theName) { this.name = theName; }
    }
    // new Animal("Cat").name; // 错误: 'name' 是私有的.
})();
