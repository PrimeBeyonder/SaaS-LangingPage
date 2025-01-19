"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import pymarid from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className=" bg-gradient-to-b from-[#ffff] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boots Your Productivity</div>
          </div>
          <h2 className="description">A More Effective Way To Track Progess</h2>

          <p className="title mt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nesciunt magni ad esse, quaerat velit voluptates sequi maiores
            aspernatur, voluptatem iure autem repellendus laboriosam sunt
            dignissimos, optio molestiae error odio?
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pymarid.src}
            alt="Pymarid Image"
            className="absolute -top-32 -right-36 hidden md:block"
            height={262}
            width={262}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            className="absolute bottom-24 -left-36 hidden md:block"
            height={248}
            width={262}
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
