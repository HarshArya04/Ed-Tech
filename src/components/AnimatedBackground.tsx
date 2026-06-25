import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 2;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Grid particles
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string }[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? "rgba(139, 92, 246, 0.5)" : "rgba(59, 130, 246, 0.5)",
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw perspective grid
      ctx.strokeStyle = "rgba(139, 92, 246, 0.08)";
      ctx.lineWidth = 1;

      const gridSize = 60;
      const horizonY = 100;

      // Horizontal lines with perspective
      for (let i = 0; i < 30; i++) {
        const y = horizonY + i * gridSize;
        const perspective = (y - horizonY) / (canvas.height - horizonY);
        const alpha = Math.max(0.02, 0.1 - perspective * 0.08);
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines with perspective
      const centerX = canvas.width / 2;
      for (let i = -20; i <= 20; i++) {
        const spread = i * gridSize * 2;
        ctx.strokeStyle = "rgba(59, 130, 246, 0.05)";
        ctx.beginPath();
        ctx.moveTo(centerX, horizonY);
        ctx.lineTo(centerX + spread, canvas.height);
        ctx.stroke();
      }

      // Draw and update particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}