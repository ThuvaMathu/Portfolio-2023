import useWindowDimensions from "@/src/common/get-dimention";
import React, { useEffect, useRef, useState } from "react";

export default function ElementEffect({ children, ...props }: any) {
  const [show, setShow] = useState(false);
  const { height } = useWindowDimensions();
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    handleIfTop();
  }, []);

  const styleRef = useRef<any>(null);

  const handleIfTop = () => {
    const position = window?.pageYOffset;
    const position2 = styleRef?.current?.offsetTop;
    if (position + Math.floor(height / 1.5) >= position2) {
      setShow(true);
    }
  };
  const handleScroll = () => {
    const position = window?.pageYOffset;
    const position2 = styleRef?.current?.offsetTop;
    if (position + Math.floor(height / 1.5) >= position2) {
      setShow(true);
    } else {
      if (props?.redo || props?.redo === undefined) setShow(false);
    }
  };

  return (
    <div>
      {props.varient === "right" ? (
        <div
          style={props.style}
          className={`${props?.className} ${
            show
              ? "translate-y-0 tra opacity-1 md:translate-x-0"
              : " translate-y-16 opacity-0 md:translate-x-24 md:translate-y-0"
          } transition-all duration-700 ease-in-out`}
          ref={styleRef}
        >
          {children}
        </div>
      ) : props.varient === "left" ? (
        <div
          className={`${props?.className} ${
            show
              ? "translate-y-0 opacity-1 md:translate-x-0"
              : " translate-y-16 opacity-0 md:-translate-x-24 md:translate-y-0"
          } transition-all duration-700 ease-in-out w-full `}
          ref={styleRef}
        >
          {children}
        </div>
      ) : (
        <div
          className={`${props?.className} ${
            show ? "translate-y-0 opacity-1" : "translate-y-24 opacity-0"
          } transition-all duration-700 ease-in-out `}
          ref={styleRef}
        >
          {children}
        </div>
      )}
    </div>
  );
}
