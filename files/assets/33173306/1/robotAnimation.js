var RobotAnimation = pc.createScript('robotAnimation');

// initialize code called once per entity
RobotAnimation.prototype.initialize = function() {
    this.force = new pc.Vec3();
};

// update code called every frame
RobotAnimation.prototype.update = function(dt) {
    
    if(this.app.keyboard.isPressed(pc.KEY_1)){
        this.entity.animation.play('Playbot_run');
    }
    
    if(this.app.keyboard.isPressed(pc.KEY_2)){
        this.entity.animation.play('Playbot_die');
    }
    
        if(this.app.keyboard.isPressed(pc.KEY_3)){
        this.entity.animation.play('Playbot_idle');
    }
    
    if(this.app.keyboard.isPressed(pc.KEY_4)){
        this.entity.animation.play('Playbot_jump');
//         this.force.set(0, 1, 0);
        
//         // apply impulse to move the entity
//         this.entity.rigidbody.applyImpulse(this.force);
    }
    
    //speed up
    if(this.app.keyboard.isPressed(pc.KEY_P)){
        this.entity.animation.speed += 0.1;
        console.log("this.entity.animation.speed");
        console.log(this.entity.animation.speed);
    }
    
    //slow down
    if(this.app.keyboard.isPressed(pc.KEY_M)){
        this.entity.animation.speed -= 0.1;
        console.log("this.entity.animation.speed");
        console.log(this.entity.animation.speed);
    }
    
};

// swap method called for script hot-reloading
// inherit your script state here
// RobotAnimation.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/