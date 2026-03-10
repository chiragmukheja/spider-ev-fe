import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("up");
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (Math.abs(currentY - lastY) < 10) return;

      setScrollDir(currentY > lastY ? "down" : "up");
      setLastY(currentY);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return scrollDir;
};

export default useScrollDirection;
