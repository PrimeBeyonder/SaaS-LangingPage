"use client"
import ArrowRight from "@/assets/arrow-right.svg"
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinder from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    // useMotionValueEvent(translateY, "change", (latestValue) => {
    //     console.log(latestValue);     
    // })
  return (
      <section ref={heroRef} className="pt-8 pb-20 md:pt-5 md:pb-20 overflow-x-clip"
               style={{background: 'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 86%)'}}>
          <div className="container">
              <div className="md:flex items-center">
                  <div className="md:w-[478px]">
                      <div className="tag"> Version 2.0 Is
                          Here
                      </div>
                      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text mt-6 text-transparent">Pathway
                          To Productivity</h1>
                      <p className="text-xl text-[#010D3E] tracking-tight mt-6 ">Celebrate the joy of accomplishment with an
                          app designed to track your progress and motivate your efforts.</p>
                      <div className="flex gap-2 items-center mt-[30px]">
                          <button className="btn btn-primary">Get For Free</button>
                          <button className="btn btn-text gap-2">
                              <span>Learn More</span>
                              <ArrowRight className="h-5 w-5"/>
                          </button>
                      </div>
                  </div>
                  <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
                  <motion.img 
                    src={cogImage.src} 
                    alt="Cog Image" 
                    className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
                    animate={{
                        y: [-30, 30]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 3,
                        ease: "easeInOut"  
                      }}
                    />
                    <motion.img 
                        src={cylinder.src} 
                        alt="" 
                        width={220} 
                        height={220} 
                        className="hidden md:block -top-8 -left-32 md:absolute"
                        style={{
                            translateY: translateY,
                        }}
                    />
                    <motion.img 
                        src={noodleImage.src} 
                        alt="" 
                        width={220} 
                        height={220} 
                        className="hidden lg:block rotate-[30%] top-[524px] left-[448px] md:absolute"
                        style={{
                            translateY: translateY,
                        }}
                    />
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Hero;