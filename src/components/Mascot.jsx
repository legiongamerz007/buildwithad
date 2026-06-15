import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Mascot({ bodyColor = "#ff4ecd", speedMultiplier = 1, className = "" }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Refs for dynamic prop updates in the render loop
  const speedRef = useRef(speedMultiplier);
  const bodyMaterialRef = useRef(null);

  // Sync speed multiplier ref
  useEffect(() => {
    speedRef.current = speedMultiplier;
  }, [speedMultiplier]);

  // Sync body color dynamically
  useEffect(() => {
    if (bodyMaterialRef.current) {
      bodyMaterialRef.current.color.set(bodyColor);
      // Generate a slightly darker color for emissive
      const colorObj = new THREE.Color(bodyColor);
      colorObj.multiplyScalar(0.4);
      bodyMaterialRef.current.emissive.copy(colorObj);
    }
  }, [bodyColor]);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    let rect = container.getBoundingClientRect();
    let width = rect.width || window.innerWidth;
    let height = rect.height || window.innerHeight;

    const scene = new THREE.Scene();

    // Gradient sky background
    const bgCanvas = document.createElement("canvas");
    bgCanvas.width = 2;
    bgCanvas.height = 512;
    const bgCtx = bgCanvas.getContext("2d");
    const grad = bgCtx.createLinearGradient(0, 0, 0, 512);
    grad.addColorStop(0, "#090514");
    grad.addColorStop(0.35, "#1b0b38");
    grad.addColorStop(0.65, "#4c1d95");
    grad.addColorStop(0.85, "#db2777");
    grad.addColorStop(1, "#fbbf24");
    bgCtx.fillStyle = grad;
    bgCtx.fillRect(0, 0, 2, 512);
    const bgTexture = new THREE.CanvasTexture(bgCanvas);
    scene.background = bgTexture;

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.set(0, 0, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const pointLights = [];
    const lightsConfig = [
      { color: 0xff6bcb, pos: [4, 3, 5], i: 1.4 },
      { color: 0x38bdf8, pos: [-5, -1, 4], i: 1.2 },
      { color: 0xfbbf24, pos: [0, 5, 2], i: 0.9 },
      { color: 0x4ade80, pos: [-3, 3, -2], i: 0.7 },
    ];
    lightsConfig.forEach(({ color, pos, i }) => {
      const pl = new THREE.PointLight(color, i, 30);
      pl.position.set(...pos);
      scene.add(pl);
      pointLights.push(pl);
    });

    const mascot = new THREE.Group();
    scene.add(mascot);
    mascot.rotation.order = "YXZ";

    // Soft glow halo
    const haloGeo = new THREE.SphereGeometry(1.75, 32, 32);
    const haloMat = new THREE.MeshBasicMaterial({ color: 0xff4ecd, transparent: true, opacity: 0.12 });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    mascot.add(halo);

    // Main body
    const bodyGeo = new THREE.SphereGeometry(1.45, 64, 64);
    
    // Calculate initial emissive color based on bodyColor
    const initialColor = new THREE.Color(bodyColor);
    const emissiveColor = initialColor.clone().multiplyScalar(0.4);
    
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: initialColor,
      emissive: emissiveColor,
      emissiveIntensity: 0.25,
      metalness: 0.15,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      reflectivity: 1,
    });
    bodyMaterialRef.current = bodyMat; // Store ref for dynamic updates
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    mascot.add(body);

    // Cheek blushes
    const cheekGeo = new THREE.CircleGeometry(0.22, 32);
    const cheekMat = new THREE.MeshBasicMaterial({ color: 0xff8fab, transparent: true, opacity: 0.55 });
    [-0.75, 0.75].forEach((x) => {
      const cheek = new THREE.Mesh(cheekGeo, cheekMat);
      cheek.position.set(x, -0.15, 1.32);
      mascot.add(cheek);
    });

    // Orbit rings
    const ringColors = [0x38bdf8, 0xfbbf24, 0xa78bfa];
    const ringGeos = [];
    const ringMats = [];
    const rings = ringColors.map((color, i) => {
      const rGeo = new THREE.TorusGeometry(2.1 + i * 0.22, 0.045, 12, 80);
      const rMat = new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.85,
        metalness: 0.6,
        roughness: 0.2,
      });
      ringGeos.push(rGeo);
      ringMats.push(rMat);
      const ring = new THREE.Mesh(rGeo, rMat);
      ring.rotation.x = Math.PI / 2 + i * 0.35;
      ring.rotation.y = i * 0.5;
      scene.add(ring);
      return ring;
    });

    // Eyes
    const whiteGeo = new THREE.SphereGeometry(0.34, 32, 32);
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.35, metalness: 0 });
    const irisGeo = new THREE.SphereGeometry(0.2, 24, 24);
    const irisMat = new THREE.MeshStandardMaterial({ color: 0x6366f1, emissive: 0x4338ca, emissiveIntensity: 0.5 });
    const pupilGeo = new THREE.SphereGeometry(0.11, 20, 20);
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x020617, emissiveIntensity: 0.3 });
    const shineGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const shineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    function createEye(x) {
      const socket = new THREE.Group();
      socket.position.set(x, 0.28, 1.28);

      const white = new THREE.Mesh(whiteGeo, whiteMat);
      const iris = new THREE.Mesh(irisGeo, irisMat);
      iris.position.z = 0.18;

      const pupil = new THREE.Mesh(pupilGeo, pupilMat);
      pupil.position.z = 0.28;

      const shine = new THREE.Mesh(shineGeo, shineMat);
      shine.position.set(0.06, 0.06, 0.32);

      socket.add(white, iris, pupil, shine);
      return { socket, pupil, iris };
    }

    const eyeL = createEye(-0.48);
    const eyeR = createEye(0.48);
    mascot.add(eyeL.socket, eyeR.socket);

    // Smile
    const smileGeo = new THREE.TorusGeometry(0.28, 0.04, 8, 24, Math.PI);
    const smileMat = new THREE.MeshStandardMaterial({ color: 0x831843, roughness: 0.5 });
    const smile = new THREE.Mesh(smileGeo, smileMat);
    smile.position.set(0, -0.42, 1.22);
    smile.rotation.x = Math.PI;
    mascot.add(smile);

    // Colorful floating orbs
    const orbColors = [0xf472b6, 0x60a5fa, 0xfbbf24, 0x34d399, 0xc084fc, 0xfb7185];
    const orbGeoList = [];
    const orbMatList = [];
    const orbs = orbColors.map((color, i) => {
      const oGeo = new THREE.SphereGeometry(0.12 + (i % 3) * 0.05, 16, 16);
      const oMat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.9, metalness: 0.3, roughness: 0.2 });
      orbGeoList.push(oGeo);
      orbMatList.push(oMat);
      const orb = new THREE.Mesh(oGeo, oMat);
      const angle = (i / orbColors.length) * Math.PI * 2;
      orb.userData = { angle, radius: 2.8 + (i % 2) * 0.4, speed: 0.3 + i * 0.05, y: (i % 3 - 1) * 0.6 };
      scene.add(orb);
      return orb;
    });

    // Star particles
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
    const starMat = new THREE.PointsMaterial({ size: 0.06, vertexColors: true, transparent: true, opacity: 0.85, sizeAttenuation: true });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    function setPointer(clientX, clientY) {
      const containerRect = container.getBoundingClientRect();
      const relativeX = clientX - containerRect.left;
      const relativeY = clientY - containerRect.top;
      target.x = (relativeX / containerRect.width) * 2 - 1;
      target.y = 1 - (relativeY / containerRect.height) * 2;
    }

    const handleMouseMove = (e) => setPointer(e.clientX, e.clientY);
    const handleTouchMove = (e) => {
      if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    function aimPupil(pupil, iris) {
      const max = 0.09;
      const px = THREE.MathUtils.clamp(mouse.x * 0.1, -max, max);
      const py = THREE.MathUtils.clamp(-mouse.y * 0.08, -max, max);
      pupil.position.set(px, py, 0.28);
      iris.position.set(px * 0.6, py * 0.6, 0.18);
    }

    const clock = new THREE.Clock();
    let accumulatedTime = 0; // Accumulate time weighted by the speedMultiplier

    function aimHead() {
      mascot.rotation.y = mouse.x * 0.72;
      mascot.rotation.x = THREE.MathUtils.clamp(-mouse.y * 0.48, -0.52, 0.52);
      mascot.rotation.z = 0;
    }

    let animationFrameId;

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      const delta = clock.getDelta();
      // Accumulate time based on speed ref
      accumulatedTime += delta * speedRef.current;
      
      mouse.x += (target.x - mouse.x) * 0.1;
      mouse.y += (target.y - mouse.y) * 0.1;

      mascot.position.y = Math.sin(accumulatedTime * 1.2) * 0.12;
      aimHead();

      aimPupil(eyeL.pupil, eyeL.iris);
      aimPupil(eyeR.pupil, eyeR.iris);

      halo.scale.setScalar(1 + Math.sin(accumulatedTime * 2) * 0.04);
      body.material.emissiveIntensity = 0.22 + Math.sin(accumulatedTime * 1.5) * 0.08;

      rings.forEach((ring, i) => {
        ring.rotation.z = accumulatedTime * (0.25 + i * 0.08);
        ring.rotation.x = Math.PI / 2 + Math.sin(accumulatedTime * 0.5 + i) * 0.3;
      });

      orbs.forEach((orb) => {
        const { angle, radius, speed, y } = orb.userData;
        const a = angle + accumulatedTime * speed;
        orb.position.set(Math.cos(a) * radius, y + Math.sin(accumulatedTime * 1.4 + angle) * 0.35, Math.sin(a) * radius - 1);
      });

      stars.rotation.y = accumulatedTime * 0.015;
      stars.rotation.x = Math.sin(accumulatedTime * 0.1) * 0.05;

      renderer.render(scene, camera);
    }

    function onResize() {
      const innerRect = container.getBoundingClientRect();
      const w = innerRect.width || window.innerWidth;
      const h = innerRect.height || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", onResize);

      haloGeo.dispose();
      bodyGeo.dispose();
      cheekGeo.dispose();
      smileGeo.dispose();
      whiteGeo.dispose();
      irisGeo.dispose();
      pupilGeo.dispose();
      shineGeo.dispose();
      starGeo.dispose();
      ringGeos.forEach(g => g.dispose());
      orbGeoList.forEach(g => g.dispose());

      haloMat.dispose();
      bodyMat.dispose();
      cheekMat.dispose();
      smileMat.dispose();
      whiteMat.dispose();
      irisMat.dispose();
      pupilMat.dispose();
      shineMat.dispose();
      starMat.dispose();
      ringMats.forEach(m => m.dispose());
      orbMatList.forEach(m => m.dispose());

      bgTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className={`w-full h-full relative overflow-hidden select-none ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
