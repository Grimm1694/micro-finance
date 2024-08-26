"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// Utility function to detect if an element is in the viewport
const useInViewport = (ref: React.RefObject<HTMLElement>) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return inViewport;
};

const Workflow = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useInViewport(ref);
  const { scrollYProgress } = useScroll();
  const [svgHeight, setSvgHeight] = useState(0);

  // Calculate the SVG height based on the content
  useEffect(() => {
    const updateHeight = () => {
      const height = document.querySelector('.wrap')?.offsetHeight || 0;
      setSvgHeight(height);
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Define animation variables
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <div className="container bg-gray-200 mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full" ref={ref}>
        {/* Animated SVG Beam */}
        {isInViewport && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center">
            <svg
              viewBox={`0 0 20 ${svgHeight}`}
              width="20"
              height={svgHeight}
              className="absolute left-1/2 transform -translate-x-1/2"
              aria-hidden="true"
            >
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                fill="none"
                stroke="#9091A0"
                strokeOpacity="0.16"
                transition={{ duration: 10 }}
              />
              <motion.path
                d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1.25"
                transition={{ duration: 10 }}
              />
              <defs>
                <motion.linearGradient
                  id="gradient"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="0"
                  y1={y1} // Animated gradient position
                  y2={y2} // Animated gradient position
                >
                  <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                  <stop stopColor="#18CCFC"></stop>
                  <stop offset="0.325" stopColor="#6344F5"></stop>
                  <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                </motion.linearGradient>
              </defs>
            </svg>
          </div>
        )}

        {/* Timeline Content */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
          </div>
          <div className="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
          </div>
          <div className="order-1 bg-red-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
