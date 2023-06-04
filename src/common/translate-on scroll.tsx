import React, { useEffect, useRef, useState } from "react";

type translateType = {
  children: React.ReactNode;
  varient?: string;
  translateX?: number;
  translateY?: number;
  duration?: number;
  executeOnload?: boolean;
};

const TranslateOnScroll = ({ children, ...props }: translateType) => {
  const [show, setShow] = useState(false);
  const elementRef = useRef<any>(null);
  const { translateX, translateY, duration, executeOnload } = props;
  //console.log(props);
  useEffect(() => {
    console.log("top");
    if (executeOnload) {
      setShow(true);
    }
    const handleScroll = () => {
      const { top } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (top < windowHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    transition: `transform ${duration ? duration : 700}ms, opacity ${
      duration ? duration / 1.2 : 600
    }ms`,
    transform: show
      ? "translateY(0px) translateX(0px)"
      : `translateX(${translateX ? translateX : 0}px) translateY(${
          translateY ? translateY : 0
        }px)`,
    opacity: show ? 1 : 0,
  };

  return (
    <div ref={elementRef} style={styles} className=" delay-300 ">
      {children}
    </div>
  );
};

export default TranslateOnScroll;
