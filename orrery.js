import * as THREE from "https://cdn.skypack.dev/three@0.129.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";

let scene, camera, renderer, controls, skybox;
let planets = [];
let viewMode = '3D'; // Default view mode

// Planet data
const planetData = [
  { name: 'sun', radius: 20, texture: "../img/sun_hd.jpg", revolutionSpeed: 0 },
  { name: 'mercury', radius: 2, texture: "../img/mercury_hd.jpg", orbitRadius: 50, revolutionSpeed: 2 },
  { name: 'venus', radius: 3, texture: "../img/venus_hd.jpg", orbitRadius: 60, revolutionSpeed: 1.5 },
  { name: 'earth', radius: 4, texture: "../img/earth_hd.jpg", orbitRadius: 70, revolutionSpeed: 1 },
  { name: 'mars', radius: 3.5, texture: "../img/mars_hd.jpg", orbitRadius: 80, revolutionSpeed: 0.8 },
  { name: 'jupiter', radius: 10, texture: "../img/jupiter_hd.jpg", orbitRadius: 100, revolutionSpeed: 0.7 },
  { name: 'saturn', radius: 8, texture: "../img/saturn_hd.jpg", orbitRadius: 120, revolutionSpeed: 0.6 },
  { name: 'uranus', radius: 6, texture: "../img/uranus_hd.jpg", orbitRadius: 140, revolutionSpeed: 0.5 },
  { name: 'neptune', radius: 5, texture: "../img/neptune_hd.jpg", orbitRadius: 160, revolutionSpeed: 0.4 },
];

function createMaterialArray() {
  const skyboxImagepaths = [
    '../img/skybox/space_ft.png',
    '../img/skybox/space_bk.png',
    '../img/skybox/space_up.png',
    '../img/skybox/space_dn.png',
    '../img/skybox/space_rt.png',
    '../img/skybox/space_lf.png'
  ];
  return skyboxImagepaths.map(image => {
    let texture = new THREE.TextureLoader().load(image);
    return new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide });
  });
}

function setSkyBox() {
  const materialArray = createMaterialArray();
  let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
  skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
}

function loadPlanetTexture(texture, radius, widthSegments, heightSegments, meshType) {
  const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
  const loader = new THREE.TextureLoader();
  const planetTexture = loader.load(texture);
  const material = meshType === 'standard'
      ? new THREE.MeshStandardMaterial({ map: planetTexture })
      : new THREE.MeshBasicMaterial({ map: planetTexture });

  const planet = new THREE.Mesh(geometry, material);
  return planet;
}

function createRing(innerRadius) {
  let outerRadius = innerRadius - 0.1;
  let thetaSegments = 100;
  const geometry = new THREE.RingGeometry(innerRadius, outerRadius, thetaSegments);
  const material = new THREE.MeshBasicMaterial({ color: '#ffffff', side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  mesh.rotation.x = Math.PI / 2;
  return mesh;
}

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 100;

  setSkyBox();

  // Load planets and add them to the scene
  planetData.forEach(data => {
    let planet = loadPlanetTexture(data.texture, data.radius, 100, 100, data.name === 'sun' ? 'basic' : 'standard');
    planets.push({ mesh: planet, orbitRadius: data.orbitRadius, speed: data.revolutionSpeed });
    scene.add(planet);
  });

  // Add light from the sun
  const sunLight = new THREE.PointLight(0xffffff, 1, 0);
  sunLight.position.copy(planets[0].mesh.position);
  scene.add(sunLight);

  // Create orbit rings
  planetData.forEach(data => {
    if (data.orbitRadius) {
      createRing(data.orbitRadius);
    }
  });

  // Initialize renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 12;
  controls.maxDistance = 1000;

  // Set up event listeners for buttons
  document.getElementById('view3D').addEventListener('click', () => switchView('3D'));
  document.getElementById('view2D').addEventListener('click', () => switchView('2D'));

  animate();
}

function switchView(mode) {
  viewMode = mode;
  if (viewMode === '2D') {
    camera.position.set(0, 100, 0); // Position the camera for top-down 2D view
    camera.rotation.set(-Math.PI / 2, 0, 0); // Look straight down
    controls.enableZoom = false; // Disable zoom in 2D view
    controls.enablePan = false;  // Disable panning in 2D view
  } else {
    camera.position.set(0, 0, 100); // Reset camera position for 3D view
    camera.rotation.set(0, 0, 0); // Reset rotation for 3D view
    controls.enableZoom = true; // Enable zoom in 3D view
    controls.enablePan = true;  // Enable panning in 3D view
  }
}

function planetRevolver(time, planet, orbitRadius) {
  if (planet.orbitRadius) {
    let orbitSpeedMultiplier = 0.001;
    const planetAngle = time * orbitSpeedMultiplier * planet.speed;
    planet.mesh.position.x = planets[0].mesh.position.x + orbitRadius * Math.cos(planetAngle);
    planet.mesh.position.z = planets[0].mesh.position.z + orbitRadius * Math.sin(planetAngle);
  }
}

function animate(time) {
  requestAnimationFrame(animate);

  // Rotate the planets
  const rotationSpeed = 0.005;
  planets.forEach(planet => {
    planet.mesh.rotation.y += rotationSpeed;
    planetRevolver(time, planet, planet.orbitRadius);
  });

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
