/* BuildWithAD — colorful 3D mascot that follows your cursor */
(function () {
  const canvas = document.getElementById("demo-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();

  // Gradient sky background
  const bgCanvas = document.createElement("canvas");
  bgCanvas.width = 2;
  bgCanvas.height = 512;
  const bgCtx = bgCanvas.getContext("2d");
  const grad = bgCtx.createLinearGradient(0, 0, 0, 512);
  grad.addColorStop(0, "#1e0a3c");
  grad.addColorStop(0.45, "#4c1d95");
  grad.addColorStop(0.75, "#db2777");
  grad.addColorStop(1, "#f97316");
  bgCtx.fillStyle = grad;
  bgCtx.fillRect(0, 0, 2, 512);
  scene.background = new THREE.CanvasTexture(bgCanvas);

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 6);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;

  // Lights — vivid & warm
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const lights = [
    { color: 0xff6bcb, pos: [4, 3, 5], i: 1.4 },
    { color: 0x38bdf8, pos: [-5, -1, 4], i: 1.2 },
    { color: 0xfbbf24, pos: [0, 5, 2], i: 0.9 },
    { color: 0x4ade80, pos: [-3, 3, -2], i: 0.7 },
  ];
  lights.forEach(({ color, pos, i }) => {
    const pl = new THREE.PointLight(color, i, 30);
    pl.position.set(...pos);
    scene.add(pl);
  });

  const mascot = new THREE.Group();
  const facePivot = new THREE.Group();
  facePivot.add(mascot);
  scene.add(facePivot);

  // Eyes sit on +Z; pivot lookAt uses -Z toward target, so flip mascot 180°
  mascot.rotation.y = Math.PI;

  // Soft glow halo
  const halo = new THREE.Mesh(
    new THREE.SphereGeometry(1.75, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xff4ecd, transparent: true, opacity: 0.12 })
  );
  mascot.add(halo);

  // Main body — glossy candy gradient feel via material + lights
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(1.45, 64, 64),
    new THREE.MeshPhysicalMaterial({
      color: 0xff5ea8,
      emissive: 0x9d174d,
      emissiveIntensity: 0.25,
      metalness: 0.15,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      reflectivity: 1,
    })
  );
  mascot.add(body);

  // Cheek blushes
  [-0.75, 0.75].forEach((x) => {
    const cheek = new THREE.Mesh(
      new THREE.CircleGeometry(0.22, 32),
      new THREE.MeshBasicMaterial({ color: 0xff8fab, transparent: true, opacity: 0.55 })
    );
    cheek.position.set(x, -0.15, 1.32);
    mascot.add(cheek);
  });

  // Orbit rings
  const ringColors = [0x38bdf8, 0xfbbf24, 0xa78bfa];
  const rings = ringColors.map((color, i) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.1 + i * 0.22, 0.045, 12, 80),
      new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.85,
        metalness: 0.6,
        roughness: 0.2,
      })
    );
    ring.rotation.x = Math.PI / 2 + i * 0.35;
    ring.rotation.y = i * 0.5;
    scene.add(ring);
    return ring;
  });

  function createEye(x) {
    const socket = new THREE.Group();
    socket.position.set(x, 0.28, 1.28);

    const white = new THREE.Mesh(
      new THREE.SphereGeometry(0.34, 32, 32),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35, metalness: 0 })
    );

    const iris = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 24, 24),
      new THREE.MeshStandardMaterial({ color: 0x6366f1, emissive: 0x4338ca, emissiveIntensity: 0.5 })
    );
    iris.position.z = 0.18;

    const pupil = new THREE.Mesh(
      new THREE.SphereGeometry(0.11, 20, 20),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.3 })
    );
    pupil.position.z = 0.28;

    const shine = new THREE.Mesh(
      new THREE.SphereGeometry(0.045, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    shine.position.set(0.06, 0.06, 0.32);

    socket.add(white, iris, pupil, shine);
    return { socket, pupil, iris };
  }

  const eyeL = createEye(-0.48);
  const eyeR = createEye(0.48);
  mascot.add(eyeL.socket, eyeR.socket);

  // Smile
  const smile = new THREE.Mesh(
    new THREE.TorusGeometry(0.28, 0.04, 8, 24, Math.PI),
    new THREE.MeshStandardMaterial({ color: 0x831843, roughness: 0.5 })
  );
  smile.position.set(0, -0.42, 1.22);
  smile.rotation.x = Math.PI;
  mascot.add(smile);

  // Colorful floating orbs
  const orbColors = [0xf472b6, 0x60a5fa, 0xfbbf24, 0x34d399, 0xc084fc, 0xfb7185];
  const orbs = orbColors.map((color, i) => {
    const orb = new THREE.Mesh(
      new THREE.SphereGeometry(0.12 + (i % 3) * 0.05, 16, 16),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.9, metalness: 0.3, roughness: 0.2 })
    );
    const angle = (i / orbColors.length) * Math.PI * 2;
    orb.userData = { angle, radius: 2.8 + (i % 2) * 0.4, speed: 0.3 + i * 0.05, y: (i % 3 - 1) * 0.6 };
    scene.add(orb);
    return orb;
  });

  // Star particles — multi-color
  const starCount = 1200;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  const palette = [
    [1, 0.45, 0.75],
    [0.4, 0.75, 1],
    [1, 0.85, 0.4],
    [0.55, 1, 0.7],
    [0.75, 0.55, 1],
  ];
  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14 - 4;
    const c = palette[i % palette.length];
    colors[i * 3] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const stars = new THREE.Points(
    starGeo,
    new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true })
  );
  scene.add(stars);

  const mouse = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  const lookPoint = new THREE.Vector3();
  const tmp = new THREE.Vector3();

  function setPointer(clientX, clientY) {
    target.x = (clientX / window.innerWidth) * 2 - 1;
    // Screen Y: down = negative NDC (standard Three.js)
    target.y = -(clientY / window.innerHeight) * 2 + 1;
  }

  window.addEventListener("mousemove", (e) => setPointer(e.clientX, e.clientY));
  window.addEventListener("touchmove", (e) => {
    if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });

  /** Convert NDC mouse to a 3D point the mascot should look at */
  function getLookTarget() {
    tmp.set(mouse.x, mouse.y, 0.5).unproject(camera);
    const dir = tmp.sub(camera.position).normalize();
    return camera.position.clone().add(dir.multiplyScalar(10));
  }

  function aimPupil(eyeSocket, pupil, iris, worldTarget) {
    const local = eyeSocket.worldToLocal(worldTarget.clone());
    const max = 0.09;
    const nx = THREE.MathUtils.clamp(local.x * 0.12, -max, max);
    const ny = THREE.MathUtils.clamp(local.y * 0.12, -max, max);
    pupil.position.set(nx, ny, 0.28);
    iris.position.set(nx * 0.6, ny * 0.6, 0.18);
  }

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    mouse.x += (target.x - mouse.x) * 0.1;
    mouse.y += (target.y - mouse.y) * 0.1;

    lookPoint.copy(getLookTarget());

    // Head follows cursor via lookAt (correct Y — no inversion)
    tmp.copy(lookPoint);
    tmp.y += 0.1;
    facePivot.lookAt(tmp);

    // Keep tilt natural
    facePivot.rotation.x = THREE.MathUtils.clamp(facePivot.rotation.x, -0.45, 0.45);
    facePivot.rotation.z = THREE.MathUtils.clamp(facePivot.rotation.z, -0.2, 0.2);

    facePivot.position.y = Math.sin(t * 1.2) * 0.12;

    aimPupil(eyeL.socket, eyeL.pupil, eyeL.iris, lookPoint);
    aimPupil(eyeR.socket, eyeR.pupil, eyeR.iris, lookPoint);

    halo.scale.setScalar(1 + Math.sin(t * 2) * 0.04);
    body.material.emissiveIntensity = 0.22 + Math.sin(t * 1.5) * 0.08;

    rings.forEach((ring, i) => {
      ring.rotation.z = t * (0.25 + i * 0.08);
      ring.rotation.x = Math.PI / 2 + Math.sin(t * 0.5 + i) * 0.3;
    });

    orbs.forEach((orb) => {
      const { angle, radius, speed, y } = orb.userData;
      const a = angle + t * speed;
      orb.position.set(Math.cos(a) * radius, y + Math.sin(t * 1.4 + angle) * 0.35, Math.sin(a) * radius - 1);
    });

    stars.rotation.y = t * 0.015;
    stars.rotation.x = Math.sin(t * 0.1) * 0.05;

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
