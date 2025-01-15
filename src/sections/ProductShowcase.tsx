import Image from "next/image";
import productImage from "@/assets/product-image.png"

export const ProductShowcase = () => {
  return (
    <section className=" bg-gradient-to-b from-[#ffff] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="flex justify-center">
        <div className="tag">Boots Your Productivity</div>
        </div>
        <h2 className="text-center text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent mt-5">A More Effective Way To Track Progess</h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt magni ad esse, quaerat velit voluptates sequi maiores aspernatur, voluptatem iure autem repellendus laboriosam sunt dignissimos, optio molestiae error odio?
        <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
        </p>
        <Image src={productImage} alt="Product Image" className="mt-10"/>
      </div>
    </section>
  );
};
