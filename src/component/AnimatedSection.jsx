import React, { useEffect, useRef } from "react";

const AnimatedSection = ({ children, animationClass }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", animationClass);
            entry.target.style.opacity = "1"; // Make the element visible
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [animationClass]);

  return (
    <section
      ref={sectionRef}
      style={{ opacity: 0, transition: "opacity 0.5s ease" }} // Initially hidden
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
