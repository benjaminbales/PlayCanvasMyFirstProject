var Bounce = pc.createScript('bounce');

// initialize code called once per entity
Bounce.prototype.initialize = function() {
    // this.entity.collision.on('contact', this.makeNoise, this);
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
};

// update code called every frame
Bounce.prototype.update = function(dt) {
    
};

Bounce.prototype.onCollisionStart = function(result){
    // console.log("result");
    // console.log(result.other.name);
    if(Math.abs(this.entity.rigidbody.linearVelocity.y) > 0.1 || result.other.name === 'Playbot'){
        this.entity.sound.play('bounce');
    }
};