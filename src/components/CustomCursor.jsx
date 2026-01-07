import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
  if ("ontouchstart" in window) return;

  // 🚨 SAFETY CHECK (CRITICAL)
  if (!outerRef.current || !innerRef.current) return;

  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;

    if (!innerRef.current) return;

    // Dot follows mouse exactly
    innerRef.current.style.left = `${e.clientX}px`;
    innerRef.current.style.top = `${e.clientY}px`;
  };

  let animationFrameId;

  const animate = () => {
    if (!outerRef.current) return;

    // Smooth dragging (lerp)
    circle.current.x += (mouse.current.x - circle.current.x) * 0.15;
    circle.current.y += (mouse.current.y - circle.current.y) * 0.15;

    outerRef.current.style.left = `${circle.current.x}px`;
    outerRef.current.style.top = `${circle.current.y}px`;

    animationFrameId = requestAnimationFrame(animate);
  };

  animate();
  document.addEventListener("mousemove", handleMouseMove);

  const addHover = () => setIsHover(true);
  const removeHover = () => setIsHover(false);

  document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseenter", addHover);
    el.addEventListener("mouseleave", removeHover);
  });

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(animationFrameId);
  };
}, []);

  return (
    <>
      {/* Outer circle */}
      <div
        ref={outerRef}
        className={`
          fixed z-[9999]
          pointer-events-none
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          transition-transform duration-200 ease-out
          ${isHover ? "scale-125" : "scale-100"}
        `}
        style={{
          width: "50px",
          height: "50px",
          border: "3px solid #f4c20d",
        }}
      />

      {/* Inner dot */}
      <div
        ref={innerRef}
        className="fixed z-[10000] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: "#f4c20d", // contrasts with yellow
        }}
      />
    </>
  );
};

export default CustomCursor;
