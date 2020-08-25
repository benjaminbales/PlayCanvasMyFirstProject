var Updown = pc.createScript('updown');

// initialize code called once per entity
Updown.prototype.initialize = function() {
    
};

// update code called every frame
Updown.prototype.update = function(dt) {
    this.entity.children.forEach(this.translate);
};

Updown.prototype.translate = function(item){
    curPos = new pc.Vec3(item.position);
    // item.setPosition(curPos + new pc.Vec3(0.01, 0.01, 0.01));
    item.setPosition(new pc.Vec3(1,1,1));
    console.log("item.position");
    console.log(item.position);
    // item.transform
};

// swap method called for script hot-reloading
// inherit your script state here
// Updown.prototype.swap = function(old) { };

// to learn more about script anatomy, please read:
// http://developer.playcanvas.com/en/user-manual/scripting/