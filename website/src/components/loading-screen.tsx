"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";

const SESSION_KEY = "fourshots-loaded";
const TICKER_LINES = [
  "Pulling first shot…",
  "Pulling second shot…",
  "Pulling third shot…",
  "Pulling fourth shot — nothing less.",
];

export default function LoadingScreen() {
  const [shouldRun, setShouldRun] = useState(false);
  const [visible, setVisible] = useState(true);
  const [wiping, setWiping] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLSpanElement>(null);
  const pipRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Decide once, synchronously on mount, whether to play the loader at all —
  // avoids a flash of the full-screen overlay on every client-side navigation.
  // sessionStorage isn't available during SSR, so (same as the cart's
  // localStorage hydration) this has to be read post-mount, in an effect.
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }
    setShouldRun(true);
  }, []);

  useEffect(() => {
    if (!shouldRun || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const size = 230;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
    camera.position.set(0, 0, 4.2);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size, size);

    const geometry = new THREE.SphereGeometry(1.15, 64, 64);
    const texture = new THREE.TextureLoader().load("/images/shot-ball.png");
    texture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      metalness: 0.65,
      roughness: 0.22,
      emissive: new THREE.Color("#4a1f5e"),
      emissiveIntensity: 0.08,
    });

    const ball = new THREE.Mesh(geometry, material);
    scene.add(ball);
    scene.add(new THREE.AmbientLight("#ffe2ef", 0.55));

    const pinkLight = new THREE.PointLight("#e8649a", 18, 12);
    const purpleLight = new THREE.PointLight("#6b2d8c", 14, 12);
    const creamRim = new THREE.PointLight("#f4ecde", 6, 12);
    creamRim.position.set(-3, 1, 2);
    scene.add(pinkLight, purpleLight, creamRim);

    let spinSpeed = 0.012;
    let clock = 0;
    let raf = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      clock += 0.016;
      ball.rotation.y += spinSpeed;
      ball.rotation.x = Math.sin(clock * 0.3) * 0.08;
      pinkLight.position.set(Math.cos(clock * 0.9) * 3, Math.sin(clock * 0.6) * 2, 2.4);
      purpleLight.position.set(Math.cos(clock * 0.6 + Math.PI) * 3, Math.cos(clock * 0.5) * 2, -2.2);
      renderer.render(scene, camera);
    }
    animate();

    const pips = pipRefs.current;
    function setTicker(pct: number) {
      const idx = Math.min(3, Math.floor(pct / 25));
      if (tickerRef.current) tickerRef.current.textContent = TICKER_LINES[idx];
      pips.forEach((pip, i) => {
        pip?.classList.toggle("bg-espresso", i <= idx && pct > i * 25);
      });
    }

    const progress = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(SESSION_KEY, "1");
        setWiping(true);
        gsap.delayedCall(1.25, () => {
          setVisible(false);
          cancelAnimationFrame(raf);
        });
      },
    });

    // Whole sequence (progress + spin-up + wipe) adds up to exactly 5s total,
    // measured from the loader appearing to the site being revealed.
    tl.to(progress, {
      value: 100,
      duration: 3.25,
      ease: "power1.inOut",
      onUpdate: () => {
        const pct = Math.round(progress.value);
        if (fillRef.current) fillRef.current.style.width = pct + "%";
        if (pctRef.current) pctRef.current.textContent = pct + "%";
        setTicker(pct);
        spinSpeed = 0.012 + (pct / 100) * 0.05;
      },
    }).to(
      {},
      {
        duration: 0.5,
        onUpdate: function () {
          spinSpeed = 0.06 + this.progress() * 0.25;
        },
      }
    );

    return () => {
      tl.kill();
      cancelAnimationFrame(raf);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [shouldRun]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#f7c5da_0%,#f4ecde_72%)] ${
        wiping ? "animate-[wipe-out_1.25s_cubic-bezier(.65,0,.35,1)_forwards]" : ""
      }`}
    >
      <div className="relative z-[2] flex flex-col items-center gap-7">
        <div className="relative w-[230px] h-[230px]">
          <div className="absolute -inset-[30%] rounded-full bg-[radial-gradient(circle,rgba(232,100,154,0.35)_0%,rgba(232,100,154,0)_70%)] blur-md -z-10" />
          <canvas ref={canvasRef} className="block w-full h-full" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl leading-[0.95] text-center text-espresso">
          Four shots.
          <br />
          <span className="stroke-outline">Nothing less.</span>
        </h1>

        <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-berry h-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-hotpink shadow-[0_0_0_3px_rgba(232,100,154,0.25)]" />
          <span ref={tickerRef}>{TICKER_LINES[0]}</span>
        </div>

        <div className="flex items-center gap-3.5">
          <div className="w-[220px] h-2.5 bg-espresso rounded-full overflow-hidden">
            <div ref={fillRef} className="h-full w-0 rounded-full bg-gradient-to-r from-hotpink to-rose" />
          </div>
          <div ref={pctRef} className="font-mono text-[13px] text-espresso min-w-[38px] text-right">
            0%
          </div>
        </div>

        <div className="flex gap-2">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              ref={(el) => {
                pipRefs.current[i] = el;
              }}
              className="w-2.5 h-2.5 rounded-full border-[1.5px] border-espresso"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
