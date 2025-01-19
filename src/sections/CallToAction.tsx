import RightArrow from "@/assets/arrow-right.svg";
import Image from "next/image";
import startImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
export const CallToAction = () => {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container ">
        <div className="relative ">
          <h2 className="description text-center text-3xl md:text-[54px] lg:text-[64px] md:leading-[60px] lg:leading-[70px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] bg-clip-text mt-6 text-transparent">
            Sign Up For Free Today
          </h2>
          <p className="title mx-auto py-6 max-w-4xl text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px] tracking-tight text-[#010D3E]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
            corporis sit. Cumque maxime aut eum iure et? Perspiciatis atque
            recusandae fugit dolor laudantium, ducimus incidunt aut quibusdam
            est vel! Impedit?
          </p>
          <Image
            src={startImage}
            alt="Start Image"
            className="absolute top-20 -left-28 hidden md:block"
            height={202}
            width={202}
          />
          <Image
            src={springImage}
            alt="Spring Image"
            className="absolute bottom-20 -right-32 hidden md:block"
            height={202}
            width={202}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get For Free</button>
          <button className="btn btn-text">
            Learn More{" "}
            <span>
              <RightArrow className="h-5 w-5 mx-3" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
