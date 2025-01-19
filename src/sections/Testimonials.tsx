"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const secondColumn = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];
const thirdColumn = [...testimonials.slice(6, 9), ...testimonials.slice(6, 9)];

const TestimonialColumn = ({
  testimonials,
  direction,
}: {
  testimonials: typeof firstColumn;
  direction: 1 | -1;
}) => {
  const columnRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: columnRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250 * direction]);

  return (
    <motion.div ref={columnRef} style={{ y }} className="flex flex-col gap-7">
      {testimonials.map(({ text, imageSrc, name, username }, index) => (
        <div key={index} className="card">
          <div>{text}</div>
          <div className="flex items-center gap-3 mt-6">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="font-medium tracking-tight leading-5">{name}</div>
              <div className="tracking-tight leading-5">{username}</div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="tag">Testimonials</div>
        </div>
        <h2 className="description mt-5">What our users say</h2>
        <p className="title mx-auto mt-5 max-w-lg">
          From intuitive design to powerful features, our app has become an
          essential tool for users around the world.
        </p>
        <div
          className="flex justify-center gap-6 overflow-hidden max-h-[650px] py-10 mt-10"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <div className="flex-1">
            <TestimonialColumn testimonials={firstColumn} direction={1} />
          </div>
          <div className="flex-1 hidden md:block">
            <TestimonialColumn testimonials={secondColumn} direction={-1} />
          </div>
          <div className="flex-1 hidden lg:block">
            <TestimonialColumn testimonials={thirdColumn} direction={1} />
          </div>
        </div>
      </div>
    </section>
  );
};
