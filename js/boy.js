class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
            friction: 0.2,
            restitution: 0.3
        }
        this.image = loadImage("walking_1.png");
        this.umbrella = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.umbrella)
    }

    display() {
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300);
    }
}