import utils from "../../node_modules/decentraland-ecs-utils/index"

export function Createshootinggallery(): void {

// --- Shooting Gallery ---
const booth = new Entity()
engine.addEntity(booth)
booth.addComponent(new GLTFShape('models/Booth/booth.glb'))
booth.addComponent(new Transform({ 
  position: new Vector3(-6.25, 1.78, 14),
  rotation: Quaternion.Euler(0, 90, 0,),
  scale: new Vector3(9, 9, 9)
}))

// --- Coming Soon ---
const soon = new Entity()
soon.setParent(booth)
engine.addEntity(soon)
soon.addComponent(new GLTFShape('models/Booth/coming_soon.glb'))
soon.addComponent(new Transform({ 
  position: new Vector3(0, 0, 0.1),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
     
}