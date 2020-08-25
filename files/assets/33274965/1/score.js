var Score = pc.createScript('score');

// initialize code called once per entity
Score.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

// update code called every frame
Score.prototype.update = function(dt) {
    
};

Score.prototype.onTriggerEnter = function(otherEntity){
    // console.log("otherEntity.name");
    // console.log(otherEntity.name);
    if(otherEntity.name === 'ball'){
        this.entity.sound.play('score');    
    }
};