import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 70;

    class Particle {
      constructor() {
        this.reset();
        this.phase = Math.random() * Math.PI * 2; // for glow animation
        this.glowSpeed = Math.random() * 0.02 + 0.008;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseRadius = Math.random() * 1.2 + 0.6;
        this.radius = this.baseRadius;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.baseOpacity = Math.random() * 0.35 + 0.15;
        this.opacity = this.baseOpacity;
      }

      update() {
        // Movement
        this.y += this.speedY;
        this.x += this.speedX;

        // Glow pulse (smooth breathing)
        this.phase += this.glowSpeed;
        const glow = (Math.sin(this.phase) + 1) / 3; // 0 → 1

        this.radius = this.baseRadius + glow * 1.5;
        this.opacity = this.baseOpacity + glow * 0.35;

        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(255,255,255,0.6)";
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
