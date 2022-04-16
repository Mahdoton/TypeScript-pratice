(() => {
    class Animal {
        constructor(theName) { this.name = theName; }
        move(distanceInMeters) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
})();
