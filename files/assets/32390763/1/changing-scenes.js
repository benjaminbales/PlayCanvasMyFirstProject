var ChangingScenes = pc.createScript('changingScenes');

ChangingScenes.attributes.add("sceneName", {type: "string", default: "", title: "Scene Name to Load"});

ChangingScenes.prototype.initialize = function(dt) {
    // Change scenes in 1 second
    var self = this;
    setTimeout(function (){ 
        self.loadScene(self.sceneName);
    }, 3000);
    
    //Something about the event handler is triggering the execution of loadScene in all scenes in the SceneRegistry for the application.
    
    // this.app.keyboard.on('keydown', function(evt) {
    //     if (evt.key === pc.KEY_SPACE) {
    //         // this.app.xr.end();
    //         this.loadScene(this.sceneName);
    //         console.log("loading new scene from keydown evt...");
    //     }
    // }, this);
    // this.on(pc.KEY_SPACE, )
};

// //there's some kind of debouncing issue with the spacebar.
// ChangingScenes.prototype.update = function(){
//     if(this.app.keyboard.isPressed(pc.KEY_SPACE)){
//         this.loadScene(this.sceneName);
//     }
// };

ChangingScenes.prototype.loadScene = function (sceneName) {
    // Get a reference to the scene's root object
    // var oldHierarchy = this.app.root.findByName ('Root');
    // var oldHierarchy = this.app.root.findByName("scene");
    var oldHierarchy = this.entity.parent;
    console.log("oldHierarchy");
    console.log(oldHierarchy);
    
    console.log("this.app.root.children");
    console.log(this.app.root.children);
        
    // Get the path to the scene
    var scene = this.app.scenes.find(sceneName);
    
    // Load the scenes entity hierarchy
    this.app.scenes.loadSceneHierarchy(scene.url, function (err, parent) {
        if (!err) {
            oldHierarchy.destroy();
        } else {
            console.error(err);
        }
    });
};