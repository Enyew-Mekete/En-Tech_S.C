import { useEffect, useRef } from "react";

interface ThreeDHeroProps {
  currentSlideIndex: number;
}

export default function ThreeDHero({ currentSlideIndex }: ThreeDHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseColor: string;
    }> = [];

    const colors = [
      "rgba(34, 211, 238, 0.75)",  // Cyan
      "rgba(14, 165, 233, 0.75)",  // Light Blue
      "rgba(168, 85, 247, 0.75)",  // Purple
      "rgba(20, 184, 166, 0.75)",  // Teal
    ];

    // Resize handler
    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 11000));
      const color = colors[currentSlideIndex % colors.length];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 3.5 + 1.5,
          baseColor: color,
        });
      }
    };

    // Interactive mouse positioning
    const mouse = { x: -1000, y: -1000, active: false };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    // Add listeners
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Initial trigger
    handleResize();

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const color = colors[currentSlideIndex % colors.length];
      const maxDistance = 140; // Max distance for drawing connection line

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wall collisions
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Slight drift towards mouse
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 250) {
            p.x += (dx / dist) * 0.25;
            p.y += (dy / dist) * 0.25;
          }
        }

        // Draw particle node (glow effect)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = color;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw connection wires
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.38; // highly visible connector opacity
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = color.replace("0.75", alpha.toString());
            ctx.lineWidth = 1.6; // slightly thicker connecting line for high visibility
            ctx.stroke();
          }
        }
      }

      // Draw active connection from mouse
      if (mouse.active) {
        particles.forEach((p) => {
          const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.55;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = color.replace("0.75", alpha.toString());
            ctx.lineWidth = 1.8;
            ctx.stroke();
          }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentSlideIndex]);

  return (
    <div
      ref={containerRef}
      id="threed-hero-canvas-container"
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden bg-transparent"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ mixBlendMode: "screen" }}
      />
    </div>
  );
}
