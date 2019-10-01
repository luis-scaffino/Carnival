export function Createdecorations(): void {

// --- Bycle Parking ---
const bycicleparking = new Entity()
bycicleparking.addComponent(new GLTFShape('models/Decorations/BicycleParking_01.glb'))
bycicleparking.addComponent(new Transform({ 
position: new Vector3(-6.85, 0, 8.5)
}))
engine.addEntity(bycicleparking)

// --- Bycicle ---
const bycicle = new Entity()
bycicle.setParent(bycicleparking)
bycicle.addComponent(new GLTFShape('models/Decorations/Bicycle_01.glb'))
bycicle.addComponent(new Transform({ 
  position: new Vector3(0.5, 0, 0.7)
}))
engine.addEntity(bycicle)

// --- Bycicle2 ---
const bycicle2 = new Entity()
bycicle2.setParent(bycicleparking)
bycicle2.addComponent(new GLTFShape('models/Decorations/Bicycle_02.glb'))
bycicle2.addComponent(new Transform({ 
  position: new Vector3(0.72, 0, -0.7)
}))
engine.addEntity(bycicle2)

// --- Ice Cream Truck ---
const icecreamtruck = new Entity()
icecreamtruck.addComponent(new GLTFShape('models/Decorations/IceCreamTruck_01.glb'))
icecreamtruck.addComponent(new Transform({ 
  position: new Vector3(6, 0, 8.5),
  rotation: Quaternion.Euler(0, 270, 0,)
}))
engine.addEntity(icecreamtruck)

}