import { resources } from "../../../utils/resources";
import { Mesh, Vector3, Euler, Group, ShaderMaterial, LinearSRGBColorSpace, TorusGeometry, CylinderGeometry, MeshBasicMaterial, SphereGeometry, DoubleSide } from "three";
import { scene } from "../../core/scene";
import { animations } from "./animations";
import { sceneWeights, sceneWeightsInOut } from "../../../animations/scenes";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { face } from "./face";
import { leftDesktop as avatarLeftDesktop } from "./left-desktop";
import matcapVertexShader from "../../shaders/avatar-matcap/vertex.glsl";
import matcapFragmentShader from "../../shaders/avatar-matcap/fragment.glsl";
import headVertexShader from "../../shaders/avatar-head/vertex.glsl";
import headFragmentShader from "../../shaders/avatar-head/fragment.glsl";
import gsap from "gsap";
import { aboutProgress } from "../../../animations/transitions/about";
//import { avatarHologram } from "./hologram";

import type { Material, Bone, Texture } from "three";

export const createGlasses = (customMaterial?: Material) => {
  const glassesGroup = new Group();
  glassesGroup.name = "glasses";

  // Black frame material
  const frameMat = customMaterial || new MeshBasicMaterial({ color: 0x111111, depthTest: false, transparent: true });

  // Semi-transparent dark lens material
  const lensMat = new MeshBasicMaterial({ color: 0x222222, transparent: true, opacity: 0.4, side: DoubleSide, depthTest: false });

  // Left lens frame — large enough to fit the face
  const leftFrameGeo = new TorusGeometry(0.14, 0.022, 12, 32);
  const leftFrame = new Mesh(leftFrameGeo, frameMat);
  leftFrame.position.set(-0.155, 0.1, 0.38);
  leftFrame.renderOrder = 999;
  glassesGroup.add(leftFrame);

  // Left lens (filled circle)
  const leftLensGeo = new SphereGeometry(0.13, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
  const leftLens = new Mesh(leftLensGeo, lensMat);
  leftLens.position.set(-0.155, 0.1, 0.38);
  leftLens.rotation.x = Math.PI / 2;
  leftLens.scale.set(1, 1, 0.05);
  leftLens.renderOrder = 998;
  glassesGroup.add(leftLens);

  // Right lens frame
  const rightFrameGeo = new TorusGeometry(0.14, 0.022, 12, 32);
  const rightFrame = new Mesh(rightFrameGeo, frameMat);
  rightFrame.position.set(0.155, 0.1, 0.38);
  rightFrame.renderOrder = 999;
  glassesGroup.add(rightFrame);

  // Right lens (filled circle)
  const rightLens = new Mesh(leftLensGeo, lensMat);
  rightLens.position.set(0.155, 0.1, 0.38);
  rightLens.rotation.x = Math.PI / 2;
  rightLens.scale.set(1, 1, 0.05);
  rightLens.renderOrder = 998;
  glassesGroup.add(rightLens);

  // Bridge connecting both frames
  const bridgeGeo = new CylinderGeometry(0.012, 0.012, 0.07);
  const bridge = new Mesh(bridgeGeo, frameMat);
  bridge.rotation.z = Math.PI / 2;
  bridge.position.set(0, 0.12, 0.40);
  bridge.renderOrder = 999;
  glassesGroup.add(bridge);

  // Left temple arm (going back toward the ear)
  const templeGeo = new CylinderGeometry(0.01, 0.01, 0.35);
  const leftTemple = new Mesh(templeGeo, frameMat);
  leftTemple.rotation.x = Math.PI / 2;
  leftTemple.position.set(-0.29, 0.1, 0.2);
  leftTemple.renderOrder = 999;
  glassesGroup.add(leftTemple);

  // Right temple arm
  const rightTemple = new Mesh(templeGeo, frameMat);
  rightTemple.rotation.x = Math.PI / 2;
  rightTemple.position.set(0.29, 0.1, 0.2);
  rightTemple.renderOrder = 999;
  glassesGroup.add(rightTemple);

  return glassesGroup;
};

export const createAfroHair = () => {
  const hairGroup = new Group();
  hairGroup.name = "afro-hair";

  // Dark brownish-black hair color
  const hairMat = new MeshBasicMaterial({ color: 0x1a0a00 });

  // Cluster of small spheres to simulate dense afro / short natural hair
  const hairPositions: [number, number, number, number][] = [
    // Top cluster
    [0, 0.22, 0, 0.055],
    [-0.04, 0.215, 0.02, 0.048],
    [0.04, 0.215, 0.02, 0.048],
    [-0.035, 0.215, -0.02, 0.045],
    [0.035, 0.215, -0.02, 0.045],
    // Sides
    [-0.08, 0.175, 0.01, 0.04],
    [0.08, 0.175, 0.01, 0.04],
    [-0.075, 0.17, -0.02, 0.038],
    [0.075, 0.17, -0.02, 0.038],
    // Front
    [-0.03, 0.195, 0.07, 0.038],
    [0.03, 0.195, 0.07, 0.038],
    [0, 0.2, 0.075, 0.04],
    // Back
    [0, 0.19, -0.065, 0.042],
    [-0.035, 0.185, -0.055, 0.036],
    [0.035, 0.185, -0.055, 0.036],
    // Fill mid gaps
    [-0.055, 0.2, 0.04, 0.042],
    [0.055, 0.2, 0.04, 0.042],
    [-0.06, 0.19, -0.04, 0.038],
    [0.06, 0.19, -0.04, 0.038],
  ];

  for (const [x, y, z, r] of hairPositions) {
    const geo = new SphereGeometry(r, 6, 5);
    const sphere = new Mesh(geo, hairMat);
    sphere.position.set(x, y, z);
    hairGroup.add(sphere);
  }

  return hairGroup;
};

export const createArmTattoos = (side: "left" | "right", isUpper: boolean) => {
  const tattooGroup = new Group();
  tattooGroup.name = `tattoo-${side}-${isUpper ? 'upper' : 'lower'}`;

  // Dark ink color for tattoos
  const tattooMat = new MeshBasicMaterial({ color: 0x0a0a0a, side: DoubleSide });

  // Half-sleeve tattoo on the arm
  if (isUpper) {
    // Covers the lower half of the upper arm
    const upperSleeveGeo = new CylinderGeometry(0.033, 0.03, 0.1, 16, 1, true);
    const upperSleeve = new Mesh(upperSleeveGeo, tattooMat);
    upperSleeve.position.set(0, 0.04, 0);
    tattooGroup.add(upperSleeve);
  } else {
    // Covers the upper half of the forearm
    const lowerSleeveGeo = new CylinderGeometry(0.03, 0.025, 0.12, 16, 1, true);
    const lowerSleeve = new Mesh(lowerSleeveGeo, tattooMat);
    lowerSleeve.position.set(0, -0.05, 0);
    tattooGroup.add(lowerSleeve);
  }

  return tattooGroup;
};

let mesh: Mesh | null = null;
let rightHandBone: Bone | null = null;

const tIdleIntensity = { value: 0 };

const waypointsPosition = new Vector3();
const waypointsRotation = new Euler();
const transform = new Group();
const uniforms = { uProgress: { value: 0 }, uAmbientStrength: { value: 0 }, uSkinColor: { value: new Vector3(0.55, 0.35, 0.22) } };
const contactPosition = new Vector3(0, -13, 0);
const contactRotation = new Euler(0, -Math.PI, 0);

const init = () => {
  setupMesh();
  animations.init();
  face.init();
  avatarLeftDesktop.init();
  gsap.ticker.add(tick);
};

const getMaterial = (name: string): Material | null => {
  if (name === "face") return face.getMaterial();
  if (name === "head") {
    const texture = resources.items["head-texture"];
    texture.flipY = false;
    texture.colorSpace = LinearSRGBColorSpace;
    texture.generateMipmaps = false;
    return new ShaderMaterial({
      vertexShader: headVertexShader,
      fragmentShader: headFragmentShader,
      transparent: true,
      uniforms: {
        uHeadTexture: { value: texture },
        ...uniforms,
      },
    });
  }

  const tex = resources.items["matcap-black"];
  tex.colorSpace = LinearSRGBColorSpace;
  tex.generateMipmaps = false;

  return new ShaderMaterial({
    vertexShader: matcapVertexShader,
    fragmentShader: matcapFragmentShader,
    transparent: true,
    uniforms: {
      uMatcap: { value: tex },
      ...uniforms,
    },
  });
};

const assignMatcap = (child: Mesh): boolean => {
  let tex: Texture | null = null;

  if (child.name === "black") {
    tex = resources.items["matcap-black"];
  } else if (child.name === "gray") {
    // Change gray clothing to black
    tex = resources.items["matcap-black"];
  } else if (child.name === "skin") {
    tex = resources.items["matcap-skin"];
  } else if (child.name === "white") {
    // Change white clothing (shirt) to black
    tex = resources.items["matcap-black"];
  }

  if (tex) {
    tex.colorSpace = LinearSRGBColorSpace;
    child.userData.matcap = tex;
    return true;
  }

  return false;
};

const setupMesh = () => {
  if (mesh) return;
  const resource = resources.items["avatar-model"];
  mesh = cloneSkeleton(resource.scene.children[0]) as Mesh;

  mesh.frustumCulled = false;

  mesh.traverse((child) => {
    if (child instanceof Mesh) {
      const mat = getMaterial(child.name);
      if (!mat) return;
      child.material = mat;
      child.frustumCulled = false;
      child.renderOrder = child.name === "face" ? 25 : 24;

      const hasMatcap = assignMatcap(child);
      if (hasMatcap) {
        child.onBeforeRender = () => {
          child.material.uniforms.uMatcap.value = child.userData.matcap;
        };
      }
    }
  });

  const brain = mesh.getObjectByName("brain") as Mesh;
  if (brain) {
    mesh.remove(brain);
  }

  const headBone = mesh.getObjectByName("headBone") as Bone;
  if (headBone) {
    // Add afro hair to head bone
    const afroHair = createAfroHair();
    headBone.add(afroHair);
  }

  // Add tattoos to arm bones (bone names extracted from avatar.glb)
  const leftForeArmBone = mesh.getObjectByName("leftForeArmBone");
  if (leftForeArmBone) {
    const leftTattooLower = createArmTattoos("left", false);
    leftForeArmBone.add(leftTattooLower);
  }
  const leftArmBone = mesh.getObjectByName("leftArmBone");
  if (leftArmBone) {
    const leftTattooUpper = createArmTattoos("left", true);
    leftArmBone.add(leftTattooUpper);
  }

  const rightForearmBone = mesh.getObjectByName("rightForearmBone");
  if (rightForearmBone) {
    const rightTattooLower = createArmTattoos("right", false);
    rightForearmBone.add(rightTattooLower);
  }
  const rightarmBone = mesh.getObjectByName("rightarmBone");
  if (rightarmBone) {
    const rightTattooUpper = createArmTattoos("right", true);
    rightarmBone.add(rightTattooUpper);
  }

  mesh.rotation.z = 0;

  transform.add(mesh);

  rightHandBone = mesh.getObjectByName("bone-right-hand") as Bone;

  scene.instance.add(transform);
};

const tick = () => {
  animations.update();

  const isContact = sceneWeights.contact > 0.001;

  if (isContact) {
    transform.position.copy(contactPosition);
    transform.rotation.copy(contactRotation);
    uniforms.uProgress.value = 0;
    uniforms.uAmbientStrength.value = 0;
    transform.visible = true;
    return;
  }

  transform.position.copy(waypointsPosition);
  transform.rotation.copy(waypointsRotation);

  //uniforms.uProgress.value = sceneWeightsInOut.about.in * 1.1 - 0.1;
  uniforms.uProgress.value = aboutProgress.value * 1.1 - 0.1;
  uniforms.uAmbientStrength.value = sceneWeightsInOut.about.in;

  if (!mesh) return;
  if (uniforms.uProgress.value > 0.999 && sceneWeights.contact > 0.99) {
    mesh.visible = false;
  } else {
    mesh.visible = true;
  }
};

const destroy = () => {
  //mesh = null;
  //transform.clear();
  face.destroy();
  gsap.ticker.remove(tick);
};

export const avatar = {
  init,
  destroy,
  getMesh: () => mesh,
  getRightHandBone: () => rightHandBone,
  tIdleIntensity,
  waypointsPosition,
  waypointsRotation,
  uniforms,
  transform,
};
