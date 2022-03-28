import React, { useLayoutEffect, useState, useEffect } from "react";
import "./Resize.css";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

const Resize = () => {
  const [width, height] = useWindowSize();
  const [showApp, setShowApp] = useState("");

  useEffect(() => {
    if (window.innerWidth < 1200 || window.innerHeight < 620) {
      setShowApp("warning-on");
    } else {
      setShowApp("warning-off");
    }
  }, [width, height]);

  return (
    <div className={showApp}>
      <span className="modal-dialog">
        Email Signature Template Generator isn’t available on mobile yet. We
        hope you'll try it out on a larger screen.
      </span>
    </div>
  );
};

export default Resize;
