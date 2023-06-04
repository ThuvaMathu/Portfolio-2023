import { useState, useEffect } from "react";

const useWindowDimensions = (): { width: number; height: number } => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const getWindowDimensions = (): { width: number; height: number } => {
      if (typeof window !== "undefined") {
        return {
          width: window.innerWidth,
          height: window.innerHeight,
        };
      }
      return { width: 0, height: 0 };
    };

    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    handleResize();

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize, { passive: true });

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
