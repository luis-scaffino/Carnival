import utils from "../../node_modules/decentraland-ecs-utils/index"

export class mySystem implements ISystem {
  onRemoveEntity(entity: Entity){}
    // Code to run once
  }

export function Createtheater(): void {

// --- Theater ---
const theater = new Entity()
engine.addEntity(theater)
theater.addComponent(new GLTFShape('models/Theatre_01/Theatre_01.glb'))
theater.addComponent(new Transform({ 
  position: new Vector3(5.3, 0, 14),
  scale: new Vector3(0.8, 0.8, 0.8)
}))

// --- Spawner function ---
function spawnit(x: number, y: number, z: number) {
  const it = new Entity();
  it.setParent(theater)
    
// add the entity to the engine
engine.addEntity(it)
    
// add a shape to the entity
it.addComponent(new GLTFShape('models/IT/IT.gltf'))
  
const clip2 = new AudioClip('sounds/Evil_laugh.mp3')
const source2 = new AudioSource(clip2)
it.addComponent(source2)
    
// add a transform to the entity
it.addComponent(new Transform({
  position: new Vector3(x, y, z),
  rotation: Quaternion.Euler(0, 90, 0,),
  scale: new Vector3(0.05, 0.05, 0.05)
}))
return it
}

// --- Question Mark Rotating ---
const question = new Entity()
question.setParent(theater)
engine.addEntity(question)
question.addComponent(new GLTFShape('models/Question_Mark/question_mark.glb'))
question.addComponent(new Transform({ 
  position: new Vector3(1.55, 2.6, -0.08),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(1.65, 1.65, 1.65)
}))
question.addComponent(new AudioSource(new AudioClip("sounds/Ballon_pop.mp3")))
question.addComponent(new utils.KeepRotatingComponent(Quaternion.Euler(0, -45, 0)))

let StartPos = new Vector3(1.55, 2.6, -0.08)
let EndPos = new Vector3(1.55, 2, -0.08)
question.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 2, () => {
  question.addComponent(new utils.MoveTransformComponent(EndPos, StartPos, 2))
}))
question.addComponent(new utils.Interval(4000, () => {
   question.addComponent(new utils.MoveTransformComponent(StartPos, EndPos, 2, () => {
    question.addComponent(new utils.MoveTransformComponent(EndPos, StartPos, 2))
}))
}))

let popped01 = true
let popped02 = true
let popped03 = true
let popped04 = true
let popped05 = true
let popped06 = true
let popped07 = true
let popped08 = true
let popped09 = true
let popped10 = true
let popped11 = true
let popped12 = true
let popped13 = true
let popped14 = true
let popped15 = true
let popped16 = true

question.addComponent(
  new OnClick((): void => {
    if(!popped01) {
      if(!popped02) {
        if(!popped03) {
          if(!popped04) {
            if(!popped05) {
              if(!popped06) {
                if(!popped07) {
                  if(!popped08) {
                    if(!popped09) {
                      if(!popped10) {
                        if(!popped11) {
                          if(!popped12) {
                            if(!popped13) {
                              if(!popped14) {
                                if(!popped15) {
                                  if(!popped16) {
                                    engine.removeEntity(question)
                                    
                                    /// --- Spawn it ---
                                    const it = spawnit(1.4, 0.5, 0.23);
                                     it.addComponent(new OnClick(() => {
                                      it.getComponent(Transform).scale.x *= 1.01;
                                      it.getComponent(Transform).scale.y *= 1.01;
                                      it.getComponent(Transform).scale.z *= 1.01
                                     }))  
                                     it.getComponent(AudioSource).playOnce();
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  })
)

 // --- Question Mark Static---
 const question2 = new Entity()
 question2.setParent(theater)
 engine.addEntity(question2)
 question2.addComponent(new GLTFShape('models/Question_Mark/question_mark_collider.glb'))
 question2.addComponent(new Transform({ 
   position: new Vector3(1.55, 1.75, 0.35),
   rotation: Quaternion.Euler(0, 270, 0),
   scale: new Vector3(1.65, 1.65, 1.65)
 }))

// --- Ballon Purple ---
const ballon_01 = new Entity()
ballon_01.setParent(question2)
const gltfShape_3 = new GLTFShape('models/Ballons/ballon_purple.glb')
ballon_01.addComponentOrReplace(gltfShape_3)
const transform_12 = new Transform({
  position: new Vector3(0.1, 0, 0.1),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_01.addComponentOrReplace(transform_12)
engine.addEntity(ballon_01)
ballon_01.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_01);
  popped01 = false;
}))
const ballon_02 = new Entity()
ballon_02.setParent(question2)
ballon_02.addComponentOrReplace(gltfShape_3)
const transform_13 = new Transform({
  position: new Vector3(-0.7, -0.6, 0.45),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_02.addComponentOrReplace(transform_13)
engine.addEntity(ballon_02)
ballon_02.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_02)
  popped02 = false;
}))
const ballon_03 = new Entity()
ballon_03.setParent(question2)
ballon_03.addComponentOrReplace(gltfShape_3)
const transform_14 = new Transform({
  position: new Vector3(0.65, -0.55, 0.425),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_03.addComponentOrReplace(transform_14)
engine.addEntity(ballon_03)
ballon_03.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_03)
  popped03 = false;
}))
const ballon_04 = new Entity()
ballon_04.setParent(question2)
ballon_04.addComponentOrReplace(gltfShape_3)
const transform_15 = new Transform({
  position: new Vector3(-0.9, 0.2, 0),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_04.addComponentOrReplace(transform_15)
engine.addEntity(ballon_04)
ballon_04.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_04)
  popped04 = false;
}))

// --- Ballon Red ---
const ballon_05 = new Entity()
ballon_05.setParent(question2)
const gltfShape_4 = new GLTFShape('models/Ballons/ballon_red.glb')
ballon_05.addComponentOrReplace(gltfShape_4)
const transform_16 = new Transform({
  position: new Vector3(-0.2, -0.4, 0.4),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_05.addComponentOrReplace(transform_16)
engine.addEntity(ballon_05)
ballon_05.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_05)
  popped05 = false;
}))
const ballon_06 = new Entity()
ballon_06.setParent(question2)
ballon_06.addComponentOrReplace(gltfShape_4)
const transform_17 = new Transform({
  position: new Vector3(-1, -0.3, 0.1),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_06.addComponentOrReplace(transform_17)
engine.addEntity(ballon_06)
ballon_06.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_06)
  popped06 = false;
}))
const ballon_07 = new Entity()
ballon_07.setParent(question2)
ballon_07.addComponentOrReplace(gltfShape_4)
const transform_18 = new Transform({
  position: new Vector3(0.55, -0.45, 0),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_07.addComponentOrReplace(transform_18)
engine.addEntity(ballon_07)
ballon_07.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_07)
  popped07 = false;
}))
const ballon_08 = new Entity()
ballon_08.setParent(question2)
ballon_08.addComponentOrReplace(gltfShape_4)
const transform_19 = new Transform({
  position: new Vector3(0.1, -0.8, -0.15),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_08.addComponentOrReplace(transform_19)
engine.addEntity(ballon_08)
ballon_08.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_08)
  popped08 = false;
}))

// --- Ballon Blue ---
const ballon_09 = new Entity()
ballon_09.setParent(question2)
const gltfShape_5 = new GLTFShape('models/Ballons/ballon_blue.glb')
ballon_09.addComponentOrReplace(gltfShape_5)
const transform_20 = new Transform({
  position: new Vector3(-0.6, -0.2, 0.2),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_09.addComponentOrReplace(transform_20)
engine.addEntity(ballon_09)
ballon_09.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_09)
  popped09 = false;
}))
const ballon_10 = new Entity()
ballon_10.setParent(question2)
ballon_10.addComponentOrReplace(gltfShape_5)
const transform_21 = new Transform({
  position: new Vector3(0.15, -0.65, 0.675),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_10.addComponentOrReplace(transform_21)
engine.addEntity(ballon_10)
ballon_10.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_10)
  popped10 = false;
}))
const ballon_11 = new Entity()
ballon_11.setParent(question2)
ballon_11.addComponentOrReplace(gltfShape_5)
const transform_22 = new Transform({
  position: new Vector3(0.5, 0.1, 0.25),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_11.addComponentOrReplace(transform_22)
engine.addEntity(ballon_11)
ballon_11.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_11)
  popped11 = false;
}))
const ballon_12 = new Entity()
ballon_12.setParent(question2)
ballon_12.addComponentOrReplace(gltfShape_5)
const transform_23 = new Transform({
  position: new Vector3(-0.91, -1, 0.6),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_12.addComponentOrReplace(transform_23)
engine.addEntity(ballon_12)
ballon_12.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_12)
  popped12 = false;
}))

// --- Ballon Green ---
const ballon_13 = new Entity()
ballon_13.setParent(question2)
const gltfShape_6 = new GLTFShape('models/Ballons/ballon_green.glb')
ballon_13.addComponentOrReplace(gltfShape_6)
const transform_24 = new Transform({
  position: new Vector3(0.25, -0.5, 0.3),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_13.addComponentOrReplace(transform_24)
engine.addEntity(ballon_13)
ballon_13.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_13)
  popped13 = false;
}))
const ballon_14 = new Entity()
ballon_14.setParent(question2)
ballon_14.addComponentOrReplace(gltfShape_6)
const transform_25 = new Transform({
  position: new Vector3(-0.4, 0.2, 0),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_14.addComponentOrReplace(transform_25)
engine.addEntity(ballon_14)
ballon_14.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_14)
  popped14 = false;
}))
const ballon_15 = new Entity()
ballon_15.setParent(question2)
ballon_15.addComponentOrReplace(gltfShape_6)
const transform_26 = new Transform({
  position: new Vector3(-0.35, -0.9, 0.5),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_15.addComponentOrReplace(transform_26)
engine.addEntity(ballon_15)
ballon_15.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_15)
  popped15 = false;
}))
const ballon_16 = new Entity()
ballon_16.setParent(question2)
ballon_16.addComponentOrReplace(gltfShape_6)
const transform_27 = new Transform({
  position: new Vector3(-1.15, -0.675, 0.4),
  scale: new Vector3(1.55, 1.55, 1.55)
})
ballon_16.addComponentOrReplace(transform_27)
engine.addEntity(ballon_16)
ballon_16.addComponent(new OnClick((): void => {
  question.getComponent(AudioSource).playOnce()
  engine.removeEntity(ballon_16)
  popped16 = false;
}))

}