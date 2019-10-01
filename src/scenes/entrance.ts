export function Createentrance(): void {
    
// --- Carnival Text ---
const carnival = new Entity()
carnival.addComponent(new GLTFShape('models/Carnival/carnival.glb'))
carnival.addComponent(new Transform({ 
position: new Vector3(0.04, 4.2, 5.8),
scale: new Vector3(1.515, 1.515, 1.515)
}))
carnival.addComponent(new Billboard(false, false, false))
engine.addEntity(carnival)

// --- Garland ---
const garland = new Entity()
engine.addEntity(garland)
garland.addComponent(new GLTFShape('models/Garlands/garlands.glb'))
garland.addComponent(new Transform({ 
  position: new Vector3(0, 0.385, 5.8),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.6, 0.6, 0.6)
}))

}