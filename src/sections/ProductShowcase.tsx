import Image from "next/image";
import productImage from "@/assets/product-image.png"

export const ProductShowcase = () => {
  return (
    <section className=" bg-gradient-to-b from-[#ffff] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="tag">Boots Your Productivity</div>
        <h2>A More Effective Way To Track Progess</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt magni ad esse, quaerat velit voluptates sequi maiores aspernatur, voluptatem iure autem repellendus laboriosam sunt dignissimos, optio molestiae error odio?
        </p>
        <Image src={productImage} alt="Product Image" className=""/>
      </div>
    </section>
  );
};
