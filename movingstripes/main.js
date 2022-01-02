import './style.scss'
import { gsap } from 'gsap';
import * as THREE from 'three';


let timeline = gsap.timeline().repeat(-1);
timeline
    .to("html", { "--col2": "2fr", duration: 5 })
    .to("html", { "--col2": "1fr", duration: 5 });

let timeline2 = gsap.timeline().repeat(-1);
timeline2
    .to("html", { "--col4": "0.5fr", duration: 3 })
    .to("html", { "--col4": "1fr", duration: 3 })


window.THREE = THREE;

const scene = new THREE.Scene;
const camera = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 1000);
camera.position.set(0, 0, 500);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set(-200, -200, 0);
scene.add( directionalLight );


const material = new THREE.MeshPhysicalMaterial({
    color: 0x335577
});

const cube = new THREE.BoxBufferGeometry(200, 200, 200);
cube.rotateZ(Math.PI/4);
window.cube = cube;

const mesh = new THREE.Mesh(cube, material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
onresize = () => {
    renderer.setSize(innerWidth, innerHeight);
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
};
document.body.appendChild(renderer.domElement);

renderer.domElement.style.position = "fixed";
Object.assign(
    renderer.domElement.style, 
    {
        left: 0,
        top: 0
    }
);


gsap.ticker.add(render);
function render(time) {
    cube.rotateY(Math.PI / 360);
    renderer.render(scene, camera);
}
