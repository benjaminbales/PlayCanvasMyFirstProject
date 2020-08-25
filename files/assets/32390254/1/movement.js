var Movement = pc.createScript('movement');

Movement.attributes.add('speed', {
    type: 'number',    
    default: 0.1,
    min: 0.05,
    max: 0.5,
    precision: 2,
    description: 'Controls the movement speed'
});

// initialize code called once per entity
Movement.prototype.initialize = function() {
    this.force = new pc.Vec3();
    // this.entity.collision.on('contact', this.oncontact, this);
    // this.entity.rigidbody.
};

// update code called every frame
Movement.prototype.update = function(dt) {
    // console.log("this.force");
    // console.log(this.force);
};

Movement.prototype.oncontact = function(result){
    console.log("result");
    console.log(result);
    
    var forceX = 0;
    var forceY = 0;
    var forceZ = 0;

    // calculate force based on pressed keys
    if (this.app.keyboard.isPressed(pc.KEY_LEFT) ) {
        // forceX = -this.speed;
        var localPos = this.entity.getLocalPosition();
        console.log("localPos");
        console.log(localPos);
        // this.entity.setLocalPosition();
    }

    if (this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        // forceX += this.speed;
    }

    if (this.app.keyboard.isPressed(pc.KEY_UP)) {
        // forceZ = -this.speed;
    } 

    if (this.app.keyboard.isPressed(pc.KEY_DOWN)) {
        // forceZ += this.speed;
    }

    if (this.app.keyboard.isPressed(pc.KEY_SPACE)){
        // forceY += this.speed * 7;
    }
    
    if(this.app.keyboard.isPressed(pc.KEY_K)){
        // console.log("rotating left");
        this.entity.rotateLocal(0, 10 , 0);
        // this.entity.rigidbody.applyTorqueImpulse(0, 0.01, 0);
        // console.log("this.entity.rotation");
        // console.log(this.entity.rotation);
    }
    
    if(this.app.keyboard.isPressed(pc.KEY_L)){
        // console.log("rotating right");
        this.entity.rotateLocal(0 , -10 , 0);
        // this.entity.rigidbody.applyTorqueImpulse(0, -0.01, 0);
        // console.log("this.entity.rotation");
        // console.log(this.entity.rotation);
    }
    
    // this.force.x = forceX;
    // this.force.y = forceY;
    // this.force.z = forceZ;


    // if we have some non-zero force
    // if (this.force.length()) {

        // console.log("this.entity.rotation");
        // console.log(this.entity.rotation);
        // console.log("Math.PI * 0.5");
        // console.log(Math.PI * 0.5);
        // calculate force vector
        // var rX = Math.cos(-Math.PI * 0.25);
        // var rX = Math.cos(Math.PI * 0.5);
        // var rY = Math.sin(-Math.PI * 0.25);
        // var rY = Math.sin(Math.PI * 0.5);
        // this.force.set(this.force.x * rX - this.force.z * rY, this.force.y, this.force.z * rX + this.force.x * rY);       
    // }

    // apply impulse to move the entity
    // this.entity.rigidbody.applyImpulse(this.force);
};