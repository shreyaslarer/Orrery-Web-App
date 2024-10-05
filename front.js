// Initialize FullCalendar
document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('events-calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        events: [
            { title: 'Meteor Shower', date: '2024-10-10' },
            { title: 'Solar Eclipse', date: '2024-10-14' },
        ],
    });
    calendar.render();
});

// Initialize 3D Orrery (Placeholder for 3D implementation)
const orreryContainer = document.getElementById('orrery-container');

// Function to setup 3D scene
function initOrrery() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, orreryContainer.clientWidth / orreryContainer.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(orreryContainer.clientWidth, orreryContainer.clientHeight);
    orreryContainer.appendChild(renderer.domElement);

    // Create celestial bodies (Placeholder for actual models)
    const geometry = new THREE.SphereGeometry(0.5, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const planet = new THREE.Mesh(geometry, material);
    scene.add(planet);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        planet.rotation.y += 0.01; // Rotate planet
        renderer.render(scene, camera);
    }

    animate();
}

// Add Time Control Functionality
document.getElementById('rewind-btn').onclick = () => {
    console.log('Rewind Time'); // Implement rewind functionality
};

document.getElementById('fast-forward-btn').onclick = () => {
    console.log('Fast Forward Time'); // Implement fast forward functionality
};

document.getElementById('ar-demo-btn').onclick = () => {
    console.log('Launching AR Experience'); // Implement AR functionality
};

document.getElementById('start-tour-btn').onclick = () => {
    console.log('Starting Educational Tour'); // Implement educational tour functionality
};

// Menu toggle functionality
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};

// Call init function
initOrrery();

//rewind and forward
function decrease() {
    const slider = document.getElementById('time-slider');
    let currentValue = parseInt(slider.value);
    if (currentValue > slider.min) {
        slider.value = currentValue - 5;  // Decrease by 5 (You can adjust the step)
    }
}

// Function to increase the slider value
function increase() {
    const slider = document.getElementById('time-slider');
    let currentValue = parseInt(slider.value);
    if (currentValue < slider.max) {
        slider.value = currentValue + 5;  // Increase by 5 (You can adjust the step)
    }
}



