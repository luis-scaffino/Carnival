import utils from "../../node_modules/decentraland-ecs-utils/index"

export function Createferriswheel(): void {

// --- Ferries Base ---
const base = new Entity()
engine.addEntity(base)
base.addComponent(new GLTFShape('models/Ferris_Wheel/base.glb'))
base.addComponent(new Transform({ 
  position: new Vector3(0, 0, 23),
  scale: new Vector3(2, 2, 2)
}))

// --- Ferries Wheel ---
const wheel = new Entity()
wheel.setParent(base)
wheel.addComponent(new GLTFShape('models/Ferris_Wheel/wheel.glb'))
wheel.addComponent(new Transform({ 
  position: new Vector3(0, 7.902, 0),
}))
// Create AudioClip object, holding audio file
const clip = new AudioClip('sounds/Funfair.mp3')

// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)
source.loop = true

// Add AudioSource component to entity
wheel.addComponent(source)

engine.addEntity(wheel)

// --- PRESS ME ---
const pressme = new Entity()
engine.addEntity(pressme)
pressme.addComponent(new GLTFShape('models/PRESS_ME/PRESS_ME.glb'))
pressme.addComponent(new Transform({ 
position: new Vector3(4.5, 1.5, 2.8),
scale: new Vector3(0.35, 0.35, 0.35)
}))
pressme.addComponent(new Billboard(false, true, false))

let pressed = false;
pressme.addComponent(
  new OnClick((): void => {
    if(!pressed) {
      pressed = true;
      source.playing = true;
      wheel.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, -15)));
      wagon_01.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_02.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_03.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_04.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_05.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_06.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_07.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      wagon_08.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, 0, 15)));
      }
  })
)

// --- Ferries Wagons ---
const wagon_01 = new Entity()
wagon_01.setParent(wheel)
const gltfShape_7 = new GLTFShape('models/Ferris_Wheel/wagon.glb')
wagon_01.addComponentOrReplace(gltfShape_7)
const transform_28 = new Transform({
  position: new Vector3(-0.013, 4.704, 0)
})
wagon_01.addComponentOrReplace(transform_28)
engine.addEntity(wagon_01)

const wagon_02 = new Entity()
wagon_02.setParent(wheel)
wagon_02.addComponentOrReplace(gltfShape_7)
const transform_29 = new Transform({
  position: new Vector3(3.386, 3.319, 0)
})
wagon_02.addComponentOrReplace(transform_29)
engine.addEntity(wagon_02)

const wagon_03 = new Entity()
wagon_03.setParent(wheel)
wagon_03.addComponentOrReplace(gltfShape_7)
const transform_30 = new Transform({
  position: new Vector3(4.733, 0.055, 0)
})
wagon_03.addComponentOrReplace(transform_30)
engine.addEntity(wagon_03)

const wagon_04 = new Entity()
wagon_04.setParent(wheel)
wagon_04.addComponentOrReplace(gltfShape_7)
const transform_31 = new Transform({
  position: new Vector3(3.398, -3.4, 0)
})
wagon_04.addComponentOrReplace(transform_31)
engine.addEntity(wagon_04)

// --- Ferries Wagons 05 ---
const wagon_05 = new Entity()
wagon_05.setParent(wheel)
wagon_05.addComponentOrReplace(gltfShape_7)
const transform_32 = new Transform({
    position: new Vector3(0, -4.8, 0)
})
wagon_05.addComponentOrReplace(transform_32)
engine.addEntity(wagon_05)

const wagon_06 = new Entity()
wagon_06.setParent(wheel)
wagon_06.addComponentOrReplace(gltfShape_7)
const transform_33 = new Transform({
  position: new Vector3(-3.411, -3.429, 0)
})
wagon_06.addComponentOrReplace(transform_33)
engine.addEntity(wagon_06)

const wagon_07 = new Entity()
wagon_07.setParent(wheel)
wagon_07.addComponentOrReplace(gltfShape_7)
const transform_34 = new Transform({
  position: new Vector3(-4.852, -0.031, 0)
})
wagon_07.addComponentOrReplace(transform_34)
engine.addEntity(wagon_07)

const wagon_08 = new Entity()
wagon_08.setParent(wheel)
wagon_08.addComponentOrReplace(gltfShape_7)
const transform_35 = new Transform({
  position: new Vector3(-3.342, 3.403, 0)
})
wagon_08.addComponentOrReplace(transform_35)
engine.addEntity(wagon_08)

}