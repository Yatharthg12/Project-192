AFRAME.registerComponent("barriers", {
    init: function () {
      //starting x position
      posX = -20;
      //starting z-position
      posZ = 85;
    
      for (var i = 0; i < 10; i++) {
        //create wire-fence entity
        var barrier1 = document.createElement("a-entity");
        var barrier2 = document.createElement("a-entity");
        var barrier3 = document.createElement("a-entity");
        var barrier4 = document.createElement("a-entity");
  
  
        //set x, y and z position
        posX = posX + 5;
        posY = 2.5;
        posZ = posZ - 10;
  
        //scale 
        var scale = { x: 2.5, y: 2.5, z: 2.5 };
  
        //set the id
        barrier1.setAttribute("id", "barrier1" + i);
        barrier2.setAttribute("id", "barrier2" + i);
        barrier3.setAttribute("id", "barrier3" + i);
        barrier4.setAttribute("id", "barrier4" + i);
  
        //set the position
        barrier1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
        barrier2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
        barrier3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
        barrier4.setAttribute("position", { x: 50, y: 2.5, z: posZ });
  
        //set the scale
        barrier1.setAttribute("scale", scale);
        barrier2.setAttribute("scale", scale);
        barrier3.setAttribute("scale", scale);
        barrier4.setAttribute("scale", scale);
  
        //set the model
        barrier1.setAttribute(
          "gltf-model",
          "./models/Barrier/cene.gltf"
        );
  
        barrier2.setAttribute(
          "gltf-model",
          "./models/Barrier/scene.gltf"
        );
  
        barrier3.setAttribute(
          "gltf-model",
          "./models/Barrier/scene.gltf"
        );
  
        barrier4.setAttribute(
          "gltf-model",
          "./models/Barrier/scene.gltf"
        );
  
        //set the rotation
        barrier3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
        barrier4.setAttribute("rotation", { x: 0, y: 90, z: 0 });
  
        //set the physics body
        barrier1.setAttribute("static-body", {});
        barrier2.setAttribute("static-body", {});
        barrier3.setAttribute("static-body", {});
        barrier4.setAttribute("static-body", {});
  
        var sceneEl = document.querySelector("#scene");
        //attach the entity to the scene
        sceneEl.appendChild(barrier1);
        sceneEl.appendChild(barrier2);
        sceneEl.appendChild(barrier3);
        sceneEl.appendChild(barrier4);
  
      }
    },
  });