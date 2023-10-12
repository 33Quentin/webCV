import * as THREE from 'three';

// Setup
document.addEventListener('DOMContentLoaded', function() {
  
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);


renderer.render(scene, camera);

// Torus (anneau)

const torusTexture = new THREE.TextureLoader().load('dustv.jpg');

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(5, 0.5, 2, 100),
  new THREE.MeshStandardMaterial({ 
    map: torusTexture 
  })
);

torus.rotation.x = Math.PI / 1.85; // Inclinaison de 45 degrés


scene.add(torus);
//scene.remove(torus);


/*
// Créer l'anneau de cubes
const numCubes = 15; // Nombre de cubes dans l'anneau
const radius = 5;    // Rayon de l'anneau
const yOffset = 6;   // Décalage sur l'axe Y
const zOffset = 3;   // Décalage sur l'axe Z


for (let i = 0; i < numCubes; i++) {
  const cube = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7), new THREE.MeshStandardMaterial({ color: 0xff6347 }));

  const angle = (i / numCubes) * Math.PI * 2; // Angle pour positionner les cubes en forme d'anneau
  const x = Math.cos(angle) * radius;
  const y = yOffset * Math.sin(angle); // Utiliser le décalage sur l'axe Y
  const z = zOffset * Math.cos(angle); // Utiliser le décalage sur l'axe Z



  cube.position.set(x, z, y);
  scene.add(cube);
}
// Définir la position initiale de l'anneau autour de "quentin"
const ringCenter = new THREE.Object3D();
scene.add(ringCenter);

ringCenter.add(...scene.children.filter(obj => obj instanceof THREE.Mesh));
*/

// Lumières

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(pointLight, ambientLight);

// rappel

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)



function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 1 });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(300).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Avatar

const quentinTexture = new THREE.TextureLoader().load('quentin.jpg');

const quentin = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: quentinTexture }));

scene.add(quentin);
quentin.position.z = -5;
quentin.position.x = 2;

// Centrer le torus sur l'avatar "quentin"
const ringCenter = new THREE.Object3D();
scene.add(ringCenter);

ringCenter.add(torus);
quentin.position.y = 0; // Ajustez la position Y de quentin selon vos besoins
ringCenter.position.copy(quentin.position);

// Reculer toute la scène
scene.position.z = -5;

// Lune---------------------------------------------------------------------------------------------------------------------

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

// planete mars

const marsTexture = new THREE.TextureLoader().load('mars.jpg');
//const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(5, 64, 32),
  new THREE.MeshStandardMaterial({
    map: marsTexture,
    normalMap: normalTexture,
  })
);

scene.add(mars);

// planete terre

const terreTexture = new THREE.TextureLoader().load('terre.jpg');
//const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const terre = new THREE.Mesh(
  new THREE.SphereGeometry(2, 64, 32),
  new THREE.MeshStandardMaterial({
    map: terreTexture,
    normalMap: normalTexture,
  })
);

scene.add(terre);

// planete saturne

const saturneTexture = new THREE.TextureLoader().load('saturne.jpg');
//const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const saturne = new THREE.Mesh(
  new THREE.SphereGeometry(3, 64, 32),
  new THREE.MeshStandardMaterial({
    map: saturneTexture,
    normalMap: normalTexture,
  })
);

scene.add(saturne);

// jupiter

const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6, 64, 32),
  new THREE.MeshStandardMaterial({
    map: jupiterTexture,
    normalMap: normalTexture,
  })
);

scene.add(jupiter);

//  uranus

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(5, 64, 32),
  new THREE.MeshStandardMaterial({
    map: uranusTexture,
    normalMap: normalTexture,
  })
);

scene.add(uranus);



// position des éléments -------------------------------------------------------

moon.position.z = 30;
moon.position.setX(-10);

quentin.position.z = -5;
quentin.position.x = 2;

mars.position.z = -15;
mars.position.y = 5
mars.position.setX(30)

terre.position.z = -15;
terre.position.y = -15
terre.position.setX(-30)

saturne.position.z = -55;
saturne.position.y = 20
saturne.position.setX(-30)

jupiter.position.z = 55;
jupiter.position.y = -1
jupiter.position.setX(-15);

uranus.position.z = -135;
uranus.position.y = -80
uranus.position.setX(-30);





// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  quentin.rotation.y += 0.01;


  

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;

// Récupérer les éléments que vous souhaitez animer
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const blockquotes = document.querySelectorAll('blockquote');

// Fonction pour vérifier si un élément est dans la vue
function isElementInViewport(element, offset) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Fonction pour gérer l'animation
function handleElementAnimation(element, offset) {
  if (isElementInViewport(element, offset)) {
    element.classList.add('fade-in-from-background');  // Nouvelle classe pour l'animation
    element.classList.remove('fade-out');
  } else {
    element.classList.add('fade-out');
    element.classList.remove('fade-in-from-background'); // Assurez-vous que la classe d'apparition est supprimée
  }
}

// Appel de la fonction pour le header
handleElementAnimation(header, 150);

// Appel de la fonction pour chaque section
sections.forEach(section => {
  handleElementAnimation(section, 150);
});

// Appel de la fonction pour chaque blockquote
blockquotes.forEach(blockquote => {
  handleElementAnimation(blockquote, 150);
});

}

document.body.onscroll = moveCamera;
moveCamera();


// Animation Loop-------------------------------------------------------------

function animate() {
  requestAnimationFrame(animate);
  quentin.rotation.y += 0.01;
  //ringCenter.rotation.y += 0.01;
  

  //torus.rotation.x += 0.01;
  //torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;
  mars.rotation.x += 0.008;
  jupiter.rotation.y += 0.007;
  saturne.rotation.y += 0.007;
  saturne.rotation.z += 0.007;
  terre.rotation.y += 0.006;
  uranus.rotation.y += 0.007;

  
  

  renderer.render(scene, camera);
}

animate();
});

// bouton email-------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const openEmailModalButton = document.getElementById('openEmailModal');

  openEmailModalButton.addEventListener('click', function() {
    // Ouvrez la fenêtre d'envoi d'e-mail ici
    window.open('mailto:quentincrouz@hotmail.fr');
  });
});
