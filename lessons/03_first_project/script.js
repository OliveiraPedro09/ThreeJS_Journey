import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl'); // * Select canvas with class webgl


// Scene
const scene = new THREE.Scene();


// Create Mesh (geometry + material)
const geometry = new THREE.BoxGeometry(1, 1, 1); // * Width, Height, Depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material); // * Go in this order
// * Add mesh to scene
scene.add(mesh);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera // * PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height); // ! 75 FOV Not Recommended, but better for begginers
camera.position.z = 3; // * Move camera back to see the mesh
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)




