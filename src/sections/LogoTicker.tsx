"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <>
      <div className="py-10 bg-white">
        <div className="container">
          <div
            className="flex overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 25%, black 75%, transparent)", // For Safari support
            }}
          >
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Image
                className="logo-ticker-image"
                src={acmeLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={quantumLogo}
                alt="quantumLogo"
              />
              <Image
                className="logo-ticker-image"
                src={echoLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={celestialLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={pulseLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={apexLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={acmeLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={quantumLogo}
                alt="quantumLogo"
              />
              <Image
                className="logo-ticker-image"
                src={echoLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={celestialLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={pulseLogo}
                alt="Acme Logo"
              />
              <Image
                className="logo-ticker-image"
                src={apexLogo}
                alt="Acme Logo"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
