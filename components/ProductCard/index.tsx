import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <Link href={product?.url} className="bg-gray-400">
      <div className="relative w-full">
        <Image src={product?.image.ur} alt={product?.title} />
        <section className="absolute bottom-0 left-0 right-0 flex justify-between items-center">
          <h4 className="text-base font-normal">{product?.title}</h4>
          <h5 className="text-base font-normal">{product?.price}</h5>
        </section>
      </div>
    </Link>
  );
};

export default ProductCard;
