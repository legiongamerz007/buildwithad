/* BuildWithAD — 3D demo: interactive orb that follows cursor */
(function () {
  const canvas = document.getElementById("demo-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x06060a, 0.045);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5.5;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x06060a, 1);

  // Lights
  scene.add(new THREE.AmbientLight(0xffffff, 0.35));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(4, 6, 5);
  scene.add(keyLight);
  const rim = new THREE.PointLight(0x818cf8, 2.2, 20);
  rim.position.set(-3, 2, 2);
  scene.add(rim);
  const rim2 = new THREE.PointLight(0x38bdf8, 1.4, 20);
  rim2.position.set(3, -2, 3);
  scene.add(rim2);

  // Main head group
  const head = new THREE.Group();
  scene.add(head);

  const headGeo = new THREE.SphereGeometry(1.35, 64, 64);
  const headMat = new THREE.MeshPhysicalMaterial({
    color: 0x1a1a24,
    metalness: 0.65,
    roughness: 0.25,
    clearcoat: 0.9,
    clearcoatRoughness: 0.15,
  });
  const headMesh = new THREE.Mesh(headGeo, headMat);
  head.add(headMesh);

  // Visor ring
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.04, 16, 100),
    new THREE.MeshStandardMaterial({ color: 0x6366f1, emissive: 0x4338ca, emissiveIntensity: 0.6, metalness: 0.9, roughness: 0.2 })
  );
  ring.rotation.x = Math.PI / 2;
  head.add(ring);

  function createEye(x) {
    const g = new THREE.Group();
    g.position.set(x, 0.35, 1.15);
    const white = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.1, roughness: 0.4 })
    );
    const pupil = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x6366f1, emissive: 0x4f46e5, emissiveIntensity: 0.8 })
    );
    pupil.position.z = 0.12;
    g.add(white);
    g.add(pupil);
    return { group: g, pupil };
  }

  const eyeL = createEye(-0.42);
  const eyeR = createEye(0.42);
  head.add(eyeL.group);
  head.add(eyeR.group);

  // Particles
  const pCount = 800;
  const pPos = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount * 3; i++) pPos[i] = (Math.random() - 0.5) * 14;
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
  const particles = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: 0x818cf8, size: 0.025, transparent: true, opacity: 0.55 })
  );
  scene.add(particles);

  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  window.addEventListener("touchmove", (e) => {
    if (!e.touches[0]) return;
    target.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
    target.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    mouse.x += (target.x - mouse.x) * 0.08;
    mouse.y += (target.y - mouse.y) * 0.08;

    head.rotation.y = mouse.x * 0.55;
    head.rotation.x = mouse.y * 0.35;
    head.position.y = Math.sin(t * 0.8) * 0.08;

    const px = mouse.x * 0.06;
    const py = mouse.y * 0.04;
    eyeL.pupil.position.x = px;
    eyeL.pupil.position.y = py;
    eyeR.pupil.position.x = px;
    eyeR.pupil.position.y = py;

    ring.rotation.z = t * 0.15;
    particles.rotation.y = t * 0.02;

    renderer.render(scene, camera);
  }

  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  animate();
})();
