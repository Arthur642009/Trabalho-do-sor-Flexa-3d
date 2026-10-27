import * as THREE from "three";
import {
  brickTextures,
  floorTextures,
  brushedTexture,
  beltTexture,
  brandGlassTexture,
  lcdTexture,
  screenTexture,
  stationPlateTexture,
  hazardTexture,
  exitSignTexture,
  skyTexture,
} from "./textures.js";

export function createMaterials(renderer) {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());

  const brick = brickTextures(aniso, [1, 1]);
  const floor = floorTextures(aniso, [1, 1]);
  const brushed = brushedTexture(aniso);

  const tBrand = brandGlassTexture(aniso);
  const tScreen = screenTexture(aniso);
  const tExit = exitSignTexture(aniso);
  const tSky = skyTexture(aniso);
  const tHazard = hazardTexture(aniso);
  const tBelt = beltTexture(aniso);

  const mats = {
    aniso,
    textures: {
      belt: tBelt,
      brand: tBrand,
      screen: tScreen,
      hazard: tHazard,
      exit: tExit,
      sky: tSky,
      brickBase: brick,
      floorBase: floor,
    },
    floor: new THREE.MeshStandardMaterial({
      map: floor.map,
      roughnessMap: floor.roughnessMap,
      roughness: 0.82,
      metalness: 0.14,
      envMapIntensity: 0.7,
    }),
    brick: new THREE.MeshStandardMaterial({
      map: brick.map,
      bumpMap: brick.bumpMap,
      bumpScale: 0.35,
      roughness: 0.94,
      metalness: 0,
    }),
    concrete: new THREE.MeshStandardMaterial({ color: 0x3a3e43, roughness: 0.95 }),
    ceiling: new THREE.MeshStandardMaterial({ color: 0xb9bdbf, roughness: 0.95, metalness: 0.02 }),
    alu: new THREE.MeshStandardMaterial({
      map: brushed,
      color: 0xd6dade,
      metalness: 0.82,
      roughness: 0.42,
      envMapIntensity: 1.1,
    }),
    aluDark: new THREE.MeshStandardMaterial({
      map: brushed,
      color: 0x6d747c,
      metalness: 0.75,
      roughness: 0.46,
    }),
    steel: new THREE.MeshStandardMaterial({
      color: 0xd7dade,
      metalness: 0.95,
      roughness: 0.24,
      envMapIntensity: 1.5,
    }),
    traySteel: new THREE.MeshStandardMaterial({
      color: 0xd2d7dd,
      metalness: 1,
      roughness: 0.15,
      envMapIntensity: 2,
    }),
    chrome: new THREE.MeshStandardMaterial({
      color: 0xe8ebee,
      metalness: 1,
      roughness: 0.1,
      envMapIntensity: 2,
    }),
    whitePaint: new THREE.MeshStandardMaterial({ color: 0xe9eaec, roughness: 0.5, metalness: 0.08 }),
    offWhite: new THREE.MeshStandardMaterial({ color: 0xf1f2f3, roughness: 0.44, metalness: 0.04 }),
    lightGrey: new THREE.MeshStandardMaterial({ color: 0xc8ccd1, roughness: 0.6, metalness: 0.1 }),
    darkGrey: new THREE.MeshStandardMaterial({ color: 0x4c5259, roughness: 0.62, metalness: 0.3 }),
    graphite: new THREE.MeshStandardMaterial({ color: 0x2a2e33, roughness: 0.58, metalness: 0.35 }),
    blackPlastic: new THREE.MeshStandardMaterial({ color: 0x15171a, roughness: 0.62, metalness: 0.12 }),
    rubber: new THREE.MeshStandardMaterial({ color: 0x101113, roughness: 0.92 }),
    blueTube: new THREE.MeshStandardMaterial({ color: 0x1f63d8, roughness: 0.5, metalness: 0.05 }),
    blackCable: new THREE.MeshStandardMaterial({ color: 0x191b1e, roughness: 0.8 }),
    glass: new THREE.MeshPhysicalMaterial({
      color: 0x9fc0cc,
      metalness: 0,
      roughness: 0.06,
      transparent: true,
      opacity: 0.2,
      envMapIntensity: 1.6,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
    glassClear: new THREE.MeshPhysicalMaterial({
      color: 0xc4d8dd,
      metalness: 0,
      roughness: 0.04,
      transparent: true,
      opacity: 0.13,
      envMapIntensity: 1.8,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
    redPaint: new THREE.MeshStandardMaterial({ color: 0xc81020, roughness: 0.45, metalness: 0.1 }),
    senaiRed: new THREE.MeshStandardMaterial({ color: 0xd4141f, roughness: 0.42, metalness: 0.1 }),
    yellow: new THREE.MeshStandardMaterial({ color: 0xe8b400, roughness: 0.5, metalness: 0.1 }),
    hazard: new THREE.MeshStandardMaterial({ map: tHazard, roughness: 0.6 }),
    bluePlastic: new THREE.MeshStandardMaterial({ color: 0x2f6bdc, roughness: 0.45 }),
    greenPlastic: new THREE.MeshStandardMaterial({ color: 0x2f9e63, roughness: 0.45 }),
    pinkPlastic: new THREE.MeshStandardMaterial({ color: 0xff2f6a, roughness: 0.4 }),
    orangePlastic: new THREE.MeshStandardMaterial({ color: 0xe2562a, roughness: 0.5 }),
    cardboard: new THREE.MeshStandardMaterial({ color: 0x9c7a4f, roughness: 0.92 }),
    benchTop: new THREE.MeshStandardMaterial({ color: 0xd9dde0, roughness: 0.55, metalness: 0.1 }),
    screen: new THREE.MeshStandardMaterial({
      map: tScreen,
      emissive: 0xffffff,
      emissiveMap: tScreen,
      emissiveIntensity: 0.8,
      roughness: 0.25,
      metalness: 0.2,
    }),
    brand: new THREE.MeshStandardMaterial({
      map: tBrand,
      emissive: 0xffffff,
      emissiveMap: tBrand,
      emissiveIntensity: 0.22,
      roughness: 0.3,
      metalness: 0.05,
    }),
    sky: new THREE.MeshBasicMaterial({ map: tSky, toneMapped: false }),
    exit: new THREE.MeshStandardMaterial({
      map: tExit,
      emissive: 0xffffff,
      emissiveMap: tExit,
      emissiveIntensity: 0.7,
      roughness: 0.5,
    }),
    lamp: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xfff3e0,
      emissiveIntensity: 2.8,
      roughness: 0.4,
    }),
    lampCool: new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xdcecff,
      emissiveIntensity: 2,
      roughness: 0.4,
    }),
    ledGreen: new THREE.MeshStandardMaterial({ color: 0x14261a, emissive: 0x3ce07a, emissiveIntensity: 2.4 }),
    ledRed: new THREE.MeshStandardMaterial({ color: 0x2a0e10, emissive: 0xff2b2b, emissiveIntensity: 2.4 }),
    ledAmber: new THREE.MeshStandardMaterial({ color: 0x2b220e, emissive: 0xffb020, emissiveIntensity: 2.4 }),
    ledBlue: new THREE.MeshStandardMaterial({ color: 0x0f1c33, emissive: 0x4b93ff, emissiveIntensity: 2.6 }),
    ledOff: new THREE.MeshStandardMaterial({ color: 0x2a2c2f, roughness: 0.5 }),
    blackFabric: new THREE.MeshStandardMaterial({ color: 0x1d2025, roughness: 0.9 }),
    chairBlack: new THREE.MeshStandardMaterial({ color: 0x22252a, roughness: 0.66, metalness: 0.12 }),
    monitorBlack: new THREE.MeshStandardMaterial({ color: 0x1b1d20, roughness: 0.55, metalness: 0.2 }),
    deskWhite: new THREE.MeshStandardMaterial({ color: 0xe4e7ea, roughness: 0.4, metalness: 0.06 }),
  };

  return mats;
}

export function makePlateMaterial(renderer, label, sub) {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return new THREE.MeshStandardMaterial({
    map: stationPlateTexture(label, sub, aniso),
    roughness: 0.55,
    metalness: 0.05,
  });
}

export function makeLCDMaterial(renderer, lines) {
  const aniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  const tex = lcdTexture(lines, aniso);
  return new THREE.MeshStandardMaterial({
    map: tex,
    emissive: 0xffffff,
    emissiveMap: tex,
    emissiveIntensity: 0.95,
    roughness: 0.3,
  });
}
