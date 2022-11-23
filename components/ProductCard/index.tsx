import Image from "next/image";
import Link from "next/link";
import { priceFormat } from "../../utils/price";

const ProductCard = ({ product }) => {
  return (
    <Link
      href={`/products/${product?.handle}`}
      className="bg-gray-100 hover:bg-gray-200"
    >
      <div className="relative w-full min-h-[350px]">
        <Image
          className="mix-blend-darken"
          src={product?.thumbnail}
          alt={product?.title}
          fill
          objectFit="contain"
          sizes="(max-width: 768px) 50vw,
          25vw"
        />
        <section className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2">
          <h4 className="text-base font-normal">{product?.title}</h4>
          <h5 className="text-base font-normal">
            {priceFormat(product.variants[0].prices)}
          </h5>
        </section>
      </div>
    </Link>
  );
};

export default ProductCard;
