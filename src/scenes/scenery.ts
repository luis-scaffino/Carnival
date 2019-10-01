export function Createscenery(): void {

  // --- Floor ---
const floor = new Entity();
floor.addComponent(new GLTFShape('models/Floor/grass.glb'));
floor.addComponent(new Transform({ 
position: new Vector3(0, -0.09, 16),
}));
engine.addEntity(floor)

  // --- Decentraland ---
  const decentraland = new Entity();
  decentraland.addComponent(new GLTFShape('models/Floor/decentraland.glb'));
  decentraland.addComponent(new Transform({ 
  position: new Vector3(0, -0.03, 12),
  rotation: Quaternion.Euler(0, 180, 0,),
  scale: new Vector3(1.75, 1.75, 1.75)
  }));
  engine.addEntity(decentraland)

  // --- Trees ---
const tree_Forest_Green_01 = new Entity()
const gltfShape = new GLTFShape('models/Tree_Forest_Green_01/Tree_Forest_Green_01.glb')
tree_Forest_Green_01.addComponentOrReplace(gltfShape)
const transform = new Transform({
  position: new Vector3(11, 0, 3.5),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_01.addComponentOrReplace(transform)
engine.addEntity(tree_Forest_Green_01)

const tree_Forest_Green_01_2 = new Entity()
tree_Forest_Green_01_2.addComponentOrReplace(gltfShape)
const transform_01 = new Transform({
  position: new Vector3(13.5, 0, 16),
  rotation: Quaternion.Euler(0, 45, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_01_2.addComponentOrReplace(transform_01)
engine.addEntity(tree_Forest_Green_01_2)

const tree_Forest_Green_01_3 = new Entity()
tree_Forest_Green_01_3.addComponentOrReplace(gltfShape)
const transform_02 = new Transform({
  position: new Vector3(2, 0, 29),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_01_3.addComponentOrReplace(transform_02)
engine.addEntity(tree_Forest_Green_01_3)

const tree_Forest_Green_01_4 = new Entity()
tree_Forest_Green_01_4.addComponentOrReplace(gltfShape)
const transform_03 = new Transform({
  position: new Vector3(-13.5, 0, 19),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_01_4.addComponentOrReplace(transform_03)
engine.addEntity(tree_Forest_Green_01_4)

const tree_Forest_Green_01_5 = new Entity()
tree_Forest_Green_01_5.addComponentOrReplace(gltfShape)
const transform_04 = new Transform({
  position: new Vector3(-13.5, 0, 6),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_01_5.addComponentOrReplace(transform_04)
engine.addEntity(tree_Forest_Green_01_5)

const tree_Forest_Green_02 = new Entity()
const gltfShape_2 = new GLTFShape('models/Tree_Forest_Green_02/Tree_Forest_Green_02.glb')
tree_Forest_Green_02.addComponentOrReplace(gltfShape_2)
const transform_05 = new Transform({
  position: new Vector3(12.5, 0, 9.5),
  rotation: Quaternion.Euler(0, 270, 0),
  scale: new Vector3(0.5, 0.6, 0.5)
})
tree_Forest_Green_02.addComponentOrReplace(transform_05)
engine.addEntity(tree_Forest_Green_02)

const tree_Forest_Green_02_2 = new Entity()
tree_Forest_Green_02_2.addComponentOrReplace(gltfShape_2)
const transform_06 = new Transform({
  position: new Vector3(13, 0, 23),
  rotation: Quaternion.Euler(0, 45, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_02_2.addComponentOrReplace(transform_06)
engine.addEntity(tree_Forest_Green_02_2)

const tree_Forest_Green_02_3 = new Entity()
tree_Forest_Green_02_3.addComponentOrReplace(gltfShape_2)
const transform_07 = new Transform({
  position: new Vector3(9, 0, 29),
  rotation: Quaternion.Euler(0, -90, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_02_3.addComponentOrReplace(transform_07)
engine.addEntity(tree_Forest_Green_02_3)

const tree_Forest_Green_02_4 = new Entity()
tree_Forest_Green_02_4.addComponentOrReplace(gltfShape_2)
const transform_08 = new Transform({
  position: new Vector3(-4, 0, 29),
  rotation: Quaternion.Euler(0, 0, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_02_4.addComponentOrReplace(transform_08)
engine.addEntity(tree_Forest_Green_02_4)

const tree_Forest_Green_02_5 = new Entity()
tree_Forest_Green_02_5.addComponentOrReplace(gltfShape_2)
const transform_09 = new Transform({
  position: new Vector3(-12.5, 0, 25.5),
  rotation: Quaternion.Euler(0, 90, 0),
  scale: new Vector3(0.55, 0.6, 0.55)
})
tree_Forest_Green_02_5.addComponentOrReplace(transform_09)
engine.addEntity(tree_Forest_Green_02_5)

const tree_Forest_Green_02_6 = new Entity()
tree_Forest_Green_02_6.addComponentOrReplace(gltfShape_2)
const transform_10 = new Transform({
  position: new Vector3(-13, 0, 12.5),
  rotation: Quaternion.Euler(0, 30, 0),
  scale: new Vector3(0.50, 0.55, 0.50)
})
tree_Forest_Green_02_6.addComponentOrReplace(transform_10)
engine.addEntity(tree_Forest_Green_02_6)

const tree_Forest_Green_02_7 = new Entity()
tree_Forest_Green_02_7.addComponentOrReplace(gltfShape_2)
const transform_11 = new Transform({
  position: new Vector3(-7, 0, 2.5),
  rotation: Quaternion.Euler(0, 180, 0),
  scale: new Vector3(0.45, 0.5, 0.45)
})
tree_Forest_Green_02_7.addComponentOrReplace(transform_11)
engine.addEntity(tree_Forest_Green_02_7)

}