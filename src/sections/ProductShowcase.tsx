import Image from "next/image";
import productImage from "@/assets/product-image.png"

export const ProductShowcase = () => {
  return (
    <section>
      <div className="container">
        <div >Boots Your Productivity</div>
        <h2>A More Effective Way To Track Progess</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt magni ad esse, quaerat velit voluptates sequi maiores aspernatur, voluptatem iure autem repellendus laboriosam sunt dignissimos, optio molestiae error odio?
        </p>
        <Image/>
      </div>
    </section>
  );
};
