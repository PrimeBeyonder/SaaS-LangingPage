import Image from "next/image";
import productImage from "@/assets/product-image.png"
import pymarid from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"

export const ProductShowcase = () => {
  return (
    <section className=" bg-gradient-to-b from-[#ffff] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
          <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
           <div className="tag">Boots Your Productivity</div>
          </div>
          <h2 className="description">A More Effective Way To Track Progess</h2>
           
          <p className="title mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt magni ad esse, quaerat velit voluptates sequi maiores aspernatur, voluptatem iure autem repellendus laboriosam sunt dignissimos, optio molestiae error odio?
          </p>
        </div>
        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10"/>
        <Image src={pymarid} alt="Pymarid Image" className="absolute -top-32 -right-36 hidden md:block" height={262} width={262}/>
        <Image src={tubeImage} alt="Tube Image" className="absolute bottom-24 -left-36 hidden md:block" height={248} width={262}/>
        </div>
      </div>
    </section>
  );
};
